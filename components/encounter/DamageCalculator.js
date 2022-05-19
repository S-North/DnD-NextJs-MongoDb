import { useContext, useState, useEffect } from "react";
import { EncounterContext } from "../../pages/encounter/[id]";

export default function DamageCalculator ({targets, editCharacter, editMonster}) {
    // targets is a list of combatants to apply the damage to
    const encounter = useContext(EncounterContext)
    const [ combatant, setCombatant ] = useState()
    const [ damage, setDamage ] = useState(0)
  
    useEffect(() => {
        // initially, assume targets is just 1 combatant for single target damage. we will add the ability to target multiple combatants later.
        if (targets && targets.length === 1 && encounter.characters && encounter.encounter.monsters) {
            console.log(targets)
            switch (targets[0].enemy) {
            case 'pc':
                console.log('pc')
                setCombatant(encounter.characters.filter(character => character._id === targets[0]._id)[0])
                break
            case 'monster':
                console.log('monster')
                setCombatant(encounter.encounter.monsters.filter(monster => monster._id === targets[0]._id)[0])
                break
            }
        }
    
      return () => {}
    }, [targets, encounter.characters, encounter.encounter.monsters])

    const applyDamage = (combatant, adjustedHp) => {
        console.log(combatant)
        console.log(adjustedHp)
        switch (combatant.enemy) {
            case 'pc':
                editCharacter(combatant, adjustedHp)
                break
            case 'monster':
                editMonster(combatant, adjustedHp)
                break
        }
    }
  
    const calculateDamage = (addRemove, amount) => {
      switch (addRemove) {
        case 'damage':
          const damageTotal = combatant.currentHp - amount
          damageTotal < 0 
            ? applyDamage(combatant, {currentHp: 0}) 
            : applyDamage(combatant, {currentHp: damageTotal})
            break
        case 'heal':
          const healTotal = combatant.currentHp + amount
          healTotal > combatant.maxHp 
            ? applyDamage(combatant, {currentHp: combatant.maxHp}) 
            : applyDamage(combatant, {currentHp: healTotal})
      }
      encounter.setModal({on: false, type: ''})
    }
    
    return (
      <div id='damage-calculator'>
        <h2>Damage Calculator</h2>
  
        {combatant && 
        <div>
          <h2>{combatant.name}</h2>
          <div className='flex-row'>
            <input 
              type='number' 
              max={combatant.maxHP} 
              min='0' 
              value={combatant.currentHp} 
              onChange={(e) => setCombatant({...combatant, currentHp: parseInt(e.target.value)})}>
            </input>
          </div>
  
          <form className='flex-row'>
            <button onClick={(e) => {e.preventDefault(); damage > 0 && setDamage(damage - 1)}}>{"<"}</button>
            <input
              type='number'
              value={damage}
              onChange={(e) => {setDamage(parseInt(e.target.value))}}
              ></input>
            <button onClick={(e) => {e.preventDefault(); setDamage(damage + 1)}}>{">"}</button>
            <button onClick={(e) => {e.preventDefault(); calculateDamage('heal', damage)}}>Heal</button>
            <button onClick={(e) => {e.preventDefault(); calculateDamage('damage', damage)}}>Damage</button>
          </form>
        </div>}
      </div>
    );
  }