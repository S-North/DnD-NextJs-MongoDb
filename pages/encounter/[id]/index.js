import connectToDatabase from '../../../utils/mongodb'
import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0';

import { useState, useEffect, createContext } from 'react'
import { abilityModifier, diceRoll, xpToLevel, displayCrAsFraction, calculateProficiencyBonus } from '../../../utils/utils'

import styles from '../../../styles/CombatantDetails.module.css';
import encounterStyle from '../../../styles/Encounter.module.css'
import { ObjectId } from 'mongodb'

import { MonsterForm } from '../../monsters';
import CharacterForm from '../../../components/forms/CharacterForm'
import InitiativeList from '../../../components/encounter/InitiativeList';
import AddCharacter from '../../../components/encounter/AddCharacter';
import AddMonster from '../../../components/encounter/AddMonster';
import EditMonsters from '../../../components/encounter/EditMonsters';
import RollInitiative from '../../../components/encounter/RollInitiative';
import DamageCalculator from '../../../components/encounter/DamageCalculator';
import EncounterList from '../../../components/encounter/EncounterList';
import DoAttack from '../../../components/encounter/DoAttack';


export const EncounterContext = createContext()

const Encounter = ({initialEncounter}) => {
    const api = '/api/'
    const { user, error, isLoading } = useUser();
    const [encounter, setEncounter] = useState(initialEncounter);
    const [characters, setCharacters] = useState();
    const [campaign, setCampaign] = useState({});
    const [adventure, setAdventure] = useState({});
    const [initiative, setInitiative] = useState();

    // used as temporary storage during edit, then as the combatant to display during running 
    const [selected, setSelected] = useState();

    // used during mode: 'running' as temporary storage when adjusting a combatant e.g. changing HP, conditions, etc
    const [ tempCombatant, setTempCombatant ] = useState()
    const [modal, setModal] = useState({ type: "none", on: false });

    console.log(user.name)

    useEffect(() => {
      // keybindings for keyboard commands. Needs some more research 

      document.addEventListener('keyup', function(e) {
        if (e.key === 'Escape') {
            setModal({on: false, type: ''})
        }
        // else if (e.key === 'ArrowRight' && encounter.mode === 'running') {
        //   incrementInitiative("forward")
        //   console.log('right arrow')
        // }
        // else if (e.key === 'ArrowLeft' && encounter.mode === 'running') {
        //   incrementInitiative("back")
        //   console.log('left arrow')
        // }
        // else if (e.key === 'h' && e.getModifierState('Control') && e.getModifierState('Alt') && encounter.mode === 'running') {
        //   // incrementInitiative("back")
        //   console.log('hitpoints')
        //   hpCalulatorForSelected()
        // }
      });
 
      return () => {}
    }, [])
      
    useEffect(() => {
      if (encounter && !characters) {
          const getCharacters = async () => {
              const response = await fetch(`${api}characters`, {
                  method: "POST",
                  body: JSON.stringify(
                      {
                      action: 'query',
                      data: {campaignId: encounter.campaignId}
                  }),
                  headers: {"Content-type": "application/json; charset=UTF-8"}
                })
                const encCharacters = await response.json()
                setCharacters(encCharacters)
          }
          getCharacters()
      }

      return () => {}
    }, [encounter])

    useEffect(() => {
      // when the turn is changed to a new combatant, make them selected (this will be used to update the details view)
      const combatant = encounter.initiative[encounter.turn]
      // console.log(combatant)

      if (characters && encounter && encounter.turn !== undefined && encounter.mode === 'running') {
        console.log(combatant)
        switch (true) {
          case combatant.enemy == 'pc':
            setSelected(characters.filter(character => character._id === combatant._id)[0])
            break
            
          case combatant.enemy === 'monster':
            setSelected(encounter.monsters.filter(monster => monster._id === combatant._id)[0])
        }
      }
    
      return () => {}
    }, [encounter.turn, characters])
      
    const initiativeItemToFullStats = (initItem) => {
      if (characters) {
        switch (true) {
          default:
              break;
          case initItem.enemy === "monster":
              return encounter.monsters.filter((f) => f._id === initItem._id)[0];
              break;
          case initItem.enemy === "pc":
              return characters.filter((f) => f._id === initItem._id)[0];

      }
      }
    }

    const selectMonster = (monster) => {
        // utility function to handle setting the selected item state. Should propably rename as this is used for monsters, characters, npcs, etc
        setSelected(monster);
      };
    
    const addCharacters = async (charactersList) => {
        const response = await fetch(`${api}encounters`, {
            method: "POST",
            body: JSON.stringify(
                {
                action: 'editone',
                data: {
                    ...encounter,
                    initiative: [...encounter.initiative, ...charactersList]}
            }),
            headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            const encCharacters = await response.json()
            if (encCharacters.acknowledged && encCharacters.modifiedCount > 0) {
            setEncounter({
                ...encounter,
                initiative: [...encounter.initiative, ...charactersList]})
            setModal({on: false, type: ""})
            }
    }
    
    const addMonsters = async (monsters) => {
      // identify the collection and document then update the initiative & monsters
      const response = await fetch(`${api}encounters`, {
        method: "POST",
        body: JSON.stringify(
            {
            action: 'editone',
            data: {
              _id: encounter._id,
              initiative: [...encounter.initiative, ...monsters.map(m => (
                  {
                      _id: m._id,
                      enemy: "monster",
                      source: m.source,
                      init: 0,
                      name: m.name
                  }
              ))],
              monsters: [...encounter.monsters, ...monsters.map(m => (
                {
                    ...m,
                    enemy: "monster"
                }))]
          }
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        const encCharacters = await response.json()
        if (encCharacters.acknowledged && encCharacters.modifiedCount > 0) {
        setEncounter(
          {
            ...encounter,
            initiative: [...encounter.initiative, ...monsters.map(m => (
                {
                    _id: m._id,
                    enemy: "monster",
                    source: m.source,
                    init: 0,
                    name: m.name
                }
            ))],
            monsters: [...encounter.monsters, ...monsters.map(m => (
              {
                  ...m,
                  enemy: "monster"
              }))]
        }
        )
        setModal({on: false, type: ""})
        }
      setModal({ on: false, type: "" }); // close the form window
      };
    
    const deleteCombatant = async (combatant) => {
        const response = await fetch(`${api}encounters`, {
            method: "POST",
            body: JSON.stringify(
                {
                action: 'editone',
                data: {
                    ...encounter,
                    initiative: [...encounter.initiative.filter(i => i._id !== combatant._id)],
                    monsters: [...encounter.monsters.filter(i => i._id !== combatant._id)]
                }
            }),
            headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            const encCharacters = await response.json()
            if (encCharacters.acknowledged && encCharacters.modifiedCount > 0) {
            setEncounter({
                ...encounter,
                initiative: [...encounter.initiative.filter(i => i._id !== combatant._id)],
                monsters: [...encounter.monsters.filter(i => i._id !== combatant._id)]
            })
            setModal({on: false, type: ""})
            }
    }
    
    const editCharacter = async (character, updated) => {
      // updates the selected character in the characters collection
      // {character} is an object containing the full stats of the character, updated is an object containing the keys and values to update
      // update should be an object containing the changed fields in the character e.g. {currentHp: 15, conditions: [...conditions, 'blinded']}
      console.log(character)
      console.log(updated)
      const response = await fetch(`${api}characters`, {
        method: "POST",
        body: JSON.stringify(
            {
            action: 'editone',
            data: {
              _id: character._id,
              ...updated
          }
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        const encCharacters = await response.json()
        if (encCharacters.acknowledged && encCharacters.modifiedCount > 0) {
        setCharacters(
          [
            ...characters.filter(c => c._id !== character._id),
            {...character, ...updated}
          ]
        )
        }
    };

    const editMonster = async (monster, update) => {
      // {monster} is an object containing the full stats of the monster
      // updated is an object containing the keys and values to update
      // update should be an object containing the changed fields in the monster e.g. {currentHp: 15, conditions: [...conditions, 'blinded']}

      // console.log(monster)
      // console.log(update)
      const initiativeItem = encounter.initiative.filter(i => i._id === monster._id)

      if (!update) update = monster
      // console.log(update)

      const updated = {...monster, ...update}
      // console.log(updated)

      const response = await fetch(`/api/encounters`, {
          method: "POST",
          body: JSON.stringify(
              {
              action: 'editone',
              data: {
                _id: encounter._id,
                ...encounter,
                monsters: [
                  ...encounter.monsters.filter(m => m._id !== monster._id),
                  updated
                ]
              }
          }),
          headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        const updateStatus = await response.json();
        if (updateStatus.acknowledged && updateStatus.modifiedCount === 1) {
          setEncounter(
            {
              ...encounter,
              monsters: [
                ...encounter.monsters.filter(m => m._id !== monster._id),
                updated
              ]
            }
          )
        }
      }
  
    const saveInitiative = async (initiative) => {
      console.log(initiative)
      // update the encounter with the initiative rolls, then set the encounter to "running"
      const response = await fetch(`${api}encounters`, {
          method: "POST",
          body: JSON.stringify(
              {
              action: 'editone',
              data: {
                _id: encounter._id,
                initiative: initiative,
                mode: 'running',
                round: 0,
                turn: 0
              }
          }),
          headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        const newInitiative = await response.json()
        setEncounter({
          ...encounter,
          initiative: initiative,
          mode: 'running',
          round: 0,
          turn: 0
        })
      setModal({ on: false, type: "" });
      setSelected(initiativeItemToFullStats(initiative[0]))
    };

    const editEncounter = async (update) => {
      // update should be an object containing the changed fields in the encounter
      const response = await fetch(`/api/encounters`, {
          method: "POST",
          body: JSON.stringify(
              {
              action: 'editone',
              data: {
                _id: encounter._id,
                ...update
              }
          }),
          headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        const updateStatus = await response.json()
        setEncounter({...encounter, ...update})
    }
 
    const incrementInitiative = (direction) => {
      // console.log(`length: ${encounter.initiative.length} turn: ${encounter.turn}`)
      switch (direction) {
        case 'forward':
          if (encounter.turn < encounter.initiative.length -1) {
            editEncounter({ turn: encounter.turn + 1 });
          } else {
            editEncounter({ 
              turn: 0, 
              round: encounter.round + 1 });
          }
          break;

        case "back":
          if (encounter.turn > 0) {
            editEncounter({ turn: encounter.turn - 1 });
          } else if (encounter.round > 0) {
            editEncounter({
              turn: encounter.initiative.length - 1,
              round: encounter.round - 1,
            });
          }
          break;
      }
    };
  
    const displayCombatant = (combatant) => {
      setSelected(combatant);
    };

    const changeHP = (combatant) => {
      console.log('here i am')
      setTempCombatant(combatant)
      setModal({on: true, type: 'HpCalculator'})
    }

    const hpCalulatorForSelected = () => {
      console.log(selected)
      console.log(encounter)
      changeHP(selected)
    }

    const doDamage = (attacker, attack) => {
      console.log(attacker)
      console.log(attack)
      setTempCombatant({attacker, attack})
      setModal({on: true, type: 'doAttack'})
    }
    
    return (
      <EncounterContext.Provider value={{encounter, setEncounter, characters, setCharacters, selected, setSelected, modal, setModal, initiativeItemToFullStats}}>
       <>
  
       {/* modal window for popup forms */}
       {modal.on && (
          <div id="modal-window" className="modal">
            {/* Modal content */}
            <div className="modal-content">

              <span className="close" onClick={() => {
                  setModal({ on: false, type: "none" });
                }}>&times;
              </span>

              {modal.type === "addPC" && <AddCharacter addCharacters={addCharacters}></AddCharacter> }

              {modal.type === "addMonster" && (
                  <div className={encounterStyle.monster_select}>
                    <AddMonster></AddMonster>
                  </div>
              )}

              {modal.type === "editMonsters" && ( <EditMonsters addMonsters={addMonsters}></EditMonsters> )}

              {modal.type === "editCombatant" && selected && selected.enemy === 'monster' && <MonsterForm selected={selected} setSelected={setSelected} update={ editMonster }></MonsterForm> }
              {modal.type === "editCombatant" && selected && selected.enemy === 'pc' && <CharacterForm data={selected} update={ editMonster }></CharacterForm> }

              {modal.type === "rollInitiative" && ( <RollInitiative saveInitiative={saveInitiative}></RollInitiative> )}

              {modal.type === "HpCalculator" && ( <DamageCalculator targets={tempCombatant} editMonster={editMonster} editCharacter={editCharacter} setCampaign={setCampaign}></DamageCalculator> )}

              {modal.type === "doAttack" && tempCombatant && <DoAttack tempCombatant={tempCombatant} encounter={encounter} characters={characters}></DoAttack> }

            </div>
          </div>
        )}

        <section>
            {/* the edit list of combatants */}
            {encounter && encounter.mode === "editing" && (
              <InitiativeList displayItem={(selected) => { setSelected(selected); setModal({on: true, type: 'editCombatant'})}} deleteItem={deleteCombatant} initiativeItemToFullStats={initiativeItemToFullStats}></InitiativeList>
          )}

          {/* running initiative list */}
          {encounter && encounter.mode === "running" && (
            <EncounterList incrementInitiative={incrementInitiative} editEncounter={editEncounter} displayCombatant={displayCombatant} changeHP={changeHP}></EncounterList>
          )}

        {selected && <div className="column-wide">
          <CombatantDetails combatant={selected} doDamage={doDamage}></CombatantDetails>
        </div>}

        </section>

        <footer>
          <p style={{color: "ghostwhite"}}>Welcome {user.name}</p>
        </footer>
       </>
       </EncounterContext.Provider>
    );
}

export default withPageAuthRequired(Encounter)

const CombatantDetails = ({ combatant, doDamage }) => {
  return (
    <>
    <div className={styles.mainpanel}>

      <div className={styles.title}>
        <h3>{combatant.name}</h3>
        <div className={styles.title_buttons}>
          <button>Add Condition</button>
        </div>
      </div>

      <div className={styles.detailscontainer}>

        <div className={styles.abilityrow}>

          <div className={styles.abilitybox}>
            <h2>Str</h2>
            <button className={styles.btn} title="Athletics"
              onClick={() => {
                window.alert(diceRoll(1, 20, abilityModifier(combatant.str))[2]);
              }}
            >
              {combatant.str}
            </button>
            <button className={styles.btn}>{(combatant.saves && combatant.saves.includes('Str')) ? abilityModifier(combatant.str) + (calculateProficiencyBonus(14)) : abilityModifier(combatant.str)}</button>
            {combatant.skills && combatant.skills.includes('Athletics') && <button className={styles.btn}>Athletics</button>}
          </div>

          <div className={styles.abilitybox}>
            <h2>Dex</h2>
            <button className={styles.btn} title="Acrobatics, Sleight of Hand, Stealth"
              onClick={() => {
                window.alert(diceRoll(1, 20, abilityModifier(combatant.dex))[2]);
              }}
            >
              {combatant.dex}
            </button>
            <button className={styles.btn}>{(combatant.saves && combatant.saves.includes('Dex')) ? abilityModifier(combatant.dex) * 2 : abilityModifier(combatant.dex)}</button>
            {combatant.skills && combatant.skills.includes('Acrobatics') && <button className={styles.btn}>Acrobatics</button>}
            {combatant.skills && combatant.skills.includes('Sleight of Hand') && <button className={styles.btn}>Sleight of Hand</button>}
            {combatant.skills && combatant.skills.includes('Stealth') && <button className={styles.btn}>Stealth</button>}
          </div>

          <div className={styles.abilitybox}>
            <h2>Con</h2>
            <button className={styles.btn}
              onClick={() => {
                window.alert(diceRoll(1, 20, abilityModifier(combatant.con))[2]);
              }}
            >
              {combatant.con}
            </button>
            <button className={styles.btn}>{(combatant.saves && combatant.saves.includes('Con')) ? abilityModifier(combatant.con) * 2 : abilityModifier(combatant.con)}</button>
          </div>

          <div className={styles.abilitybox}>
            <h2>Int</h2>
            <button className={styles.btn}  title='Arcana, History, Investigation, Nature, Religion'
              onClick={() => {
                window.alert(diceRoll(1, 20, abilityModifier(combatant.int))[2]);
              }}
            >
              {combatant.int}
            </button>
            <button className={styles.btn}>{(combatant.saves && combatant.saves.includes('Int')) ? abilityModifier(combatant.int) * 2 : abilityModifier(combatant.int)}</button>
            {combatant.skills && combatant.skills.includes('Arcana') && <button className={styles.btn}>Arcana</button>}
            {combatant.skills && combatant.skills.includes('History') && <button className={styles.btn}>History</button>}
            {combatant.skills && combatant.skills.includes('Investigation') && <button className={styles.btn}>Investigation</button>}
            {combatant.skills && combatant.skills.includes('Nature') && <button className={styles.btn}>Nature</button>}
            {combatant.skills && combatant.skills.includes('Religion') && <button className={styles.btn}>Religion</button>}
          </div>

          <div className={styles.abilitybox}>
            <h2>Wis</h2>
            <button className={styles.btn} title='Animal Handling, Insight, Medicine, Perception, Survival'
              onClick={() => {
                window.alert(diceRoll(1, 20, abilityModifier(combatant.wis))[2]);
              }}
            >
              {combatant.wis}
            </button>
            <button className={styles.btn}>{(combatant.saves && combatant.saves.includes('Wis')) ? abilityModifier(combatant.wis) * 2 : abilityModifier(combatant.wis)}</button>
            {combatant.skills && combatant.skills.includes('Animal Handling') && <button className={styles.btn}>Animal Handling</button>}
            {combatant.skills && combatant.skills.includes('Insight') && <button className={styles.btn}>Insight</button>}
            {combatant.skills && combatant.skills.includes('Medicine') && <button className={styles.btn}>Medicine</button>}
            {combatant.skills && combatant.skills.includes('Perception') && <button className={styles.btn}>Perception</button>}
            {combatant.skills && combatant.skills.includes('Survival') && <button className={styles.btn}>Survival</button>}
          </div>

          <div className={styles.abilitybox}>
            <h2>Cha</h2>
            <button className={styles.btn} title='Deception, Intimidation, Performance, Persuasion'
              onClick={() => {
                window.alert(diceRoll(1, 20, abilityModifier(combatant.cha))[2]);
              }}
            >
              {combatant.cha}
            </button>
            <button className={styles.btn}>{(combatant.saves && combatant.saves.includes('Cha')) ? abilityModifier(combatant.cha) * 2 : abilityModifier(combatant.cha)}</button>
            {combatant.skills && combatant.skills.includes('Deception') && <button className={styles.btn}>Deception</button>}
            {combatant.skills && combatant.skills.includes('Intimidation') && <button className={styles.btn}>Intimidation</button>}
            {combatant.skills && combatant.skills.includes('Performance') && <button className={styles.btn}>Performance</button>}
            {combatant.skills && combatant.skills.includes('Persuasion') && <button className={styles.btn}>Persuasion</button>}
          </div>
        </div>

        {combatant.traits &&
          <div className={styles.traits}>
            <h2>Traits</h2>
            {combatant.traits && combatant.traits.map((trait) => (
              <div className={styles.trait}>
                <h2>{trait.name}</h2>
                <p>{trait.description}</p>
              </div>
            ))}
          </div>}
        
        {combatant.actions &&
        <div className={styles.actions}>
          <h2>Actions</h2>
          {combatant.actions && combatant.actions.map((action) => (

              <div key={action.name} className={styles.action}>
                <h2>{action.name}</h2>
                <p>{action.description}</p>
                {(action.attack && action.attack > 0) | action.damage1.hdDice ? (
                  <button className={styles.btn}
                    onClick={() => {
                      doDamage({_id: combatant._id, name: combatant.name, enemy: combatant.enemy}, action)
                    }}
                  >
                    Do Attack
                  </button>
                ): <></>}
                {action.damage && (
                  <button
                    onClick={() => {
                      window.alert(
                        diceRoll(
                          action.damage.dice,
                          action.damage.sides,
                          action.damage.bonus
                        )[2]
                      );
                    }}
                  >
                    damage: {action.damage.dice}d{action.damage.sides}+
                    {action.damage.bonus}
                  </button>
                )}
              </div>

            ))}

        </div>}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
    const {db} = await connectToDatabase()
    const id = new ObjectId(context.params.id)
    let response = await db.collection("encounters").find({_id: id}).toArray()
    const encounter = await JSON.parse(JSON.stringify(response))

    return {
        props: {initialEncounter: encounter[0]}
    }
}