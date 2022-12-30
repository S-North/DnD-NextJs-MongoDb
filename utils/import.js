import { skillToAbility, calculateProficiencyBonus, abilityModifier, fractionalCrtoNumber } from './utils'
import { abilityScores } from './Forms'
import { damageTypes } from './Forms'
import { v4 as uuidv4 } from 'uuid'

export const parseSpellCastingStats = (traits) => {
    const levelString = /\d+\w+-level/mi
    const spellcastingItems = traits?.filter(trait => {return trait.name?.toLowerCase() === 'spellcasting'}) || []
    console.log(spellcastingItems)

    const spellcastingStats = {caster: false, class: 'monster'}

    if (spellcastingItems.length > 0) {
        const castingDescription =  spellcastingItems[0].description
        console.log(castingDescription)

        const DC = parseInt(castingDescription?.toLowerCase()?.split('dc ')[1]?.split(',')[0])
        console.log(DC)
        if (DC) spellcastingStats.dc = DC

        const attack = parseInt(castingDescription?.toLowerCase()?.split('+')[1]?.split(' to hit')[0])
        if (attack) spellcastingStats.attack = attack;

        ['intelligence', 'wisdom', 'charisma'].forEach(score => {
            if (castingDescription.toLowerCase().includes(score)) spellcastingStats.ability = score.slice(0, 3); spellcastingStats.caster = true
        })

        const numberRegex = /\d+/mi
        const levelArr = castingDescription.match(numberRegex)
        if (levelArr.length > 0) {
            spellcastingStats.level = parseInt(levelArr[0])
        }

        // const levelItem = castingDescription.match(levelString)
        // let levelString
        // if (levelItem?.length > 0) levelString = levelItem.split('-')[0]
        // if (levelString && levelString.length > 0) {
        //     let i = []
        //     levelString.split('').forEach(letter => {

        //     })
        // }
        // if (level) spellcastingStats.level = level
    }
    return spellcastingStats
} 

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
        return parseFloat(cr)
    }

    const crToXp = (cr) => {
        const crInt = parseCR(cr)
        switch(crInt) {
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

export const importEquipment = (equipment) => {
    const parsed = {}

    const parseDescription = (text) => {
        if (!text) return []
        if (typeof text === 'string') return ['text']
        const textArr = []
        if (Array.isArray(text)) {
            text.forEach(line => {
                if (line && !line.includes('Rarity:')) textArr.push(line)
            })
        }
        return textArr
    }
    const parseAttunement = (text) => {
        if (!text) return false
        if (typeof text === 'string' && text.toLowerCase() === 'requires attunement') return true
        const attunement = false
        if (Array.isArray(text)) {
            text.forEach(line => {
                if (line?.toLowerCase() === 'requires attunement') attunement = true
            })
        }
        return attunement
    }
    const parseSource = (text) => {
        if (!text) return ''
        if (typeof text === 'string' && text.toLowerCase().includes('source:')) return text.split('Source: ' || 'source: ')[1]
        const source = ''
        if (Array.isArray(text)) {
            text.forEach(line => {
                if (line?.toLowerCase().includes('source:')) source = line.split('Source: ' || 'source: ')[1]
            })
        }
        return source
    }
    const parseType = (type) => {
        switch (type) {
            case 'LA': return 'Light Armor'
            case 'MA': return 'Medium Armor'
            case 'HA': return 'Heavy Armor'
            case 'A': return 'Ammo'
            case 'M': return 'Melee'
            case 'R': return 'Ranged'
            case 'S': return 'Shield'
            case 'ST': return 'Staff'
            case 'P': return 'Potion'
            case 'RD': return 'Rod'
            case 'RG': return 'Ring'
            case 'SC': return 'Scroll'
            case 'W': return 'Wonderous Item'
            case 'WD': return 'Wand'
            case '$': return 'Valuable'
            case 'G': return 'Gear'
            default: {console.log(type); return type}
        }
    }
    const parseMagic = (magic) => {
        if (!magic) return false
        if (parseInt(magic) === 0) return false
        if (parseInt(magic) === 1) return true
        else return false
    }
    const parseMagicValue = (name) => {
        switch (true) {
            case name.includes('+1'): return 1 
            case name.includes('+2'): return 2
            case name.includes('+3'): return 3
            case name.includes('+4'): return 4
            case name.includes('+5'): return 5
            default: return 0
        }
    }
    const parseProperty = (property) => {
        if (!property) return []

        const propertyArr = []
        let properties
        if (typeof property === 'string') properties = property.split(',')
        if (Array.isArray(properties)) {
            properties.forEach(property => {
                switch (property) {
                    case '2H' || '2h': propertyArr.push('2 Handed'); break
                    case 'A' || 'a': propertyArr.push('Ammunition'); break
                    case 'F' || 'f': propertyArr.push('Finesse'); break
                    case 'H' || 'h': propertyArr.push('Heavy'); break
                    case 'L' || 'l': propertyArr.push('Light'); break
                    case 'LD' || 'ld': propertyArr.push('Loading'); break
                    case 'T' || 't': propertyArr.push('Thrown'); break
                    case 'V' || 'v': propertyArr.push('Versatile'); break           
                    case 'R' || 'r': propertyArr.push('Reach'); break       
                    case 'S' || 's': propertyArr.push('Special'); break   // check this    
                }
        })}
        return propertyArr
    }
    const parseValue = (value) => {
        const valueObj = {amount: 0, type: ''}
        if (typeof value === 'string') {
            if (value.toLowerCase().includes('pp')) {
                valueObj.type = 'PP'
                valueObj.amount = value.split('pp')[0]
            }
            if (value.toLowerCase().includes('gp')) {
                valueObj.type = 'GP'
                valueObj.amount = value.split('gp')[0]
            }
            if (value.toLowerCase().includes('ep')) {
                valueObj.type = 'EP'
                valueObj.amount = value.split('ep')[0]
            }
            if (value.toLowerCase().includes('sp')) {
                valueObj.type = 'SP'
                valueObj.amount = value.split('sp')[0]
            }if (value.toLowerCase().includes('cp')) {
                valueObj.type = 'CP'
                valueObj.amount = value.split('cp')[0]
            }
        }
        return valueObj
    }
    const parseActions = (dmg1, dmg2, dmgType, roll) => {
        // ISSUES:
        // potion of healing uses roll for different things. ["4d4+4"] "You regain 4d4 + 4 hit points when you drink this potion.  The potion's red liquid glimmers when agitated.", ["1d4"] "When you drink this potion, you gain the \"reduce\" effect of the enlarge/reduce spell for 1d4 hours (no concentration required). The red in the potion's liquid continuously contracts to a tiny bead and then expands to color the clear liquid around it. Shaking the bottle fails to interrupt this process."
        // parseExtraDamageType('description) is returning the damage type
        // scrolls are getting an action for some reason. ["1d20+SPELL","1d20+5"]. "If the spell is on your class's spell list but of a higher level than you can normally cast, you must make an ability check using your spellcasting ability to determine whether you cast it successfully. The DC is 11.  On a failed check, the spell disappears from the scroll with no other effect.", "A spell cast from this scroll has a save DC of 13 and an attack bonus of +5."
        // staffs use roll to regain charges. "This staff has 10 charges and regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, a swarm of insects consumes and destroys the staff, then disperses."
        // staffs also use roll for extra damage. "You can use an action to cause a bolt of lightning to leap from the staff's tip in a line that is 5 feet wide and 120 feet long. Each creature in that line must make a DC 17 Dexterity saving throw, taking 9d6 lightning damage on a failed save, or half as much damage on a successful one."
        // I notice that magical staffs do not include dmg1 etc for normal damage :( 
        // some items include attack rolls & damage rolls in the roll array. "Tentacle Rod" ["1d20+9","1d6"]"Made by the drow, this rod is a magic weapon that ends in three rubbery tentacles. While holding the rod, you can use an action to direct each tentacle to attack a creature you can see within 15 feet of you. Each tentacle makes a melee attack roll with a +9 bonus. On a hit, the tentacle deals 1d6 bludgeoning damage. If you hit a target with all three tentacles, it must make a DC 15 Constitution saving throw. On a failure, the creature's speed is halved, it has disadvantage on Dexterity saving throws, and it can't use reactions for 1 minute. Moreover, on each of its turns, it can take either an action or a bonus action, but not both. At the end of each of its turns, it can repeat the saving throw, ending the effect on itself on a success." 
        // some rings also have a recharge roll
        let index = 1
        const parseDamageType = () => {
            switch (dmgType) {
                case 'B': return "bludgeoning"; break
                case 'P': return "piercing"; break
                case 'S': return "slashing"; break
                default: return undefined
            }
        }
        const parseExtraDamageType = (action) => {
            let damageType = ''
            let damageDescription = ''
            parsed.description.forEach(description => {
                damageTypes.forEach(type => {
                    if (description.includes(type)) {
                        damageType = type
                        damageDescription = description
                    }
                })
            })
            if (action = 'type') return damageType
            if (action = 'description') return damageDescription
        }

        const action = {
            _id: uuidv4(),
            name: equipment.name,
            description: parsed.description,
            attack: parsed.magicValue || 0,
        }
        if (dmg1) {
            const hdDice = parseInt(dmg1.split('d')[0])
            const hdSides = parseInt(dmg1.split('d')[1])
            const hdBonus = 0
            const type = parseDamageType()
            action[`damage${index}`] = {hdDice, hdSides, hdBonus, type, enabled: true}
            index += 1
        }
        if (dmg2) {
            const hdDice = parseInt(dmg2.split('d')[0])
            const hdSides = parseInt(dmg2.split('d')[1])
            const hdBonus = 0
            const type = parseDamageType()
            action[`damage${index}`] = {hdDice, hdSides, hdBonus, type, enabled: true}
            index += 1
        }
        if (roll) {
            roll.forEach(r => {
                
                const hdDice = parseInt(r.split('d')[0])
                const hdSides = parseInt(r.split('d')[1])
                const hdBonus = 0
                const type = parseExtraDamageType('type') || parseDamageType()
                const description = parseExtraDamageType('description')

                action[`damage${index}`] = {hdDice, hdSides, hdBonus, type, enabled: true, description}
                index += 1
            })
        }

        return action
    }

    const parseRange = (range) => {
        const parsedRange = {}
        parsedRange.normal = parseInt(range.split('/')[0])
        parsedRange.long = parseInt(range.split('/')[1])

        return parsedRange
    }

    const parseModifiers = (modifiers) => {
        // console.log(modifiers)
        const adjustedArr = []

        if (!Array.isArray(modifiers) && typeof modifiers === 'object') modifiers = [modifiers]
        if (Array.isArray(modifiers)) {
            // console.log('has modifier')
            modifiers.forEach(modifier => {
                const newMod = {
                    category: modifier._category,
                    type: modifier.__text.split(' +')[0] || '',
                    bonus: parseInt(modifier.__text.split(' +')[1]) || 0
                }
                if (newMod.category === 'ability score') {
                    newMod.type = newMod.type.slice(0, 3)
                }
                adjustedArr.push(newMod)
            })
        }

        return adjustedArr
    }
    
    const parseRolls = (rolls) => {
        const newArr = []
        rolls.forEach(roll => {
            const hdDice = parseInt(roll.split('d'))
            let remainder = roll.split('d')[1]
            const hdSides = parseInt(remainder.split('+')[0])
            let hdBonus = parseInt(remainder.split('+')[1]) || remainder.split('+')[1] || 0
            newArr.push({hdDice, hdSides, hdBonus})
        })

        return newArr
    }

    parsed.name = equipment.name
    parsed.description = parseDescription(equipment.text)
    if (equipment.ac) parsed.ac = parseInt(equipment.ac) || undefined
    parsed.type = parseType(equipment.type)
    parsed.weight = parseFloat(equipment.weight) || 0
    parsed.magic = parseMagic(equipment.magic)
    if (parsed.magic) parsed.magicValue = parseMagicValue(equipment.name)
    if (parsed.magic) parsed.attunement = parseAttunement(equipment.text)
    parsed.value = parseValue(equipment.value)
    parsed.source = parseSource(equipment.text)
    parsed.rarity = equipment.rarity || 'Common'
    parsed.property = parseProperty(equipment.property)
    if (equipment.stealth) parsed.strength = parseInt(equipment.strength) || undefined
    if (equipment.stealth === 'YES' || equipment.stealth === '1') parsed.stealth = true
    if ((equipment.type === 'M' || equipment.type === 'A' || equipment.range) && (equipment.dmg1 || equipment.dmg2 || equipment.roll)) parsed.actions = parseActions(equipment.dmg1, equipment.dmg2, equipment.dmgType, equipment.roll)
    if (!(equipment.type === 'M' || equipment.type === 'A' || equipment.range) && equipment.roll) parsed.rolls = parseRolls(equipment.roll)
    if (equipment.range) parsed.range = parseRange(equipment.range)
    if (equipment.modifier) parsed.modifiers = parseModifiers(equipment.modifier)

    return parsed
}

export const importCharacter = (equipment) => {
    
}

export const importNPC = (equipment) => {
    
}