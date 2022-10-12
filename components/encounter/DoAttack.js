import { useEffect, useState, useContext } from "react";
import Id, { EncounterContext } from "../../pages/encounter/[id]";
import { diceRoll } from "../../utils/utils";
import styles from './DoAttack.module.css';
import { Button } from 'primereact/button';
import { v4 as uuidv4 } from 'uuid'


export function ListResults ({ tempCombatant, combatantsHit, targets, toHitRoll, damages, setDamages }) {
    const context = useContext(EncounterContext);
    const [ combatants, setCombatants ] = useState([])

    useEffect(() => {
      if (context?.encounter?.monsters && context.characters && combatantsHit) {
        const monsters = []
        combatantsHit.forEach(combatant => {
            console.log(combatant)
            console.log(context.getCombatantStats(combatant))
            monsters.push({...context.getCombatantStats(combatant), advantage: combatant.advantage})
        })
        setCombatants(monsters)
      }
    
      return () => {}
    }, [context.encounter.monsters, context.characters, combatantsHit])
    

    const rollDamage = (damage, target) => {
        const hitResult = toHitRoll[target.advantage]
        let damageResult
        if (hitResult < 20) {
            damageResult = {
                damage: diceRoll(damage.hdDice, damage.hdSides, damage.hdBonus)[2], 
                type: damage.type}
        }
        else {
            damageResult = {
                damage: (diceRoll(damage.hdDice, damage.hdSides, 0)[2] * 2) + damage.hdBonus, 
                type: damage.type}
        }
        damageResult.vulnerable = damageResult.damage * 2
        damageResult.resistant = Math.ceil(damageResult.damage / 2)

        let modifiedDamage
        if (target.vulnerabilities?.includes(damage.type)) modifiedDamage = damageResult.vulnerable
        else if (target.resistances?.includes(damage.type)) modifiedDamage = damageResult.resistant
        else if (target.damageImmunity?.includes(damage.type)) modifiedDamage = 0
        else modifiedDamage = damageResult.damage
        setDamages([...damages, {target, damage: damageResult, _id: uuidv4(), modifiedDamage, applied: false}])
    }

    return (
        <section className={styles.section}>
            {combatantsHit && combatantsHit.length > 0 && targets.length > 0 &&
            <>
            {combatants.map(combatant => (
                <div key={combatant._id} className={styles.hitList}>
                    <h2>{combatant.name}</h2>
                    <p>{combatant.advantage} roll: <strong>{toHitRoll[combatant.advantage] + toHitRoll.bonus}</strong> {toHitRoll[combatant.advantage] === 20 ? <strong>CRITICAL HIT</strong> : ''}</p>
                    <p>hits AC: <strong>{combatant.ac}</strong></p>
                    <p>HP: <strong>{combatant.currentHp}</strong></p>
                    {tempCombatant.attack.damage1.enabled && 
                        <Button 
                            onClick={() => rollDamage(tempCombatant.attack.damage1, combatant)} 
                            className="p-button-sm">
                            {tempCombatant.attack.damage1.hdDice}d{tempCombatant.attack.damage1.hdSides} + {tempCombatant.attack.damage1.hdBonus} {tempCombatant.attack.damage1.type}
                        </Button>}
                    {tempCombatant.attack.damage2.enabled && 
                        <Button 
                            onClick={() => rollDamage(tempCombatant.attack.damage2, combatant)} 
                            className="p-button-sm">
                                {tempCombatant.attack.damage2.hdDice}d{tempCombatant.attack.damage2.hdSides} + {tempCombatant.attack.damage2.hdBonus} {tempCombatant.attack.damage2.type}
                        </Button>}
                    {tempCombatant.attack.damage3.enabled && 
                        <Button
                            onClick={() => rollDamage(tempCombatant.attack.damage3, combatant)} 
                            className="p-button-sm">
                                {tempCombatant.attack.damage3.hdDice}d{tempCombatant.attack.damage3.hdSides} + {tempCombatant.attack.damage3.hdBonus} {tempCombatant.attack.damage3.type}
                        </Button>}
                    
                </div>
            ))}
            </>
            }
            {targets.length > 0 && combatantsHit.length === 0 && <h2>You didn't hit anyone :(</h2>}
            {targets.length === 0 && <h2>You didn't select anyone! Go back and select at least one target</h2>}
        </section>
    )
}

export default function DoAttack ({tempCombatant}) {
    const encounterContext = useContext(EncounterContext);
    const [ section, setSection ] = useState('targets');
    const [ toHitRoll, setToHitRoll ] = useState();
    const [ targets, setTargets ] = useState([]);
    const [ combatants, setCombatants ] = useState();
    const [ combatantsHit, setCombatantsHit ] = useState([]);
    const [ attacker, setAttacker ] = useState()
    const [ damages, setDamages ] = useState([])


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
        if (combatants && tempCombatant) {
            setAttacker(combatants.filter(item => item._id === tempCombatant.attacker._id)[0])
        }
    
      return () => {}
    }, [combatants])
    
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
        })
        }
        setCombatantsHit(storeHits)
    
        return () => {}
    }, [toHitRoll, targets])

