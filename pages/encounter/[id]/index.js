import { connectToDatabase } from '../../../utils/mongodb'
import { useState, useEffect, createContext } from 'react'
import { abilityModifier, diceRoll, xpToLevel, displayCrAsFraction, calculateProficiencyBonus } from '../../../utils/utils'

import styles from '../../../styles/CombatantDetails.module.css';
import encounterStyle from '../../../styles/Encounter.module.css'
import { ObjectId } from 'mongodb'
import InitiativeList from '../../../components/encounter/InitiativeList';
import AddCharacter from '../../../components/encounter/AddCharacter';
import AddMonster from '../../../components/encounter/AddMonster';
import EditMonsters from '../../../components/encounter/EditMonsters';
import RollInitiative from '../../../components/encounter/RollInitiative';
import DamageCalculator from '../../../components/encounter/DamageCalculator';
import EncounterList from '../../../components/encounter/EncounterList';


export const EncounterContext = createContext()

const Encounter = ({initialEncounter}) => {
    const api = '/api/'
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
                  {...monster, ...update}
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
                {...monster, ...update}
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

              {modal.type === "addPC" && (
                <AddCharacter addCharacters={addCharacters}></AddCharacter>
              )}

              {modal.type === "addMonster" && (
                  <div className={encounterStyle.monster_select}>
                    <AddMonster></AddMonster>
                  </div>
              )}

              {modal.type === "editMonsters" && (
                  <EditMonsters addMonsters={addMonsters}></EditMonsters>
              )}

              {modal.type === "rollInitiative" && (
                  <RollInitiative saveInitiative={saveInitiative}></RollInitiative>
              )}

              {modal.type === "HpCalculator" && (
                <DamageCalculator targets={tempCombatant} editMonster={editMonster} editCharacter={editCharacter} setCampaign={setCampaign}></DamageCalculator>
              )}

              {modal.type === "doAttack" && (
                <>
                {tempCombatant && <DoAttack tempCombatant={tempCombatant} encounter={encounter} characters={characters}></DoAttack>}
                </>
              )}

            </div>
          </div>
        )}

        <section>
            {/* the edit list of combatants */}
            {encounter && encounter.mode === "editing" && (
              <InitiativeList displayItem={selectMonster} deleteItem={deleteCombatant} initiativeItemToFullStats={initiativeItemToFullStats}></InitiativeList>
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

export default Encounter

const CombatantDetails = ({ combatant, doDamage }) => {
  return (
    <>
    <div className={styles.mainpanel}>

      <div className={styles.title}>
        <h3>{combatant.name}</h3>
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
                {action.attack && action.attack > 0 ? (
                  <button className={styles.btn}
                    onClick={() => {
                      doDamage({_id: combatant._id, name: combatant.name, enemy: combatant.enemy}, action)
                    }}
                  >
                    +{action.attack}
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

// const DamageCalculator = ({characters, monsters, targets, editEncounter, setCampaign}) => {
//   const [ combatant, setCombatant ] = useState()
//   const [ damage, setDamage ] = useState(0)

//   useEffect(() => {
//     if (tempCombatant && characters && monsters) {
//       console.log(tempCombatant)
//       switch (tempCombatant.enemy) {
//         case 'pc':
//           console.log('pc')
//           setCombatant(characters.filter(character => character._id === tempCombatant._id)[0])
//           break
//         case 'monster':
//           console.log('monster')
//           setCombatant(monsters.filter(monster => monster._id === tempCombatant._id)[0])
//           break

//       }
//     }
  
//     return () => {}
//   }, [tempCombatant, characters, monsters])

//   const applyDamage = (addRremove, amount) => {
//     switch (addRremove) {
//       case 'damage':
//         const damageTotal = combatant.currentHp - amount
//         damageTotal < 0 
//           ? setCombatant({...combatant, currentHp: 0}) 
//           : setCombatant({...combatant, currentHp: damageTotal})
//           break
//       case 'heal':
//         const healTotal = combatant.currentHp + amount
//         healTotal > combatant.maxHp 
//           ? setCombatant({...combatant, currentHp: combatant.maxHp}) 
//           : setCombatant({...combatant, currentHp: healTotal})
//     }
//   }
  
//   return (
//     <div id='damage-calculator'>
//       <h2>Damage Calculator</h2>

//       {combatant && 
//       <div>
//         <h2>{combatant.name}</h2>
//         <div className='flex-row'>
//           <input 
//             type='number' 
//             max={combatant.maxHP} 
//             min='0' 
//             value={combatant.currentHp} 
//             onChange={(e) => setCombatant({...combatant, currentHp: parseInt(e.target.value)})}>
//           </input>
//         </div>

//         <form className='flex-row'>
//           <button onClick={(e) => {e.preventDefault(); damage > 0 && setDamage(damage - 1)}}>{"<"}</button>
//           <input
//             type='number'
//             value={damage}
//             onChange={(e) => {setDamage(parseInt(e.target.value))}}
//             ></input>
//           <button onClick={(e) => {e.preventDefault(); setDamage(damage + 1)}}>{">"}</button>
//           <button onClick={(e) => {e.preventDefault(); applyDamage('heal', damage)}}>Heal</button>
//           <button onClick={(e) => {e.preventDefault(); applyDamage('damage', damage)}}>Damage</button>
//         </form>
//       </div>}
//     </div>
//   );
// }

const DoAttack = ({tempCombatant, encounter, characters}) => {
  const [ toHitRoll, setToHitRoll ] = useState();
  const [ targets, setTargets ] = useState([]);
  const [ combatants, setCombatants ] = useState();
  const [ combatantsHit, setCombatantsHit ] = useState([]);
  const [ criticalHit, setCriticalHit ] = useState(false);
  const [ criticalMiss, setCriticalMiss ] = useState(false);

  useEffect(() => {
    const combatList = []
    if (encounter && characters) {
      console.log(encounter.initiative)
      console.log(encounter.monsters)
      console.log(characters)

      encounter.initiative.forEach(combatant => {
        switch (combatant.enemy) {
          case 'monster':
            combatList.push( encounter.monsters.filter( monster => monster._id === combatant._id )[0] )
            break
          case 'pc':
            combatList.push( characters.filter( pc => pc._id === combatant._id)[0])
        }
      })
    }
    setCombatants(combatList)
  
    return () => {}
  }, [tempCombatant, encounter, characters])

  useEffect(() => {
    // focus the first checkbox on first load, so we can use the keyboard to select items
    const firstCheckbox = document.getElementsByClassName('target-checkbox')
    firstCheckbox.length > 0 && firstCheckbox[0].focus()
    return () => {}
  }, [])

  useEffect(() => {
    console.log(targets)
    const storeHits = []
    if ( targets && targets.length > 0 && toHitRoll ) {
      targets.forEach(target => {
        const combatant = combatants.filter(c => c._id === target)[0]
        if (parseInt(toHitRoll[0]) == 20) {
          console.log(`critical hit, hits all`);
          storeHits.push(combatant)
          setCriticalHit(true)
        }
        else if (parseInt(toHitRoll[0]) == 1) {
          console.log("critical miss, misses all")
          setCriticalMiss(true)
        }
        else if (toHitRoll[2] >= parseInt(combatant.ac)) {
          console.log(`hit ${combatant.name}`);
          storeHits.push(combatant)
        } 
        else console.log(`didn't hit ${combatant.name}`)
      })
    }
    setCombatantsHit(storeHits)
  
    return () => {}
  }, [toHitRoll, targets])
  
  
  return (
    <>
      <h2>{`${tempCombatant.attacker.name} uses ${tempCombatant.attack.name}`}</h2>
      <p>{tempCombatant.attack.description}</p>
      <hr></hr>
      
      {/* <p>The to hit is {tempCombatant.attack.attack}</p> */}

      {toHitRoll === undefined &&<>
      {encounter && combatants && 
        <div>
          <details open className={styles.details}>
            <summary className={styles.summary}>PC Targets</summary>
            {combatants.filter(i => i.enemy === 'pc').map(target => (
              <div key={target._id} className={styles.targets}>
                <input type='checkbox' className='target-checkbox'
                  checked={targets.includes(target._id)} 
                  onChange={(e) => {targets.includes(target._id) 
                    ? setTargets([...targets.filter(t => t !== target._id)]) 
                    : setTargets([...targets, target._id])}}></input>
                
                <p>{target.name}</p>
                <p>AC: {target.ac}: </p>
              </div>
            ))}
          </details>

          <details open  className={styles.details}>
            <summary className={styles.summary}>Monsters</summary>
            {combatants.filter(i => i.enemy === 'monster').map(target => (
              <div key={target._id} className={styles.targets}>
                <input type='checkbox' className='target-checkbox'
                  checked={targets.includes(target._id)} 
                  onChange={(e) => {targets.includes(target._id) 
                    ? setTargets([...targets.filter(t => t !== target._id)]) 
                    : setTargets([...targets, target._id])}}></input>
                
                <p>{target.name}</p>
                <p>AC: {target.ac}: </p>
              </div>
            ))}
          </details>
        </div>
      }
        <br></br>
        <button className={styles.btn} onClick={() => {setToHitRoll(diceRoll(1,20,tempCombatant.attack.attack))}}>To Hit: {tempCombatant.attack.attack}</button>
      </>}
      
      
      <br></br>
      {toHitRoll &&
      <>
        <p>{`You rolled ${toHitRoll[0]} with a bonus ${toHitRoll[1]}. Your total is ${toHitRoll[2]}`}</p>
        {criticalMiss && <h2>Its a critical Miss!!</h2>}
        {combatantsHit && combatantsHit.length > 0 &&
        <>
          {combatantsHit.map(combatant => (
            <h2>{`You hit ${combatant.name}`}</h2>
          ))}
          {criticalHit && <h2>Its a critical Hit!!</h2>}

          {tempCombatant.attack.damage1 &&
            <>
            <br></br>
            <button>{tempCombatant.attack.damage1.hdDice}d{tempCombatant.attack.damage1.hdSides}+{tempCombatant.attack.damage1.hdBonus} {tempCombatant.attack.damage1.type}</button>
            </>
          }

          {tempCombatant.attack.damage2 && tempCombatant.attack.damage2.hdDice &&
            <>
            <br></br>
            <button>{tempCombatant.attack.damage2.hdDice}d{tempCombatant.attack.damage2.hdSides}+{tempCombatant.attack.damage2.hdBonus} {tempCombatant.attack.damage2.type}</button>
            </>
          }

          {tempCombatant.attack.damage3 && tempCombatant.attack.damage3.hdDice &&
            <>
            <br></br>
            <button>{tempCombatant.attack.damage2.hdDice}d{tempCombatant.attack.damage2.hdSides}+{tempCombatant.attack.damage2.hdBonus} {tempCombatant.attack.damage2.type}</button>
            </>
          }
        
        </>
        }
      </>
      }

      <div className='flex-row'>
        <button className={styles.clearbutton} onClick={() => {setToHitRoll(undefined), setCombatantsHit([]), setCriticalHit(false), setCriticalMiss(false)}}>Clear Variables</button>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
    const {db} = await connectToDatabase()
    const id = new ObjectId(context.params.id)
    let response = await db.collection("encounters").find({_id: id}).toArray()
    const encounter = await JSON.parse(JSON.stringify(response))

    return {
        props: {initialEncounter: encounter[0]}
    }
}