// calculate average hitpoints. sides +1, /2 to get average dice roll, multiply by number of dice rolls, + bonus
export const averageHP = (number, sides, bonus=0) => {
    let n = parseInt(number);
    let s = parseInt(sides);
    let b = parseInt(bonus);
    console.log(n,s,b);
    let total = (((s + 1)/2)*n)+b;
    return total     
}

export const xpToLevel = (xp) => {
    // console.log(typeof xp)
    xp = parseInt(xp)
    // console.log(typeof xp)
    switch(true) {
        case xp < 301: return 1;
        case xp < 901: return 2;
        case xp < 2701: return 3;
        case xp < 6501: return 4;
        case xp < 14001: return 5;
        case xp < 23001: return 6;
        case xp < 34001: return 7;
        case xp < 48001: return 8;
        case xp < 64001: return 9;
        case xp < 85001: return 10;
        case xp < 100001: return 11;
        case xp < 120001: return 12;
        case xp < 140001: return 13;
        case xp < 165001: return 14;
        case xp < 195001: return 15;
        case xp < 225001: return 16;
        case xp < 265000: return 17;
        case xp < 305001: return 18;
        case xp < 355001: return 19;
        default: return 20
    }
}

export const crToXp = (cr) => {
    // console.log(cr)
    // console.log(typeof xp)
    cr = parseFloat(cr)
    // console.log(cr)
    // console.log(typeof cr)
    switch(cr) {
        case 0: return 10;
        case 0.125: return 25;
        case 0.25: return 50;
        case 0.5: return 100;
        case 1: return 200;
        case 2: return 450;
        case 3: return 700;
        case 4: return 1100;
        case 5: return 1800;
        case 6: return 2300;
        case 7: return 2900;
        case 8: return 3900;
        case 9: return 5000;
        case 10: return 5900;
        case 11: return 7200;
        case 12: return 8400;
        case 13: return 10000;
        case 14: return 11500;
        case 15: return 13000;
        case 16: return 15000;
        case 17: return 18000;
        case 18: return 20000;
        case 19: return 22000;
        case 20: return 25000;
        case 21: return 33000;
        case 22: return 41000;
        case 23: return 50000;
        case 24: return 62000;
        case 25: return 75000;
        case 26: return 90000;
        case 27: return 105000;
        case 28: return 120000;
        case 29: return 135000;
        case 30: return 155000;
        default: return 0
    }
}

export const skillToAbility = (skill) => {
    // check the ability type of any skill. take in a skill as string e.g. "Deception", "Insight", etc. return an ability as string e.g. "str", "dex"
    if (["athletics"].includes(skill.toLowerCase())) return 'str'
    if (["acrobatics", "sleight of hand", "stealth"].includes(skill.toLowerCase())) return 'dex'
    if (["arcana", "history", "investigation", "nature", "religion"].includes(skill.toLowerCase())) return 'int'
    if (["animal handling", "insight", "medicine", "perception", "survival"].includes(skill.toLowerCase())) return 'wis'
    if (["deception", "intimidation", "performance", "persuasion"].includes(skill.toLowerCase())) return 'cha'
    return false
}

export const abilityModifier = (int) => {
    // take in an ability score and return a modifier
    if (int > 9) {
        // munbers 10 or greater we can just deduct 10, divide my 2 and round down
        return Math.floor((int -10) / 2)
    } else {
        // numbers below 10, deduct 11, divide by 2 and round up
        return Math.ceil((int - 11) / 2)
    }
}

export const calculateProficiencyBonus = (cr) => {
    switch (true) {
        default:
            return 9
        case cr < 5:
            return 2
        case cr < 9:
            return 3
        case cr < 13:
            return 4
        case cr < 17:
            return 5
        case cr < 21:
            return 6
        case cr < 25:
            return 7
        case cr < 29:
            return 8      
    }
}

export const calculateAbilityModifier = (int) => {
    // take in an ability score and return a modifier
    if (int > 9) {
        // munbers 10 or greater we can just deduct 10, divide my 2 and round down
        return Math.floor((int -10) / 2)
    } else {
        // numbers below 10, deduct 11, divide by 2 and round up
        return Math.ceil((int - 11) / 2)
    }
}

export const calculateSpellDC = (stats) => {
    let proficiencyBonus = 0
    let abilityModifier = 0

    // for monsters
    if (stats?.cr) proficiencyBonus = calculateProficiencyBonus(stats.cr)
    if (stats?.spellcasting?.ability) abilityModifier = calculateAbilityModifier(modifiedAbilityScore(stats?.spellcasting?.ability, stats))

    // for PCs and NPCs
    if (stats.classes) {
        // calculate proficiency bonus from class levels
        // calculate spell attack modifier from casting ability stat
    }

    return 8 + proficiencyBonus + abilityModifier
}