/** 
* @summary Takes in an array of conditions for a target. Checks to see if any confer advantage or disadvantage for attack rolls against that target, then returns an overall result
* @param {array} condition - An array containing objects with the following key:values; name:string, start:number, duration:number, source:string
* @return {string} advantage, disadvantage, normal
*/
    const conditionAffectsDefense = (conditions) => {
        let overallDefense = {
            advantage: 0,
            disadvantage: 0
        }
        conditions?.forEach(condition => {
            if (condition?.name && ["blinded", "paralyzed", "petrified", "restrained", "stunned", "unconcious"].includes(condition.name)) overallDefense['disadvantage'] += 1
            if (condition?.name && ["invisible"].includes(condition.name)) overallDefense['advantage'] += 1
        })
        if (overallDefense.advantage > 0 && overallDefense.disadvantage === 0) return 'advantage'
        if (overallDefense.disadvantage > 0 && overallDefense.advantage === 0) return 'disadvantage'
        return 'normal'
    }

/** 
* @summary Takes in an array of conditions. Checks to see if any confer advantage or disadvantage for attack rolls, then returns an overall result
* @param {array} condition - An array containing objects with the following key:values; name:string, start:number, duration:number, source:string
* @return {string} advantage, disadvantage, normal
*/
    const conditionAffectsAttack = (conditions) => {
        let overallDefense = {
            advantage: 0,
            disadvantage: 0
        }
        conditions?.forEach(condition => {
            if (condition?.name && ["invisible"].includes(condition.name)) overallDefense['advantage'] += 1
            if (condition?.name && ["poisoned", "prone", "restrained", "blinded"].includes(condition.name)) overallDefense['disadvantage'] += 1
        })
        if (overallDefense.advantage > 0 && overallDefense.disadvantage === 0) return 'advantage'
        if (overallDefense.disadvantage > 0 && overallDefense.advantage === 0) return 'disadvantage'
        return 'normal'
    }

