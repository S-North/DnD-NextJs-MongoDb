import { crToXp, skillToAbility, calculateProficiencyBonus, abilityModifier, fractionalCrtoNumber } from './utils'
import { damageTypes } from './Forms'
import { v4 as uuidv4 } from 'uuid'

export const importMonster = (inputFile) => {
    const monster = inputFile.monster
    const tag = inputFile.importTag
    // console.log(monster)
    const dcRegex = /DC\s\d+\s\w+/g
    const getSize = (size) => {
        switch (size) {
            default:
                return "couldn't figure this out"
            case "T":
                return "tiny"
            case "S":
                return "small"
            case "M":
                return "medium"
            case "L":
                return "large"
            case "H":
                return "huge"
            case "G":
            return "gargantuan"
        }
    }

    const getTitan = () => {
        if (monster.type.includes("(titan)")) {
            return true} 
            else return false
    }

    const findDamageTypes = (text) => {
        // parses a string for words in the damageTypes array & retuns an array of strings of those damage types
        // if none found, it returns an empty array
        const words = text.split(/\s+/)
        const damages = []
        words.forEach(word => {
            if (damageTypes.includes(word)) {
                if (word === "bludgeoning, piercing, slashing from nonmagical attacks") {word = "nonmagical b, p, s"}
                damages.push(word.trim())
            }
        });
        if (damages.length > 0) return damages
        else return []
    }

    const splitHitdice = (string) => {
        // console.log(damageDice)
        const damageDice = /(\d+)(d)(\d+)( ?)(\+?)( ?)([\d]+)?/gi // find patterns of type [numbers d numbers] and [numbers d numbers + numbers]
        let newString = damageDice.exec(string)[0]

        // split the string on letter d, put 1st in dice, 2nd on sides
        const dice = newString.split(/[d]/)[0]
        const sides =  newString.split(/[d/+]/)[1]

        // check for a bonus number and put it in bonus, else bonus = 0
        let bonus = 0
        if (newString.split(/[/+]/).length > 1) {
            const string = newString.split(/[/+]/)[1]
            string.slice(0,1) === " " ? bonus = string.slice(1) : bonus = string
        }
        return {
            hdDice: parseInt(dice), 
            hdSides: parseInt(sides),
            hdBonus: parseInt(bonus)}
        }

    const parseSaves = (saves) => {
        if (saves.length === 0) return []
        const splitOnComma = saves.split(/[,]/)
        const abilities = []
        splitOnComma.map(e => (
            abilities.push(e.trim().split(/\s+/)[0])
            ))
        return abilities // No need to return the bonuses, we can calulate them from profficiency bonus
    }

    const parseSkills = (monster) => {
        // console.log(monster)
        const skills = monster.skill
        if (skills.length === 0) return []
        const abilities = []

        const splitOnComma = skills.split(/[,]/)
        splitOnComma.forEach(item => {
            const obj = {}
            obj.name = item.split('+')[0].trim()
            obj.bonus = parseInt(item.split('+')[1].trim())
            obj.level = 'other' // default value

            const abilityBonus = abilityModifier(monster[skillToAbility(obj.name)])
            const crAsNumber = fractionalCrtoNumber(monster.cr)

            // test the supplied bonus against calculated proficiency bonus and ability modifier to see if it fits [proficient | expert | none]
            if (obj.bonus === abilityBonus + calculateProficiencyBonus(crAsNumber)) obj.level = 'proficient'
            if (obj.bonus === abilityBonus + (calculateProficiencyBonus(crAsNumber)*2)) obj.level = 'expert'
            if (obj.bonus === abilityBonus) obj.level = 'none'

            abilities.push(obj)
        })
        
        return abilities // No need to return the bonuses, we can calulate them from profficiency bonus
    }

    const parseLanguages = (languages) => {
        const array = []
        const splitOnComma = languages.split(/[,;]/)
        splitOnComma.forEach(l => {
            if (l === "bludgeoning, piercing, slashing from nonmagical attacks") {l = "nonmagical b, p, s"}
            if (l.length > 0) array.push(l.trim())
        })
        return array
    }
    
    const parseResistances = (resistance) => {
        const splitOnColon = resistance.split(/[;]/)
        const temp = []
        splitOnColon[0].split(/[,]/).forEach(r => {
            if (r === "damage from spells") r = "spell damage"
            if (r.length > 0) temp.push(r.trim())
        })
        if (splitOnColon.length > 1) {
            temp.push("nonmagical b, p, s")
        }
        return temp
    }

    const parseActions = (actions) => {
        // console.log(actions)
        if (!actions) return []
        const data = []
        const removePlus = /\+/
        const damageDice = /(\d+)(d)(\d+)( ?)(\+?)( ?)([\d]+)?/gi
        const dcRegex = /DC\s\d+\s\w+/gi // e.g. DC 20 Wisdom

        // sometimes actions is an array of objects, sometimes its a single object (gad nabbit!!!)
        if (Array.isArray(actions) === false) actions = [actions]

        // console.log(actions)

        // process each action
        if (actions.length > 0) {
            actions.forEach(action => {
                // console.log(action)
    
                let name = ""
                let description = ""
                let attack = 0
                let damage1 = {enabled: false}
                let damage2 = {enabled: false}
                let damage3 = {enabled: false}
                let dc = {}
                
                // sometimes the text is a string, sometines its an array of strings
                // ((action.name && Array.isArray(action.name)) ? name = action.name.join() : name = action.name)
                if (action.name && Array.isArray(action.name)) {name = action.name.join()} else name = action.name
                // name = action.name
                // console.log(name)
    
                // sometimes the text is a string, sometines its an array of strings
                if (action.text && Array.isArray(action.text)) {description = action.text.join()} else description = action.text
                // ((action.text && Array.isArray(action.text)) ? description = action.text.join() : description = action.text)
                // console.log(description)
                
                if (action.attack) {
                    // regex for + sign, and matching dice roll notation e.g. 1d4+6, 12d10 + 8.
                    // sometimes the action.attack is string, sometimes its an array of strings (wtf man)
                    if (typeof action.attack === "string") attack = parseInt(action.attack.split(/[|]/)[1].replace(removePlus, ""))
                    if (typeof action.attack === "object" && action.attack.length > 0) attack = parseInt(action.attack[0].split(/[|]/)[1].replace(removePlus, ""))
                }
    
                // try to parse any damages in the description, only adds the first 3 found.
                const damagesText = description.match(damageDice)
                // console.log(damagesText)
                // console.log(damagesText)
                const damages = []
                if (damagesText && damagesText.length > 0) {
                    damagesText.forEach((d, i) => {
                        // console.log(d)
                    const damage = {...splitHitdice(d), enabled: true}
                    // console.log(damage)
                    if (findDamageTypes(description)[i]) {damage.type = findDamageTypes(description)[i]}
                    damages.push(damage)
                })}
    
                if (damages.length > 0) damage1 = damages[0]
                if (damages.length > 1) damage2 = damages[1]
                if (damages.length > 2) damage3 = damages[2]
    
                // find any DC saves
                
                const dcText = description.match(dcRegex)
                // console.log(dcText)
                if (dcText && dcText.length > 0) {
                    // console.log(dcText[0].split(" ")[1])
                    // console.log(dcText[0].split(" ")[2])
                    dc = {
                        dc: parseInt(dcText[0].split(" ")[1]), 
                        ability: dcText[0].split(" ")[2].slice(0,3).toLowerCase()
                    }
                }
                data.push(
                    {
                        _id: uuidv4(),
                        name: name,
                        description: description,
                        attack: attack,
                        damage1: damage1,
                        damage2: damage2,
                        damage3: damage3,
                        dc: dc
                    }
                )
            });
        }
        return data
    }

    const parseLegendaryActionCount = (text) => {
        if (text && Array.isArray(text)) {
            const regex = /\d legendary actions/i;
            return parseInt(regex.exec(text[0].text)[0].split(/\s+/)[0])
        } else return 0
    }

    const parseLegendary = (legendary) => {
        if (!legendary) return []
        const data = []
        const costRegex = /Costs\s[0-9]+\sActions/i
        const costDigits = /\d+/
        if (legendary) {
            legendary.forEach(legend => {
                // check to see if the is a name or text field, add an empty one if not
                if (!legend.text) legend = {...legend, text: ""}
                if (!legend.name) legend = {...legend, name: ""}
                // sometimes the text field is a string, sometimes an array dag nabbit! do something about this...

                let cost = 1
                let actions = 0
                if(costRegex.exec(legend.name) && costRegex.exec(legend.name).length > 0) {
                    cost = parseInt(costDigits.exec(costRegex.exec(legend.name)[0])[0])
                    // console.log(cost)
                }

                const regex = /\d legendary actions/i;
                // console.log(legend.text)
                if (regex.exec(legend.text)) {
                    // console.log("found actions")
                    cost = 0
                    actions = parseInt(regex.exec(legend.text)[0].split(" ")[0])
                    // console.log(actions)
                }
                
                if (actions > 0) {
                    // console.log("actions greater than 0")
                    // console.log(`actions = ${parseInt(costDigits.exec(actions[0])[0])}`)
                    data.push({
                        name: legend.name,
                        text: legend.text,
                        cost: cost,
                        actions: actions
                    })
                }
                else {
                    data.push({
                        _id: uuidv4(),
                        name: legend.name,
                        text: legend.text,
                        cost: cost
                    })
                }
            });
        }
        return data
    }

    const parseSpellSlots = (spellSlotString) => {
        // spellSlotString is a comma separated values string
        // convert to array of integers
        if (spellSlotString) {
            const spellSlots = spellSlotString.split(",")
            const spellSlotArray = []
            spellSlots.forEach(slot => {
                spellSlotArray.push(parseInt(slot.trim()))
            })
            // console.log(spellSlots)
            return spellSlotArray
        } else return []
    }

    const parseSpells = (spellsString) => {
        // spellsString is a comma separated values string
        if (spellsString) {
            const spells = spellsString.split(",")
            const spellsTrimmed = spells.map(s => (s = s.trim()))
            return spellsTrimmed
        } else return []
    }

    const parseTraits = (traits) => {
        if (!traits) return []
        if (Object.prototype.toString.call(traits) === '[object Object]') traits = [traits]
        const buildTraits = []
        traits.forEach(trait => {
            if (!trait.name) trait.name = ""
            if (!trait.text) trait.text = ""
            if (Array.isArray(trait.text)) trait.text = trait.text.join(' ')

            buildTraits.push({
                _id: uuidv4(),
                name: trait.name,
                description: trait.text
            })
        })
        return buildTraits
    }

    const parseCR = (cr) => {
        if (['1/2', '1/4', '1/8'].includes(cr)) {
            switch (cr) {
                case '1/2': return 0.5
                case '1/4': return 0.25
                case '1/8': return 0.125
            }
        }
        return parseInt(cr)
    }

    const parseSpeed = (speedString) => {
        // speed is a comma separated string. The forst element is always walk. Additional elements start with keyword e.g. climb, followed by spped in feet
        // e.g. "30 ft., burrow 20 ft.", "30 ft., climb 30 ft."

        if (speedString && typeof speedString === 'string') {
            const speeds = speedString.split(',')
            // let speed = {}
            const speed = []
            speeds.forEach((element, index) => {
                if (index === 0) speed.push(`${element.trim()}`)
                else speed.push(element.trim())
            })
            return speed          
        }
    }

    const parseSourceBook = (description) => {
        // see if the name of the source book e.g. Monster Manual is in the description. If so, add it to the monster. Otherwise return a blank string
        // const text = description.toLowerCase()
        // let sourceBook = ""
        // if (description.includes("monster manual")) return 'Monster Manual'
        // if (description.includes("mordenkainen's tome of foes")) return "Mordenkainen's Tome of Foes"
        // if (description.includes("Volo's Guide")) return "Volo's Guide"
        return tag
    }

    return {
        name: monster.name,
        size: getSize(monster.size),
        titan: getTitan(monster.type),
        description: monster.description,
        environment: monster.environment,
        type: monster.type.split(/\s+/)[0],
        alignment: monster.alignment,
        ac: parseInt(monster.ac.split(/\s+/)[0]),
        hitDice: splitHitdice(monster.hp),
        maxHp: parseInt(monster.hp.split(' ')[0]),
        speed: parseSpeed(monster.speed), // need to parse this e.g. "walk 40 ft."
        str: parseInt(monster.str),
        dex: parseInt(monster.dex),
        con: parseInt(monster.con),
        int: parseInt(monster.int),
        wis: parseInt(monster.wis),
        cha: parseInt(monster.cha),
        saves: parseSaves(monster.save),
        skills: parseSkills(monster), // skills can be profficient or expert. Might be able to calc by checking the written bonus against abilityBonus+proficiencyBonus(cr)
        passive: parseInt(monster.passive), // passive what, maybe perception. Probably dont need this as they can be calculated
        languages: parseLanguages(monster.languages),
        cr: parseCR(monster.cr),
        xp: crToXp(monster.cr),
        resistances: parseResistances(monster.resist),
        damageImmunity: parseResistances(monster.immune),
        vulnerabilities: parseResistances(monster.vulnerable),
        conditionImmunity: parseLanguages(monster.conditionImmune),
        senses: parseLanguages(monster.senses),
        traits: parseTraits(monster.trait),
        actions: parseActions(monster.action),
        legendary: parseLegendary(monster.legendary), // problem in the data for out data model. May need to do some manual data entry :( think some more... 
        spellSlots: parseSpellSlots(monster.slots),
        spells: parseSpells(monster.spells),
        sourceBook: parseSourceBook(monster.description),
        campaignMonster: monster.campaignMonster ? true : false
    }
}

