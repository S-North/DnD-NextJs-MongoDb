import { useContext, useState, useEffect } from "react";
import { EncounterContext } from "../../pages/encounter/[id]";
import { damageTypes } from "../../utils/Forms";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import styles from './DamageCalculator.module.css'

export default function DamageCalculator ({targets, editCharacter, editMonster}) {
    // targets is a list of combatants to apply the damage to
    const encounter = useContext(EncounterContext);
    const [ combatant, setCombatant ] = useState();
    const [ damage, setDamage ] = useState(0);
    const [ damageType, setDamageType ] = useState('acid');
    const [ initialHp, setInitialHp ] = useState();
    const [ resultHp, setResultHp ] = useState();
    const [ adjustmentMessage, setAdjustmentMessage ] = useState();

    useEffect(() => {
      
    
      return () => {}
    }, [])
    
  
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
        console.log(combatant)
        console.log(resultHp)
        switch (combatant.enemy) {
            case 'pc':
                editCharacter(combatant, {currentHp: resultHp})
                break
            case 'monster':
                editMonster(combatant, {currentHp: resultHp})
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
    
    return (
      <div id='damage-calculator'>
        <h2>Damage Calculator</h2>
  
        {combatant && 
        <div>
          {combatant &&
              <>
              <div style={{display: 'flex', gap: '1ch'}}>
                  <h2 style={{display: 'inline-block'}}>{combatant.name}</h2>
                  <p style={{display: 'inline-block'}}>{`Current HP: ${initialHp}`}</p>
              </div>
              {combatant.vulnerabilities && combatant.vulnerabilities.length > 0 && <p>{`Vulnerabilities: ${combatant.vulnerabilities.join(", ")}`}</p>}
              {combatant.resistances && combatant.resistances.length > 0 && <p>{`Resistances: ${combatant.resistances.join(", ")}`}</p>}
              {combatant.damageImmunity && combatant.damageImmunity.length > 0 && <p>{`Immunities: ${combatant.damageImmunity.join(", ")}`}</p>}
              {combatant.conditionImmunity && combatant.conditionImmunity.length > 0 && <p>{`Condition Immunities: ${combatant.conditionImmunity.join(", ")}`}</p>}
              </>
          }
  
          <form className={styles.section}>
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
          
          <p>{adjustmentMessage}</p>
          <div className={styles.align_row}>
            <label className={styles.label} htmlFor="current-hp">Current HP: </label>
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
        </div>}
      </div>
    );
  }