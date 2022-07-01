import connectToDatabase from '../../../utils/mongodb'
import { ObjectId } from 'mongodb'

import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0';

import { useState, useEffect, createContext } from 'react'
import { abilityModifier, diceRoll, xpToLevel, displayCrAsFraction, calculateProficiencyBonus, truncate } from '../../../utils/utils'

import styles from '../../../styles/CombatantDetails.module.css';
import encounterStyle from '../../../styles/Encounter.module.css'

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
import Nav from '../../../components/Nav';


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

      if (encounter) {
        const getCamapign = async () => {
          const response = await fetch(`${api}campaigns`, {
              method: "POST",
              body: JSON.stringify(
                  {
                  action: 'query',
                  data: {_id: encounter.campaignId}
              }),
              headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            const campaign = await response.json()
            if (campaign.length > 0) setCampaign(campaign[0])
      }
      getCamapign()

      const getAdventure = async () => {
        const response = await fetch(`${api}adventures`, {
            method: "POST",
            body: JSON.stringify(
                {
                action: 'query',
                data: {_id: encounter.adventureId}
            }),
            headers: {"Content-type": "application/json; charset=UTF-8"}
          })
          const adventure = await response.json()
          if (adventure.length > 0) setAdventure(adventure[0])
    }
    getAdventure()
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
        setModal({type: "none", on: false })
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
      console.log(combatant)
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
       <Nav location='encounter' user={user} encounter={encounter} campaign={campaign} adventure={adventure}></Nav>
  
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
       </>
       </EncounterContext.Provider>
    );
}

const CombatantDetails = ({ combatant, doDamage }) => {
  const [ tab, setTab ] = useState('details')
  return (
    <>
    <div className={styles.mainpanel}>

      <div className={encounterStyle.title}>
        {combatant.picture_url && <img src={combatant.picture_url} style={{height: '8ch'}}></img>}
        <div className={encounterStyle.title__info}>
          <h3>{combatant.name}</h3>
          <span>
            <p>
              <strong>{combatant.size && combatant.size} {combatant.type && combatant.type}</strong>, 
              <strong>Speed: </strong>{combatant.speed && combatant.speed}, 
              <strong>Languages: </strong>{combatant.languages && combatant.languages.join(', ')}, 
            </p>
            <p title={combatant.description}><strong>Description: </strong>{truncate(combatant.description, 100)}</p>

          </span>
        </div>
        <div className={styles.title_buttons}>
          <button>Add Condition</button>
        </div>
      </div>

      <div id={encounterStyle.tabs}>
        <button className={encounterStyle.tab} style={tab === 'details' ? {backgroundColor: 'white'} : {}} onClick={() => setTab('details')}>Details</button>
        <button className={encounterStyle.tab} style={tab === 'traits' ? {backgroundColor: 'white'} : {}} onClick={() => setTab('traits')}>Traits ({combatant.traits?.length > 0 ? combatant.traits.length : 0})</button>
        <button className={encounterStyle.tab} style={tab === 'actions' ? {backgroundColor: 'white'} : {}} onClick={() => setTab('actions')}>Actions ({combatant.actions?.length > 0 ? combatant.actions.length : 0})</button>
        <button className={encounterStyle.tab} style={tab === 'spells' ? {backgroundColor: 'white'} : {}} onClick={() => setTab('spells')}>Spells ({combatant.spellSlots?.reduce((total, current) => total + parseInt(current), 0)})</button>
        <button className={encounterStyle.tab} style={tab === 'legendary' ? {backgroundColor: 'white'} : {}} onClick={() => setTab('legendary')}>Legendary</button>
      </div>

      <div className={styles.detailscontainer}>
        <div style={tab === 'details' ? {display: "block"} : {display: "none"}} id='details'>
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
              {combatant.skills 
                && combatant.skills.includes('Athletics') 
                && <p className={encounterStyle.link} 
                title={abilityModifier(combatant.str) + calculateProficiencyBonus(combatant.cr)}
                onClick={() => {window.alert(diceRoll(1, 20, abilityModifier(combatant.str) + calculateProficiencyBonus(combatant.cr))[2])}}>
                Athletics</p>}
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
              {combatant.skills 
                && combatant.skills.includes('Acrobatics') 
                && <p className={encounterStyle.link} 
                title={abilityModifier(combatant.dex) + calculateProficiencyBonus(combatant.cr)}
                onClick={() => {window.alert(diceRoll(1, 20, abilityModifier(combatant.dex) + calculateProficiencyBonus(combatant.cr))[2])}}>
                Acrobatics</p>}

              {combatant.skills 
                && combatant.skills.includes('Sleight of Hand') 
                && <p className={encounterStyle.link} 
                title={abilityModifier(combatant.dex) + calculateProficiencyBonus(combatant.cr)}
                onClick={() => {window.alert(diceRoll(1, 20, abilityModifier(combatant.dex) + calculateProficiencyBonus(combatant.cr))[2])}}>
                  Sleight of Hand</p>}

              {combatant.skills 
                && combatant.skills.includes('Stealth') 
                && <p className={encounterStyle.link} 
                title={abilityModifier(combatant.dex) + calculateProficiencyBonus(combatant.cr)}
                onClick={() => {window.alert(diceRoll(1, 20, abilityModifier(combatant.dex) + calculateProficiencyBonus(combatant.cr))[2])}}>
                  Stealth</p>}

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
              {combatant.skills 
                && combatant.skills.includes('Arcana') 
                && <p className={encounterStyle.link} 
                onClick={() => {window.alert(diceRoll(1, 20, abilityModifier(combatant.int) + calculateProficiencyBonus(combatant.cr))[2])}}
                title={abilityModifier(combatant.int) + calculateProficiencyBonus(combatant.cr)}>
                Arcana</p>}
              {combatant.skills 
                && combatant.skills.includes('History') 
                && <p className={encounterStyle.link}
                onClick={() => {window.alert(diceRoll(1, 20, abilityModifier(combatant.int) + calculateProficiencyBonus(combatant.cr))[2])}}
                title={abilityModifier(combatant.int) + calculateProficiencyBonus(combatant.cr)}>
                  History</p>}
              {combatant.skills 
                && combatant.skills.includes('Investigation') 
                && <p className={encounterStyle.link}
                onClick={() => {window.alert(diceRoll(1, 20, abilityModifier(combatant.int) + calculateProficiencyBonus(combatant.cr))[2])}}
                title={abilityModifier(combatant.int) + calculateProficiencyBonus(combatant.cr)}>
                  Investigation</p>}
              {combatant.skills 
                && combatant.skills.includes('Nature') 
                && <p className={encounterStyle.link}
                onClick={() => {window.alert(diceRoll(1, 20, abilityModifier(combatant.int) + calculateProficiencyBonus(combatant.cr))[2])}}
                title={abilityModifier(combatant.int) + calculateProficiencyBonus(combatant.cr)}>
                  Nature</p>}
              {combatant.skills 
                && combatant.skills.includes('Religion') 
                && <p className={encounterStyle.link}
                onClick={() => {window.alert(diceRoll(1, 20, abilityModifier(combatant.int) + calculateProficiencyBonus(combatant.cr))[2])}}
                title={abilityModifier(combatant.int) + calculateProficiencyBonus(combatant.cr)}>
                  Religion</p>}

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
              {combatant.skills 
                && combatant.skills.includes('Animal Handling') 
                && <p className={encounterStyle.link}
                onClick={() => {window.alert(diceRoll(1, 20, abilityModifier(combatant.wis) + calculateProficiencyBonus(combatant.cr))[2])}}
                title={abilityModifier(combatant.wis) + calculateProficiencyBonus(combatant.cr)}>
                  Animal Handling</p>}
              {combatant.skills 
                && combatant.skills.includes('Insight') 
                && <p className={encounterStyle.link}
                onClick={() => {window.alert(diceRoll(1, 20, abilityModifier(combatant.wis) + calculateProficiencyBonus(combatant.cr))[2])}}
                title={abilityModifier(combatant.wis) + calculateProficiencyBonus(combatant.cr)}>
                  Insight</p>}
              {combatant.skills 
                && combatant.skills.includes('Medicine') 
                && <p className={encounterStyle.link}
                onClick={() => {window.alert(diceRoll(1, 20, abilityModifier(combatant.wis) + calculateProficiencyBonus(combatant.cr))[2])}}
                title={abilityModifier(combatant.wis) + calculateProficiencyBonus(combatant.cr)}>
                  Medicine</p>}
              {combatant.skills 
                && combatant.skills.includes('Perception') 
                && <p className={encounterStyle.link}onClick={() => {window.alert(diceRoll(1, 20, abilityModifier(combatant.wis) + calculateProficiencyBonus(combatant.cr))[2])}}
                title={abilityModifier(combatant.wis) + calculateProficiencyBonus(combatant.cr)}>
                  Perception</p>}
              {combatant.skills 
                && combatant.skills.includes('Survival')
                && <p className={encounterStyle.link}
                onClick={() => {window.alert(diceRoll(1, 20, abilityModifier(combatant.wis) + calculateProficiencyBonus(combatant.cr))[2])}}
                title={abilityModifier(combatant.wis) + calculateProficiencyBonus(combatant.cr)}>
                  Survival</p>}

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
              {combatant.skills
                && combatant.skills.includes('Deception') 
                && <p className={encounterStyle.link}
                onClick={() => {window.alert(diceRoll(1, 20, abilityModifier(combatant.cha) + calculateProficiencyBonus(combatant.cr))[2])}}
                title={abilityModifier(combatant.cha) + calculateProficiencyBonus(combatant.cr)}>
                  Deception</p>}
              {combatant.skills 
                && combatant.skills.includes('Intimidation') 
                && <p className={encounterStyle.link}
                onClick={() => {window.alert(diceRoll(1, 20, abilityModifier(combatant.cha) + calculateProficiencyBonus(combatant.cr))[2])}}
                title={abilityModifier(combatant.cha) + calculateProficiencyBonus(combatant.cr)}>
                  Intimidation</p>}
              {combatant.skills 
                && combatant.skills.includes('Performance') 
                && <p className={encounterStyle.link}
                onClick={() => {window.alert(diceRoll(1, 20, abilityModifier(combatant.wis) + calculateProficiencyBonus(combatant.cr))[2])}}
                title={abilityModifier(combatant.cha) + calculateProficiencyBonus(combatant.cr)}>
                  Performance</p>}
              {combatant.skills 
                && combatant.skills.includes('Persuasion') 
                && <p className={encounterStyle.link}
                onClick={() => {window.alert(diceRoll(1, 20, abilityModifier(combatant.wis) + calculateProficiencyBonus(combatant.cr))[2])}}
                title={abilityModifier(combatant.cha) + calculateProficiencyBonus(combatant.cr)}>
                  Persuasion</p>}

            </div>
          </div>
        </div>

        {combatant.traits && combatant.traits.length > 0 && <div style={tab === 'traits' ? {display: "block"} : {display: "none"}} id='details'>
          {combatant.traits &&
            <div className={styles.traits}>
              {combatant.traits && combatant.traits.map((trait) => (
                <div key={trait._id} className={styles.trait}>
                  <h2>{trait.name}</h2>
                  <p>{trait.description}</p>
                </div>
              ))}
            </div>}
        </div>}

        <div style={tab === 'actions' ? {display: "block"} : {display: "none"}} id='details'>
          {combatant.actions &&
          <div className={styles.actions}>
            {combatant.actions && combatant.actions.map((action) => (

                <div key={action._id} className={styles.action}>
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

        {combatant?.spells?.length > 0 &&<div style={tab === 'spells' ? {display: "block"} : {display: "none"}} id='details'>
          <div id='spellslots'className={encounterStyle.spellslots}>
            {combatant.spellSlots.map((slots, index) => (
              <>
                <label htmlFor={index}>
                  {index + 1}
                  <input id={index} type='number' value={slots}></input>
                </label>
              </>
            ))}
          </div>
          <div>
            <ul>
            {combatant?.spells?.map(spell => (
              <li>{spell}</li>
            ))}
            </ul>
          </div>
        </div>}


        
        </div>
      </div>
    </>
  );
};

export default withPageAuthRequired(Encounter)
export async function getServerSideProps(context) {
    const {db} = await connectToDatabase()
    const id = new ObjectId(context.params.id)
    let response = await db.collection("encounters").find({_id: id}).toArray()
    const encounter = await JSON.parse(JSON.stringify(response))

    return {
        props: {initialEncounter: encounter[0]}
    }
}