export const calculateSpellAttack = (stats) => {
    let proficiencyBonus = 0
    let abilityModifier = 0
    if (stats?.cr) proficiencyBonus = calculateProficiencyBonus(stats.cr)
    if (stats?.spellcasting?.ability) abilityModifier = calculateAbilityModifier(modifiedAbilityScore(stats?.spellcasting?.ability, stats))

    return proficiencyBonus + abilityModifier
}

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
                    // console.log(mod)
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
    if (c.enemy === 'pc') baseAC = combatant.ac

    // check armor
    const armorList = c.equipment?.filter(eq => eq.type === 'Light Armor' || eq.type === 'Medium Armor' || eq.type === 'Heavy Armor') || []
    const armorEquiped = armorList.filter(armor => (armor.equiped)).sort((a,b) => {return a.ac > b.ac})[0] || [] // there shouldn't be more than 1 armor equiped. But if there is, choose the best one :)
    // console.log(armorEquiped)
    const armorAc = armorEquiped?.ac || baseAC 
    switch (armorEquiped.type) {
        case 'Light Armor': armorAc += abilityModifier(modifiedAbilityScore('dex', c)); console.log('light armor dex bonus'); break
        case 'Medium Armor': if (abilityModifier(modifiedAbilityScore('dex', c)) <= 2) armorAc += abilityModifier(modifiedAbilityScore('dex', c)); else armorAc += 2; console.log('light armor dex bonus'); break
        default: break
    }
    // console.log(armorAc)

    // check shield
    const shieldList = c.equipment?.filter(eq => eq.type === 'Shield') || []
    const shieldEquiped = shieldList.filter(armor => (armor.equiped)).sort((a,b) => {return a.ac > b.ac})[0] || [] // there shouldn't be more than 1 shield equiped. But if there is, choose the best one :)
    // console.log(shieldEquiped)
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
    // console.log(mods)

    const newAC = mods.reduce((total, mod) => {return total + mod.bonus}, 0) + armorAc
    // console.log(newAC)

    return newAC
}

export function calculateEncounterDifficulty (monsterXPs, charactersXp) {
    // console.log(charactersXp)
    // console.log(monsterXPs)
    const difficultyArray = [
        [25, 50, 75, 125, 250, 300, 350, 450, 550, 600, 800, 1000, 1100, 1250, 1400, 1600, 2000, 2100, 2400, 2800],
        [50, 100, 150, 250, 500, 600, 750, 900, 1100, 1200, 1600, 2000, 2200, 2500, 2800, 3200, 3900, 4200, 4900, 5700],
        [75,  150, 225, 375, 750, 900, 1100, 1400, 1600, 1900, 2400, 3000, 3400, 3800, 4300, 4800, 5900, 6300, 7300, 8500],
        [100, 200, 400, 500, 1100, 1400, 1700, 2100, 2400, 2800, 3600, 4500, 5100, 5700, 6400, 7200, 8800, 9500, 10900, 12700]
    ]
    const partyThresholds = [0, 0, 0, 0]
    const totalMonsterXP = (monsterXPs && monsterXPs.length > 0) ? monsterXPs.reduce((total, xp) => {return total + xp}) : 0
    let adjustedMonsterXP = 0

    charactersXp.forEach(xp => {
        const level = xpToLevel(xp)
        // console.log(level)
        difficultyArray.forEach((difficulty, i) => {
            partyThresholds[i] = partyThresholds[i] + difficulty[level-1]
        })
    })
    // console.log(partyThresholds)
    // console.log(totalMonsterXP)
    switch (true) {
        case monsterXPs.length < 2: adjustedMonsterXP = totalMonsterXP; break
        case monsterXPs.length === 2: adjustedMonsterXP = totalMonsterXP * 1.5; break
        case monsterXPs.length < 7: adjustedMonsterXP = totalMonsterXP * 2; break
        case monsterXPs.length < 11: adjustedMonsterXP = totalMonsterXP * 2.5; break
        case monsterXPs.length < 15: adjustedMonsterXP = totalMonsterXP * 3; break
        default: adjustedMonsterXP = totalMonsterXP * 4; break
    }
    // console.log(adjustedMonsterXP)
    // need to include the adjustment for party size before returning a result
    if (adjustedMonsterXP < partyThresholds[0]) return {partyThresholds, adjustedMonsterXP, difficulty: 'trivial'}
    if (adjustedMonsterXP < partyThresholds[1]) return {partyThresholds, adjustedMonsterXP, difficulty: 'easy'}
    if (adjustedMonsterXP < partyThresholds[2]) return {partyThresholds, adjustedMonsterXP, difficulty: 'medium'}
    if (adjustedMonsterXP < partyThresholds[3]) return {partyThresholds, adjustedMonsterXP, difficulty: 'hard'}
    if (adjustedMonsterXP >= partyThresholds[3]) return {partyThresholds, adjustedMonsterXP, difficulty: 'deadly'}
}