export const importSpell = (spell) => {
    const parseSchool = (school) => {
        switch (school) {
            case 'C':
                return 'Conjuration'
            case 'N':
                return 'Necromancy'
            case 'EV':
                return 'Evocation'
            case 'A':
                return 'Abjuration'
            case 'T':
                return 'Transmutation'
            case  'D':
                return 'Divination'
            case 'EN':
                return 'Enchantment'
            default:
                return 'Illusion'
        }
    }
    const parseComponents = (components) => {
        if (!components | typeof components !== 'string') return []
        // components is a comma delimited string containing V, S, M keys. But it also may contain additional commas in the material components section :/
        const chunks = components.split(',')
        // console.log(chunks)
        const items = {
            verbal: false,
            somatic: false,
            material: false,
            materials: ""
        }
        chunks?.forEach(chunk => {
            if (chunk === 'V' | chunk === " V") items.verbal = true
            if (chunk === 'S' | chunk === " S") items.somatic = true
            let regex = / M */
            if (chunk === 'M' | chunk === " M" | chunk.indexOf(" M ") !== -1) items.material = true
        })

        let regex = /\((\w|\d|\s)+\)/
        const details = regex.exec(components)
        console.log(details)
        if (details) items.materials = details[0]
        return items
    }
    // const parseMaterials = (components) => {
    //     // get the material components. regex for "(anything)"
    //     let regex = /\((\w|\d|\s)+\)/
    //     const details = regex.exec(components)
    //     if (details) return details[0]
    //     return ""
    // }
    const parseRitual = (ritual) => {
        if (ritual === 'YES') return true
        else return false
    }
    const parseConcentration = (duration) => {
        if (duration.indexOf('Concentration') !== -1) return true
        return false
    }
    const parseDescription = (description) => {
        if (!description) return []
        if (typeof description === 'string') return [description]
        const array = []
        if (Array.isArray(description)) description.forEach(text => {
            if (text?.length > 0) array.push(text)
        })
        return array
    }
    const parseClasses = (classes) => {
        if (!classes) return []
        // classes should be a comma delimited string. We convert to an array of strings
        const classArray = classes.split(',')
        const cleanedUp = classArray.map(function(c) {return c.trim()})
        return cleanedUp

    } 

    return {
        name: spell.name,
        level: parseInt(spell.level),
        school: parseSchool(spell.school),
        time: spell.time,
        range: spell.range,
        components: parseComponents(spell.components),
        // materials: parseMaterials(spell.components), 
        duration: spell.duration,
        concentration: parseConcentration(spell.duration),
        classes: parseClasses(spell.classes),
        ritual: parseRitual(spell.ritual),
        description: parseDescription(spell.text) // this may be an array, do a function to parse
    }
}