/** 
* Brief description of the function here.
* @summary If the description is long, write your summary here. Otherwise, feel free to remove this.
* @param {ParamDataTypeHere} parameterNameHere - Brief description of the parameter here. Note: For other notations of data types, please refer to JSDocs: DataTypes command.
* @return {ReturnValueDataTypeHere} Brief description of the returning value here.
*/
    const selectTarget = (target) => {
        targets.includes(target._id) 
            ? setTargets([...targets.filter(t => t !== target._id)]) 
            : setTargets([...targets, target._id])

    const advantageToInt = (advantage) => {
        let number
        switch (advantage) {
            case 'advantage': number = 2; break
            case 'normal': number = 1; break
            case 'disadvantage': number = 0; break
        }
        return number
    }

    // If advantage/disadvantage is selected on the action page. Try to determine overall advantage with the attackers conditions
    // const determineAttackerAdvantage = () => {
    //     console.log(tempCombatant.options.advantage)
    //     const advantageOverride = advantageToInt(tempCombatant.options.advantage)
    //     const conditionAdvantage = advantageToInt(conditionAffectsAttack(attacker.conditions))
    //     console.log(advantageOverride, conditionAdvantage)
    //     if (advantageOverride - conditionAdvantage > 0) return advantageToInt('advantage')
    //     else if (advantageOverride - conditionAdvantage < 0) return advantageToInt('disadvantage') 
    //     else return advantageToInt('normal' )
    // }

    const attackerAdvantage = advantageToInt(conditionAffectsAttack(attacker.conditions))
    const targetAdvantage = advantageToInt(conditionAffectsDefense(target.conditions))
    const result = attackerAdvantage - targetAdvantage
        if (result > 0) {
            setCombatants([...combatants.filter(combatant => {return combatant._id !== target._id}), {...target, advantage: 'advantage'}])
        }
        else if (result < 0) {
            setCombatants([...combatants.filter(combatant => {return combatant._id !== target._id}), {...target, advantage: 'disadvantage'}])
        }
        else setCombatants([...combatants.filter(combatant => {return combatant._id !== target._id}), {...target, advantage: 'normal'}])
    }

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

    const rollDamage = (damage, target) => {
        const hitResult = toHitRoll[target.advantage]
        let damageResult
        if (hitResult < 20) {
            damageResult = {
                damage: diceRoll(damage.hdSides, damage.hdDice, damage.hdBonus)[2], 
                type: damage.type}
        }
        else {
            damageResult = {
                damage: (diceRoll(damage.hdSides, damage.hdDice, 0)[2] * 2) + damage.hdBonus, 
                type: damage.type}
        }
        damageResult.vulnerable = damageResult.damage * 2
        damageResult.resistant = Math.ceil(damageResult.damage / 2)

        let modifiedDamage
        if (target.vulnerabilities?.includes(damage.type)) modifiedDamage = damageResult.vulnerable
        else if (target.resistances?.includes(damage.type)) modifiedDamage = damageResult.resistant
        else if (target.damageImmunity?.includes(damage.type)) modifiedDamage = 0
        else modifiedDamage = damageResult.damage
        setDamages([...damages, {target, damage: damageResult, _id: uuidv4(), modifiedDamage, applied: false}])
    }

    const applyDamage = (e, bundle) => {
        console.log(bundle)
        e.preventDefault()
        let newHP = encounterContext.getCombatantStats(bundle.target).currentHp - bundle.modifiedDamage
        if (newHP < 0) newHP = 0
        console.log(newHP)
        setDamages([...damages.filter(item => {return item._id !== bundle._id}), {...bundle, applied: true}])
        if (bundle.target.enemy === 'monster') {
            console.log('monster')
            encounterContext.editMonster(bundle.target, {currentHp: newHP})
        }
        if (bundle.target.enemy === 'pc') {
            console.log('pc')
            encounterContext.editCharacter(bundle.target, {currentHp: newHP})
        }
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
                        onChange={(e) => {selectTarget(target)}}></input>
                        
                        <p>{target.name}</p>
                        <p>{target.conditions?.map(condition => (<button key={condition.name}>{condition.name}</button>))}</p>
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
                    onChange={(e) => {selectTarget(target)}}></input>
                    
                    <p>{target.name}</p>
                    <p>{target.conditions?.map(condition => (<button key={condition.name}>{condition.name}</button>))}</p>
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

            <ListResults 
                tempCombatant={tempCombatant} 
                combatantsHit={combatantsHit} 
                targets={targets} 
                toHitRoll={toHitRoll} 
                damages={damages} 
                setDamages={setDamages} 
            />

            <section className={styles.section}>
                <h2>Actions</h2>
                <div style={{"display": "flex", "flexDirection": "column", "gap": "0.5rem"}}>
                {damages.sort((a,b) => (a._id > b._id)).sort((a,b) => (a.target.name > b.target.name)).map(damage => (
                    // <div style={{"display": "flex", "gap": "1rem", "alignItems": "center"}}>
                    <div key={damage._id} className={styles.damageList}>
                        <p><strong>{damage.target.name}</strong></p>
                        <input type='number' value={damage.damage.damage} style={{"maxWidth": "5rem"}} disabled></input>
                        <p>{damage.damage.type} {damage.target.resistances?.includes(damage.damage.type) && '(Resistant)'} {damage.target.damageImmunity?.includes(damage.damage.type) && '(Immune)'} {damage.target.vulnerabilities?.includes(damage.damage.type) && '(Vulnerable)'}</p>
                        <input type='number' value={damage.modifiedDamage} style={{"maxWidth": "5rem"}}
                            onChange={(e) => setDamages([...damages.filter(item => {return item._id !== damage._id}), {...damage, modifiedDamage: e.target.value}])}></input>
                        <Button label="Reactions" className="p-button-sm"></Button>
                        <Button disabled={damage.applied} label="Apply" className="p-button-sm p-button-raised p-button-danger" onClick={(e) => applyDamage(e, damage)}></Button>
                    </div>
                ))}
                </div>
            </section>
        </>
        }
    
        <div className='flex-row'>
            {/* <button className={styles.clearbutton} onClick={() => {setToHitRoll(undefined), setCombatantsHit([])}}>Clear Variables</button> */}
        </div>
        </>
    );
}