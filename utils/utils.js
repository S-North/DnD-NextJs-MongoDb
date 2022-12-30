export const truncate = (string="", maxlength) => {
    if (string.length > maxlength) {
        return `${string.slice(0, maxlength)}...`
    } else {
        return string
    }
}

export const displayCrAsFraction = (cr) => {
    // CR's less than 1 should be displayed in the UI as a fraction. Never use this function to store CR values in the database or state
    if ([0.5, 0.25, 0.125].includes(cr)) {
        switch (cr) {
            case 0.5: return '1/2'
            case 0.25: return '1/4'
            case 0.125: return '1/8'
        }
    }
    return cr.toString()
}

export const fractionalCrtoNumber = (cr) => {
    // take in a cr as a string. try cast to number, if fails, try to convert to decimal
    let number = 0
    try {
        number = parseInt(cr)
        return number
    } catch (error) {console.error(error)}
    if (["0.5", "0.25", "0.125"].includes(cr)) {
        switch (cr) {
            case '1/2': return 0.5
            case '1/4': return 0.25
            case '1/8': return 0.125
        }
    } else return 0
}

// generate a random integer, takes in the lowest and highest integer as "start" and "end"
//returns a single integer
export const randInt = (start, end) => {
    start = Math.floor(start);
    end = Math.floor(end) + 1;
    return Math.floor(Math.random() * (end - start) + start)
}

// roll any numer of dice, with any number of sides, then add an optional bonus integer
// takes in 2 mandatory integers, and an optional integer for the bonus
// returns an array containing an array of all the dice results, followed by the plus, then a single integer of the total
export const diceRoll = (number, sides, bonus=0) => {
    console.log(number,sides,bonus);
    let n = parseInt(number);
    let s = parseInt(sides);
    let b = parseInt(bonus);
    let i;
    let rolls = [];
    let total = 0;
    for (i = 0; i < n; ++i) {
        let roll = randInt(1, s);
        console.log(`Roll is ${roll}`) // template literal strings, like f'strings. Uses backticks, not single quotes
        rolls.push((roll));
        total += roll;
    }
    total += b;
    return [rolls, b, total]
}



// export { randInt, diceRoll, averageHP, abilityModifier, xpToLevel, crToXp, calculateProficiencyBonus, skillToAbility, fractionalCrtoNumber }
