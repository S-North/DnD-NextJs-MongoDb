import { useContext, useState, useEffect } from "react";
import { EncounterContext } from "../../pages/encounter/[id]";
import { damageTypes } from "../../utils/Forms";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import styles from './DamageCalculator.module.css'
import { diceRoll, abilityModifier } from "../../utils/utils";

export default function DamageCalculator ({targets, editCharacter, editMonster}) {
    // targets is a list of combatants to apply the damage to
    const encounter = useContext(EncounterContext);
    const [ combatant, setCombatant ] = useState();
    const [ damage, setDamage ] = useState(0);
    const [ damageType, setDamageType ] = useState('acid');
    const [ initialHp, setInitialHp ] = useState();
    const [ resultHp, setResultHp ] = useState();
    const [ adjustmentMessage, setAdjustmentMessage ] = useState();
    const [ concentrationCheck, setConcentrationCheck ] = useState({required: false})


    useEffect(() => {
      // checks when the HP change

      // what if target is concentrating on a spell
      if (resultHp < initialHp && combatant?.concentration) {
        console.log(`Combatant is concentrating on ${combatant.concentration.name}`)
        setConcentrationCheck({...concentrationCheck, required: true})
      }
    
      return () => {}
    }, [resultHp])
    
  
    useEffect(() => {
        // initially, assume targets is just 1 combatant for single target damage. we will add the ability to target multiple combatants later.
        if (targets && targets.length === 1 && encounter.characters && encounter.encounter.monsters) {
            switch (targets[0].enemy) {
            case 'pc':
                console.log('pc')
                setCombatant(encounter.characters.filter(character => character._id === targets[0]._id)[0])
                break
            case 'monster':
                setCombatant(encounter.encounter.monsters.filter(monster => monster._id === targets[0]._id)[0])
                break
            }
        }    
      return () => {}
    }, [targets, encounter.characters, encounter.encounter.monsters])

    useEffect(() => {
      if (initialHp === undefined && combatant) {setInitialHp(combatant.currentHp); console.log(initialHp)}
      combatant && setResultHp(combatant.currentHp)
      const focus = document.getElementById("damage-total");
      if (focus) focus.focus()
      
      return () => {}
    }, [combatant])

    const applyDamage = (combatant, resultHp) => {
      const change = {currentHp: resultHp}
      if (concentrationCheck.failed) change.concentration = null
      switch (combatant.enemy) {
          case 'pc':
              editCharacter(combatant, change)
              break
          case 'monster':
              editMonster(combatant, change)
              break
      }
      encounter.setModal({on:false, type: ''})
    }

    const calculateModifiedDamage = (amount) => {
      console.log(amount)
      console.log(damageType)

      if (combatant.resistances && combatant.resistances.includes(damageType)) {
        setAdjustmentMessage(`${combatant.name} is resistant to ${damageType}. Half damage applied`)
        return Math.floor(amount / 2)
      }
      if (combatant.vulnerabilities && combatant.vulnerabilities.includes(damageType)) {
        setAdjustmentMessage(`${combatant.name} is vulnerable to ${damageType}. Double damage applied`)
        return amount * 2
      }
      if (combatant.damageImmunity && combatant.damageImmunity.includes(damageType)) {
        setAdjustmentMessage(`${combatant.name} is resistant to ${damageType}. No damage applied`)
        return 0
      }
      return amount
    }
  
    const calculateDamage = (addRemove, amount) => {

      switch (addRemove) {
        case 'damage':
          const damageTotal = combatant.currentHp - calculateModifiedDamage(amount)
          damageTotal < 0 
            ? setResultHp(0) 
            : setResultHp(damageTotal)
            break
        case 'heal':
          const healTotal = combatant.currentHp + amount
          healTotal > combatant.maxHp 
            ? setResultHp(combatant.maxHp) 
            : setResultHp(healTotal)
      }
      // encounter.setModal({on: false, type: ''})
    }

    const handleConcentrationCheck = (e, damage, constitution) => {
      e.preventDefault()

      const dc = Math.floor(damage/2) > 10 ? Math.floor(damage/2) : 10
      const roll = (diceRoll(1, 20, abilityModifier(constitution)))
      let result = {...concentrationCheck, roll: roll[0][0], result: roll[2]}
      console.log(result)
      
      
      if (result.result < dc) result.failed = true
      if (result.result >= dc) result.failed = false         
      if (result.roll === 1) result.failed = true
      if (result.roll === 20) result.failed = false
      
      console.log(result)
      setConcentrationCheck(result)
    }
    
    return (
      <div className={styles.wrapper} id='damage-calculator'>
        {combatant && 
        <>
          <div className={styles.title}>
              <h3 style={{display: 'inline-block'}}>{combatant.name}</h3>
              <p style={{display: 'inline-block'}}>{`Current HP: ${initialHp}`}</p>
          </div>
          {combatant.vulnerabilities && combatant.vulnerabilities.length > 0 && <div className={styles.modifierWrapper}>
            <p>Vulnerable</p>
            {combatant?.vulnerabilities?.map(item => (
              <div className={styles.modifier}>{item}</div>
            ))}
          </div>}
          {combatant.resistances && combatant.resistances.length > 0 && <div className={styles.modifierWrapper}>
            <p>Resistant</p>
            {combatant?.resistances?.map(item => (
              <div className={styles.modifier}>{item}</div>
            ))}
          </div>}
          {combatant.damageImmunity && combatant.damageImmunity.length > 0 && <div className={styles.modifierWrapper}>
            <p>Immune</p>
            {combatant?.damageImmunity?.map(item => (
              <div className={styles.modifier}>{item}</div>
            ))}
          </div>}
  
          <form className={styles.form}>
            <div className={styles.align_row}>
              <button className={styles.subtract_button} onClick={(e) => {e.preventDefault(); damage > 0 && setDamage(damage - 1)}}><FaAngleLeft /></button>
              <input
                type='number'
                id='damage-total'
                value={damage}
                onChange={(e) => {setDamage(parseInt(e.target.value))}}
                ></input>
                <select value={damageType} onChange={e => setDamageType(e.target.value)}>
                    {damageTypes && damageTypes.sort().map((type) => (
                        <option value={ type } key={ type }>{ type } </option>
                        ))}
                </select>
              <button className={styles.subtract_button} onClick={(e) => {e.preventDefault(); setDamage(damage + 1)}}><FaAngleRight /></button>
              <button className="btn blue" onClick={(e) => {e.preventDefault(); calculateDamage('heal', damage)}}>Heal</button>
              <button className="btn blue" onClick={(e) => {e.preventDefault(); calculateDamage('damage', damage)}}>Damage</button>
            </div>
          
            {adjustmentMessage?.length >0 && <p>{adjustmentMessage}</p>}

          {concentrationCheck.required && 
          <div className={styles.concentrationWrapper}>
            <div className={styles.concentrationHeader}>
              <h3>{combatant.concentration.name}</h3>
              <p>Target is concentrating. Roll a concentration check</p>
            </div>
            <div className={styles.concentrationRow}>
              <label className={styles.label} htmlFor="DC">Concentration DC: </label>
              <input id='DC' type='number' value={Math.floor(damage/2) > 10 ? Math.floor(damage/2) : 10} />
              {concentrationCheck?.result && <button disabled>{concentrationCheck.result}</button>}
              <button onClick={e => handleConcentrationCheck(e, damage, combatant.con)}>Roll Save</button>
            </div>
            {concentrationCheck?.failed === true && <div className={styles.concentrationRow}>
            <p>Target failed the check. <strong>{combatant.concentration.name}</strong> will be removed when you click apply.</p>
            </div>}

            {concentrationCheck?.failed === false && <div className={styles.concentrationRow}>
            <p>Target succeded the check. <strong>{combatant.concentration.name}</strong> will not change.</p>
            </div>}

          </div>}
          <div className={styles.align_row}>
            <label className={styles.label} htmlFor="current-hp">Adjusted HP: </label>
            <input 
              type='number' 
              max={combatant.maxHP} 
              min='0' 
              value={resultHp} 
              onChange={(e) => setResultHp(parseInt(e.target.value))}>
            </input>
            <button className="btn green" onClick={() => applyDamage(combatant, resultHp)}>Apply</button>
          </div>
          
          </form>
        </>}
      </div>
    );
  }