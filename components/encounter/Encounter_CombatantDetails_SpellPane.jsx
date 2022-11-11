import { useState, useEffect, useContext } from "react"
import { EncounterContext } from "../../pages/encounter/[id]"
import styles from './Encounter_CombatantDetails_Spellpane.module.css'
export default function Encounter_CombatantDetails_SpellPane({ combatant }) {
    const context = useContext(EncounterContext)
    const castSpell = () => {}
    const [ spells, setSpells ] = useState([])
    const [ maxCastLevel, setMaxCastLevel ] = useState(0)
    const api = '/api/'

    useEffect(() => {
        if (combatant?.spells) {
            const getSpells = async (spells) => {
                const response = await fetch(`${api}spells`, {
                method: "POST",
                body: JSON.stringify({
                    action: "monster",
                    data: { name: { $in: spells } },
                    sort: {},
                }),
                headers: { "Content-type": "application/json; charset=UTF-8" },
                });
                const spellList = await response.json();
                setSpells(spellList);
            }
            getSpells(combatant.spells)
        }

        if (combatant?.spellSlots) {
            setMaxCastLevel(combatant.spellSlots.filter(level => {return level | level > 0}).length)
        }
    
        return () => {}
    }, [combatant])

    const spellCastButtons = (min, slots) => {
        // console.log(min)
        // console.log(slots)
        const castableSlots = []
        slots.forEach((slot, index) => {
            if (typeof slot === 'number' & slot > 0 & index +1 >= min & min != 0) castableSlots.push(index + 1)
        });
        // console.log(castableSlots)
        return castableSlots
    }
  
    return (
        <div className={styles.container}>
            {combatant?.spellSlots?.length > 0 ? <><div id="spellslots" className={styles.spellslots}>
            {combatant.spellSlots.map((slot, index) => (
                <label key={index} htmlFor={index}>
                {index + 1}
                <input
                    id={index}
                    type="number"
                    value={slot}
                    onChange={(e) => {combatant.spellSlots[index] = parseInt(e.target.value); context.editMonster(combatant, {spellSlots: combatant.spellSlots})}}
                ></input>
                </label>
            ))}
            </div>

            <div id="spell-list" className={styles.spelllist}>
                {spells?.sort((a, b) => {return a.level - b.level}).map((spell) => (
                <div 
                    key={spell._id} 
                    className={styles.spell_line} 
                    style={{'display':'flex', 'justifyContent': 'space-between', 'width': '100%'}}
                    onClick={() => console.log("click")}>

                    <div className={styles.spell_title}>
                        <p>{spell.level} - <strong>{spell.name}</strong> ({spell.concentration ? 'C' : ''}{spell.ritual ? 'R' : ''})</p>
                        <span class={styles.description_tooltip}>
                            <h3>{spell.name}</h3>
                            <p><strong>Range: </strong>{spell.range}</p>
                            <p><strong>Cast Time: </strong>{spell.time}</p>
                            <p><strong>Duration: </strong>{spell.duration}</p>
                            <p>{spell.description}</p>
                            </span>
                    </div>
                    <div className={styles.spell_cast_buttons}>
                        {
                            spellCastButtons(
                            spell.level, 
                            combatant.spellSlots.filter(slot => {return typeof slot === 'number' })
                            )
                            .map((slot, index) => (
                                <button
                                    key={index}
                                    className={styles.spell_cast_button} 
                                    onClick={() => {
                                        if (spell.concentration) {
                                        if (combatant.concentrating?.active) {
                                            if (window.confirm(`This monster is already concentrating on a spell (${combatant.concentrating?.spellName}). Do you want to drop the old spell?`)) {
                                                console.log('switched concentration')
                                            }
                                            else return
                                        }
                                        if (window.confirm('This is a concentration spell. Add the concentration flag to this monster?')) console.log('add concentration')
                                        else return
                                        }
                                        const spellSlots = combatant.spellSlots
                                        spellSlots[slot -1] = spellSlots[slot -1 ] - 1
                                        context.editMonster(combatant, {spellSlots: spellSlots})
                                    }}
                                >{slot}
                                </button>
                            ))
                        }
                    </div>
                </div>
                ))}
            </div></> : <h2>No Spells</h2>}
        </div>
    )
}
