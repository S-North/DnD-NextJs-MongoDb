import { useContext, useEffect, useState } from "react";
import { EncounterContext } from "../../pages/encounter/[id]";
import { FaWindowClose } from 'react-icons/fa'
import { xpToLevel, displayCrAsFraction, calculateEncounterDifficulty } from "../../utils/utils";

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

                <h2>{init.name}</h2>
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
            <h2 style={{color: 'ghostwhite'}}>{encounterDifficulty}</h2>
        <div className="flex-row" style={{ justifyContent: "flex-end" }}>
            {encounter.characters && (
                <button className="blue" 
                    onClick={() => {
                        encounter.setModal({ type: "addPC", on: true });
                    }}> Add PC
                </button>
            )}

            <button className="blue"
                onClick={() => {
                    encounter.setModal({ type: "addNPC", on: true });
                }}> Add NPC
            </button>

            <button className="blue"
                onClick={() => {
                    encounter.setModal({ type: "addMonster", on: true });
                }}>Add Monster
            </button>

            <button className="green"
                onClick={() => {
                    encounter.setModal({ type: "rollInitiative", on: true });
                }}> Run
            </button>
        </div>
        </div>

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