import { useState, useEffect, useContext } from "react"
import { EncounterContext } from "../../pages/encounter/[id]"
import styles from './Encounter_CombatantDetails_Spellpane.module.css'


export default function Encounter_CombatantDetails_SpellPane({ combatant, addConcentration, removeConcentration }) {
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

    const doSpellCast = (spell, slot) => {
        console.log(spell)
        console.log(slot)
        const parseDuration = (duration) => {
            if (duration.length === 0) {console.log('duration is empty') ;return 0}
            let amount
            let unit
            const words = duration.split(' ')
            console.log(words)
            words.forEach(word => {
                // console.log(word)
                switch (word) {
                    case 'minute' || 'minutes': unit = 10; break
                    case 'hour' || 'hours': unit = 600; break
                }
                const number = parseInt(word)
                console.log(number)
                console.log(typeof number)
                if (!isNaN(number) && typeof number === 'number') {
                    // console.log(`${word} is a number`)
                    amount = number
                } 
                // else console.error(`${word} is not a number`)
                
            })
            console.log(amount)
            console.log(unit)
            return amount*unit

        }

        if (spell.concentration && combatant?.concentration) {
            if (!window.confirm(`This monster is already concentrating on a spell (${combatant.concentration?.name}). Do you want to drop the old spell?`)) return
        }
        
        const change = {}
        if (spell.concentration) {
            let concentration = {round: context.encounter.round, name: spell.name, duration: parseDuration(spell.duration)}
            change.concentration = concentration
        }
        
        const spellSlots = combatant.spellSlots
        spellSlots[slot -1] = spellSlots[slot -1 ] - 1
        change.spellSlots = spellSlots
        console.log(change)
        // problem is here, running multible calls to editMonster()
        context.editMonster(combatant, change)
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
                    style={{'display':'flex', 'justifyContent': 'space-between', 'width': '100%'}}>

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
                                    onClick={() => doSpellCast(spell, slot)}
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
