import { useEffect, useState, useContext } from "react";
import Id, { EncounterContext } from "../../pages/encounter/[id]";
import { diceRoll } from "../../utils/utils";
import styles from './DoAttack.module.css';
import { Button } from 'primereact/button';


export default function DoAttack ({tempCombatant}) {
    const encounterContext = useContext(EncounterContext);
    const [ section, setSection ] = useState('targets');
    const [ toHitRoll, setToHitRoll ] = useState();
    const [ targets, setTargets ] = useState([]);
    const [ combatants, setCombatants ] = useState();
    const [ combatantsHit, setCombatantsHit ] = useState([]);


    useEffect(() => {
        const combatList = []
        if (encounterContext.encounter && encounterContext.characters) {
        encounterContext.encounter.initiative.forEach(combatant => {
            switch (combatant.enemy) {
            case 'monster':
                combatList.push( {...encounterContext.encounter.monsters.filter( monster => monster._id === combatant._id )[0], advantage: tempCombatant.options.advantage} )
                break
            case 'pc':
                combatList.push( {...encounterContext.characters.filter( pc => pc._id === combatant._id)[0], advantage: tempCombatant.options.advantage} )
            }
        })
        }
        setCombatants(combatList)
    
        return () => {}
    }, [tempCombatant, encounterContext.encounter, encounterContext.characters])
    

    useEffect(() => {
        const storeHits = []
        if ( targets && targets.length > 0 && toHitRoll ) {
        targets.forEach(target => {
            const combatant = combatants.filter(c => c._id === target)[0]
            const diceRoll = toHitRoll[combatant.advantage] + toHitRoll.bonus
            if (parseInt(diceRoll) == 20) {
            storeHits.push(combatant)
            }
            else if (parseInt(diceRoll) == 1) {
            }
            else if (diceRoll >= parseInt(combatant.ac)) {
            storeHits.push(combatant)
            } 
            else console.log(`didn't hit ${combatant.name}`)
        })
        }
        setCombatantsHit(storeHits)
    
        return () => {}
    }, [toHitRoll, targets])


    /** 
    * @summary Roll 2 * d20, return an object 
    * @param {number} bonus - the to hit bonus of the attack
    * @return {object} containing (normal) first result, (advantage) the highest result, (disadvantage) the lowest result, and the bonus (number or undefined)
    */
    const rollAttack = (bonus) => {
        if (targets.length === 0) return
        const roll1 = diceRoll(1, 20, 0)[2]
        const roll2 = diceRoll(1, 20, 0)[2]
        const rollObject = {
            normal: roll1,
            disadvantage: Math.min.apply(Math, [roll1, roll2]),
            advantage: Math.max.apply(Math, [roll1, roll2]),
            bonus: bonus
        }
        setSection('damage')
        return rollObject
    }

    
    return (
        <>
        <div className={styles.title_section}>
            <h2>{`${tempCombatant.attacker.name} > Uses ${tempCombatant.attack.name}`}{tempCombatant.options?.advantage && ' with '}{tempCombatant.options?.advantage && tempCombatant.options?.advantage}</h2>
            <p>{tempCombatant.attack.description}</p>
        </div>
    
        {/* PAGE 1 */}
        {section === 'targets' && encounterContext.encounter && combatants && 
            <div className={styles.main_panel}>
            <details open className={styles.details}>
                <summary className={styles.summary}>PC Targets</summary>
                {combatants.filter(i => i.enemy === 'pc').sort((a,b) => (a.name > b.name)).map(target => (
                    <label key={target._id} className={styles.target}>
                        <input type='checkbox' className='target-checkbox'
                        checked={targets.includes(target._id)} 
                        onChange={(e) => {targets.includes(target._id) 
                            ? setTargets([...targets.filter(t => t !== target._id)]) 
                            : setTargets([...targets, target._id])}}></input>
                        
                        <p>{target.name}</p>
                        <p>{target.conditions?.map(condition => (<button key={condition}>{condition}</button>))}</p>
                        <input type='number' value={target.ac} onChange={(e) => setCombatants([...combatants.filter(item => {return item._id !== target._id}), {...target, ac: e.target.value}])}></input>
                        <span>
                            {['Disadvantage', 'Normal', 'Advantage'].map(item => (
                                <input type='radio' id={item.toLowerCase()} name={target._id} title={item} checked={item.toLowerCase() === target.advantage} onChange={() => setCombatants([...combatants.filter(combatant => {return combatant._id !== target._id}), {...target, advantage: item.toLowerCase()}])} />
                            ))}
                        </span>
                    </label>
                ))}
            </details>
    
            <details open  className={styles.details}>
                <summary className={styles.summary}>Monsters</summary>
                <div className={styles.targets}>
                {combatants.filter(i => i.enemy === 'monster').sort((a,b) => (a.name > b.name)).map(target => (
                <label key={target._id} className={styles.target}>
                    <input type='checkbox' className='target-checkbox'
                    checked={targets.includes(target._id)} 
                    onChange={(e) => {targets.includes(target._id) 
                        ? setTargets([...targets.filter(t => t !== target._id)]) 
                        : setTargets([...targets, target._id])}}></input>
                    
                    <p>{target.name}</p>
                    <p>{target.conditions?.map(condition => (<button key={condition}>{condition}</button>))}</p>
                    <input type='number' value={target.ac} onChange={(e) => setCombatants([...combatants.filter(item => {return item._id !== target._id}), {...target, ac: e.target.value}])}></input>
                    <span>
                            {['Disadvantage', 'Normal', 'Advantage'].map(item => (
                                <input key={item} type='radio' id={item.toLowerCase()} name={target._id} title={item} checked={item.toLowerCase() === target.advantage} onChange={() => setCombatants([...combatants.filter(combatant => {return combatant._id !== target._id}), {...target, advantage: item.toLowerCase()}])} />
                            ))}
                        </span>
                </label>
                ))}
                </div>
            </details>
            {/* {tempCombatant.attack.attack && <button className={styles.btn_next} onClick={() => {setToHitRoll(diceRoll(1,20,tempCombatant.attack.attack)); setSection('damage')}}>To Hit: {tempCombatant.attack.attack}</button>} */}
            {tempCombatant.attack.attack && <Button className="p-button-raised p-button-success" disabled={targets.length === 0} onClick={() => {setToHitRoll(rollAttack(tempCombatant.attack.attack))}}>To Hit: {tempCombatant.attack.attack}</Button>}
            {!tempCombatant.attack.attack && <button className={styles.btn_next} onClick={() => {setSection('damage')}}>Next</button>}
            </div>
        }
        
        {/* PAGE 2 */}
        {section === 'damage' &&
        <>
            <Button className="p-button-sm" onClick={(e) => {e.preventDefault(); setSection('targets')}}>Back to Targets</Button>

            <section className={styles.section}>
                <h2>Your Rolls</h2>
                {toHitRoll && <section className={styles.rollResults}>
                    {['Normal', 'Advantage', 'Disadvantage'].map(advantage => (
                    <div key={advantage} className={styles.rollResult}>
                            <p>{`${advantage} roll: `}</p>
                            <p>{toHitRoll[advantage.toLowerCase()]} {toHitRoll[advantage.toLowerCase()] === 1 && <strong>CRITICAL MISS</strong>} {toHitRoll[advantage.toLowerCase()] === 20 && <strong>CRITICAL HIT</strong>}</p>
                            <p>{`with a bonus ${toHitRoll.bonus}`}.</p>
                            <p>{`Your total is ${toHitRoll[advantage.toLowerCase()] + toHitRoll.bonus}`}</p>
                    </div>
                    ))}
                </section>}
            </section>

            <section className={styles.section}>
            {combatantsHit && combatantsHit.length > 0 && targets.length > 0 &&
            <>
            {combatantsHit.map(combatant => (
                <div key={combatant._id} className={styles.hitList}>
                    <h2>{combatant.name}</h2>
                    <p>{combatant.advantage} roll: <strong>{toHitRoll[combatant.advantage] + toHitRoll.bonus}</strong> {toHitRoll[combatant.advantage] === 20 ? <strong>CRITICAL HIT</strong> : ''}</p>
                    <p>hits AC: <strong>{combatant.ac}</strong></p>
                    <p>HP: <strong>{combatant.currentHp}</strong></p>
                    {tempCombatant.attack.damage1.enabled && <Button className="p-button-sm">{tempCombatant.attack.damage1.hdDice}d{tempCombatant.attack.damage1.hdSides} + {tempCombatant.attack.damage1.hdBonus} {tempCombatant.attack.damage1.type}</Button>}
                    {tempCombatant.attack.damage2.enabled && <Button className="p-button-sm">{tempCombatant.attack.damage2.hdDice}d{tempCombatant.attack.damage2.hdSides} + {tempCombatant.attack.damage2.hdBonus} {tempCombatant.attack.damage2.type}</Button>}
                    {tempCombatant.attack.damage3.enabled && <Button className="p-button-sm">{tempCombatant.attack.damage3.hdDice}d{tempCombatant.attack.damage3.hdSides} + {tempCombatant.attack.damage3.hdBonus} {tempCombatant.attack.damage3.type}</Button>}
                    
                </div>
            ))}
            </>
            }
            {targets.length > 0 && combatantsHit.length === 0 && <h2>You didn't hit anyone :(</h2>}
            {targets.length === 0 && <h2>You didn't select anyone! Go back and select at least one target</h2>}
            </section>
        </>
        }
    
        <div className='flex-row'>
            {/* <button className={styles.clearbutton} onClick={() => {setToHitRoll(undefined), setCombatantsHit([])}}>Clear Variables</button> */}
        </div>
        </>
    );
}