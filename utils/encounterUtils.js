import { stringify } from "uuid"
import { abilityModifier } from "./utils"

export const calculateConcentrationRemaining = (combatant, round) => combatant.concentration.duration - (round - combatant.concentration.round)
export const modifiedAbilityScore = (stat, combatant) => {
    const newCombatant = JSON.parse(JSON.stringify(combatant))
    // console.log(stat)
    // console.log(combatant?.equipment?.filter(eq => eq.modifiers).filter)
    const equipmentWithMods = newCombatant?.equipment?.filter(eq => (eq.modifiers && eq.equiped && !eq.attunement) || (eq.modifiers && eq.equiped && eq.attunement && eq.attuned) ) || []
    // console.log(equipmentWithMods)

    const mods = []
    equipmentWithMods.forEach(eq => {
        if (eq.modifiers?.length > 0) {
            eq.modifiers.forEach(mod => {
                if (mod.category === 'ability score' && mod.type === stat) {
                    console.log(mod)
                    mods.push(mod)
                }
            })
        }
    })
    // console.log(mods)
    // console.log(modifier)
    if (mods.length === 0) return newCombatant[stat]
    if (mods.length === 1) return newCombatant[stat] + mods[0].bonus
    if (mods.length > 1) return newCombatant[stat] + mods.sort((a,b) => {return a.bonus > b.bonus}).bonus
    return newCombatant[stat]
}

export const calculateAC = (combatant) => {
    const c = JSON.parse(JSON.stringify(combatant))
    let baseAC = 10 + abilityModifier(modifiedAbilityScore('dex', c))
    if (c.enemy === 'monster') baseAC = c.ac

    // check armor
    const armorList = c.equipment?.filter(eq => eq.type === 'Light Armor' || eq.type === 'Medium Armor' || eq.type === 'Heavy Armor') || []
    const armorEquiped = armorList.filter(armor => (armor.equiped)).sort((a,b) => {return a.ac > b.ac})[0] || [] // there shouldn't be more than 1 armor equiped. But if there is, choose the best one :)
    console.log(armorEquiped)
    const armorAc = armorEquiped?.ac || baseAC 
    switch (armorEquiped.type) {
        case 'Light Armor': armorAc += abilityModifier(modifiedAbilityScore('dex', c)); console.log('light armor dex bonus'); break
        case 'Medium Armor': if (abilityModifier(modifiedAbilityScore('dex', c)) <= 2) armorAc += abilityModifier(modifiedAbilityScore('dex', c)); else armorAc += 2; console.log('light armor dex bonus'); break
        default: break
    }
    console.log(armorAc)

    // check shield
    const shieldList = c.equipment?.filter(eq => eq.type === 'Shield') || []
    const shieldEquiped = shieldList.filter(armor => (armor.equiped)).sort((a,b) => {return a.ac > b.ac})[0] || [] // there shouldn't be more than 1 shield equiped. But if there is, choose the best one :)
    console.log(shieldEquiped)
    if (shieldEquiped?.ac) armorAc += shieldEquiped.ac

    // check equipment for magic modifiers e.g. modifier {category: 'bonus', type: 'ac', bonus: 1}
    const magicModifiers = combatant.equipment?.filter(eq => (eq.modifiers && eq.equiped && !eq.attunement) || (eq.modifiers && eq.equiped && eq.attunement && eq.attuned)) || []
    const mods = []
    magicModifiers.forEach(eq => {
        // console.log(eq)
        if (eq.modifiers?.length > 0) {
            eq.modifiers.forEach(mod => {
                if (mod.category === 'bonus' && mod.type === 'ac') mods.push(mod)
            })
        }
    })
    console.log(mods)

    const newAC = mods.reduce((total, mod) => {return total + mod.bonus}, 0) + armorAc
    console.log(newAC)

    return newAC
}