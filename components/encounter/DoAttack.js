import { useEffect, useState, useContext } from "react";
import { EncounterContext } from "../../pages/encounter/[id]";
import { diceRoll } from "../../utils/utils";
import styles from './DoAttack.module.css';


export default function DoAttack ({tempCombatant}) {
    const encounterContext = useContext(EncounterContext);
    const [ section, setSection ] = useState('targets');
    const [ noToHit, setNoToHit ] = useState();
    const [ toHitRoll, setToHitRoll ] = useState();
    const [ targets, setTargets ] = useState([]);
    const [ combatants, setCombatants ] = useState();
    const [ combatantsHit, setCombatantsHit ] = useState([]);
    const [ criticalHit, setCriticalHit ] = useState(false);
    const [ criticalMiss, setCriticalMiss ] = useState(false);
    
    useEffect(() => {
        const combatList = []
        if (encounterContext.encounter && encounterContext.characters) {
        console.log(encounterContext.encounter.initiative)
        console.log(encounterContext.encounter.monsters)
        console.log(encounterContext.characters)
    
        encounterContext.encounter.initiative.forEach(combatant => {
            switch (combatant.enemy) {
            case 'monster':
                combatList.push( encounterContext.encounter.monsters.filter( monster => monster._id === combatant._id )[0] )
                break
            case 'pc':
                combatList.push( encounterContext.characters.filter( pc => pc._id === combatant._id)[0])
            }
        })
        }
        setCombatants(combatList)
    
        return () => {}
    }, [tempCombatant, encounterContext.encounter, encounterContext.characters])
    
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
        <div className={styles.title_section}>
            <h2>{`${tempCombatant.attacker.name} > Uses ${tempCombatant.attack.name}`}{tempCombatant.options?.advantage && ' with '}{tempCombatant.options?.advantage && tempCombatant.options?.advantage}</h2>
            <p>{tempCombatant.attack.description}</p>
        </div>
    
        {section === 'targets' && encounterContext.encounter && combatants && 
            <div className={styles.main_panel}>
            <details open className={styles.details}>
                <summary className={styles.summary}>PC Targets</summary>
                {combatants.filter(i => i.enemy === 'pc').map(target => (
                <label key={target._id} className={styles.target}>
                    <input type='checkbox' className='target-checkbox'
                    checked={targets.includes(target._id)} 
                    onChange={(e) => {targets.includes(target._id) 
                        ? setTargets([...targets.filter(t => t !== target._id)]) 
                        : setTargets([...targets, target._id])}}></input>
                    
                    <p>{target.name}</p>
                    <p>AC: {target.ac}: </p>
                </label>
                ))}
            </details>
    
            <details open  className={styles.details}>
                <summary className={styles.summary}>Monsters</summary>
                <div className={styles.targets}>
                {combatants.filter(i => i.enemy === 'monster').map(target => (
                <label key={target._id} className={styles.target}>
                    <input type='checkbox' className='target-checkbox'
                    checked={targets.includes(target._id)} 
                    onChange={(e) => {targets.includes(target._id) 
                        ? setTargets([...targets.filter(t => t !== target._id)]) 
                        : setTargets([...targets, target._id])}}></input>
                    
                    <p>{target.name}</p>
                    <p>AC: {target.ac}: </p>
                </label>
                ))}
                </div>
            </details>
            {tempCombatant.attack.attack && <button className={styles.btn_next} onClick={() => {setToHitRoll(diceRoll(1,20,tempCombatant.attack.attack)); setSection('damage')}}>To Hit: {tempCombatant.attack.attack}</button>}
            {!tempCombatant.attack.attack && <button className={styles.btn_next} onClick={() => {setSection('damage')}}>Next</button>}
            </div>
        }
        
        
        {toHitRoll &&
        <>
            <p>{`You rolled ${toHitRoll[0]} with a bonus ${toHitRoll[1]}. Your total is ${toHitRoll[2]}`}</p>
            {criticalMiss && <h2>Its a critical Miss!!</h2>}
            {combatantsHit && combatantsHit.length > 0 &&
            <>
            {combatantsHit.map(combatant => (
                <h2 key={combatant._id}>{`You hit ${combatant.name}`}</h2>
            ))}
            {criticalHit && <h2>Its a critical Hit!!</h2>}
    
            {tempCombatant.attack.damage1 &&
                <>
                <br></br>
                <button 
                    onClick={() => window.alert(`Damage = ${diceRoll(tempCombatant.attack.damage1.hdDice, tempCombatant.attack.damage1.hdSides, tempCombatant.attack.damage1.hdBonus)[2]} ${tempCombatant.attack.damage1.type}`)}>
                    {tempCombatant.attack.damage1.hdDice}d{tempCombatant.attack.damage1.hdSides}+{tempCombatant.attack.damage1.hdBonus} {tempCombatant.attack.damage1.type}
                </button>
                </>
            }
    
            {tempCombatant.attack.damage2 && tempCombatant.attack.damage2.hdDice &&
                <>
                <br></br>
                <button
                    onClick={() => window.alert(`Damage = ${diceRoll(tempCombatant.attack.damage2.hdDice, tempCombatant.attack.damage2.hdSides, tempCombatant.attack.damage2.hdBonus)[2]} ${tempCombatant.attack.damage2.type}`)}>
                    {tempCombatant.attack.damage2.hdDice}d{tempCombatant.attack.damage2.hdSides}+{tempCombatant.attack.damage2.hdBonus} {tempCombatant.attack.damage2.type}</button>
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