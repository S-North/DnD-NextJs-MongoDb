import { useContext, useEffect, useState, useRef } from "react";
import { EncounterContext } from "../../pages/encounter/[id]";
import { FaWindowClose } from 'react-icons/fa'
import { xpToLevel, displayCrAsFraction, calculateEncounterDifficulty } from "../../utils/utils";
import { Menu } from 'primereact/menu';
import { Button } from "primereact/button";
import EditMonsters from "./EditMonsters";

// Initiative list is used to add and remove people to an encounter in deit mode (before the encounter is run).
// If you want the list of combatants shown while the encounter is running, you need EncounterList.js

export function InitiativeItem ({init, displayItem, deleteItem}) {
    const encounter = useContext(EncounterContext)
    const action = (init) => {console.log(init)}
    const deleteCombatant = () => {console.log('delete')}
    const combatant = encounter.initiativeItemToFullStats(init)
    // console.log(combatant)
    return (
        <>
        {combatant &&
            <div className="list-item">
                <div style={{ cursor: "pointer", width: "100%" }}
                    onClick={() => {displayItem(combatant);}}>

                <h2>{combatant.name}</h2>
                {combatant.cr && <p>CR: {displayCrAsFraction(combatant.cr)}</p>}
                {init.enemy === 'pc' && <p>Level: {xpToLevel(combatant.xp)}</p>}
                </div>

                <FaWindowClose color="red" style={{ cursor: "pointer" }}
                    onClick={() => { deleteItem(combatant)}}
                    >
                </FaWindowClose>
            </div>
        }
        </>
    )
} 

export default function InitiativeList ({displayItem, deleteItem, initiativeItemToFullStats}) {
    const encounter = useContext(EncounterContext)
    const [ encounterDifficulty, setEncounterDifficulty ] = useState()
    const menu = useRef()
    const ButtonItems = () => {
        if (encounter.encounter.mode === 'complete') return [
            {
                label: 'Notes',
                icon: 'pi pi-file',
                command: (e) => encounter.setModal({on: true, type: 'View Notes'})
            },
            {
                label: 'View Summary',
                icon: 'pi pi-file-edit',
                command: (e) => encounter.setModal({on: true, type: 'Summary'})
            },
            {
                label: 'Edit',
                icon: 'pi pi-file-edit',
                command: () => encounter.editEncounter({mode: 'editing'})
            }
        ]
        else return [
            {
                label: 'Notes',
                icon: 'pi pi-file',
                command: (e) => encounter.setModal({on: true, type: 'View Notes'})
            },
            {
                label: 'View Summary',
                icon: 'pi pi-file-edit',
                command: (e) => encounter.setModal({on: true, type: 'Summary'})
            },
            {
                label: 'Mark Complete',
                icon: 'pi pi-file-edit',
                command: () => encounter.editEncounter({mode: 'complete'})
            }
        ]
    }

    useEffect(() => {
        // start event listener for key commands
        const initiativePopups = (e) => {
            if (e.altKey && e.key === "m")  {
                e.preventDefault()
                encounter.setModal({ on: true, type: "Add Monster" })
            }
            if (e.altKey && e.key === "c")  {
                e.preventDefault()
                encounter.setModal({ on: true, type: "Add Character" })
            }
        }

        document.addEventListener("keydown", e => initiativePopups(e));

      return () => document.removeEventListener("keydown", initiativePopups)
    }, [])
    

    useEffect(() => {
        //  get the monsters difficulty stats
        const monsters = encounter.encounter.monsters
        const characters = encounter.characters
        let monsterXPs = []
        const charactersXp = []

        if (encounter.encounter.monsters) {
            monsterXPs = monsters.map(monster => monster.xp)
            
        }
        // console.log(monsterXPs)

        // get the characters difficulty thresholds
        if (encounter.characters && encounter.encounter.initiative) {
            const characters = encounter.characters
            const initiative = encounter.encounter.initiative.filter(i => i.enemy === 'pc')
            initiative.forEach(init => {
                const character = initiativeItemToFullStats(init)
                charactersXp.push(parseInt(character.xp))
            })
        }

        setEncounterDifficulty(calculateEncounterDifficulty(monsterXPs, charactersXp))

    
      return () => {}
    }, [encounter])
    
    return (
        <div className="one-column">

        {/* the actions for adding new combatants and running the encounter */}
        <div className="flex-row">
            <Menu model={ButtonItems()} popup ref={menu} />
            <Button label="" icon="pi pi-bars" onClick={e => menu.current.toggle(e)} style={{maxHeight: "2rem"}}/>
        <div className="flex-row" style={{ justifyContent: "flex-end" }}>
            <button className="blue"
                onClick={() => {
                    encounter.setModal({ type: "Add Note", on: true });
                }}> Note
            </button>

            {encounter.characters && (
                <button className="blue" 
                    onClick={() => {
                        encounter.setModal({ type: "Add Character", on: true });
                    }}> PC
                </button>
            )}
            
            <button className="blue"
                onClick={() => {
                    encounter.setModal({ type: "Add NPC", on: true });
                }}> NPC
            </button>

            <button className="blue"
                onClick={() => {
                    encounter.setModal({ type: "Add Monster", on: true });
                }}> Monster
            </button>

            <button className="green"
                onClick={() => {
                    encounter.setModal({ type: "Roll Initiative", on: true });
                }}> Run
            </button>
        </div>
        </div>
        {encounterDifficulty &&
            <h2 
                title={`Adjusted Monster XP: ${encounterDifficulty.adjustedMonsterXP}\nParty Thresholds: (Easy: ${encounterDifficulty.partyThresholds[0]}, Medium: ${encounterDifficulty.partyThresholds[1]}, Difficult: ${encounterDifficulty.partyThresholds[2]}, Deadly: ${encounterDifficulty.partyThresholds[3]})`} 
                style={{color: 'ghostwhite'}}>
                {encounterDifficulty.difficulty}
            </h2>}
        {/* list of player characters, we do these first just so they appear at the top of the list for DM convenience */}
        {encounter && encounter.encounter.initiative && 
            encounter.encounter.initiative.map(init => (
                <>
                {init.enemy === 'pc' && <InitiativeItem key={init._id} init={init} displayItem={displayItem} deleteItem={deleteItem}></InitiativeItem>}
                </>
            ))
        }

        {/* now list all the monsters */}
        {encounter && encounter.encounter.initiative && 
            encounter.encounter.initiative.map(init => (
                <>
                {init.enemy === 'monster' && <InitiativeItem key={init._id} init={init} displayItem={displayItem} deleteItem={deleteItem}></InitiativeItem>}
                </>
            ))
        }
        </div>
    )
}