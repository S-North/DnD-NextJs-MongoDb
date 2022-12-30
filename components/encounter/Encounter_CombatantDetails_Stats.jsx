import React from 'react'
import { useRef, useContext } from 'react';
import { conditions, abilityScores, abilityToSkills } from '../../utils/Forms';
import { modifiedAbilityScore, calculateAC, calculateProficiencyBonus, abilityModifier, crToXp } from '../../utils/rules';
import { diceRoll } from '../../utils/utils';
import styles from './Encounter_CombatantDetails_Stats.module.css'
import { EncounterContext } from '../../pages/encounter/[id]';
import Select from 'react-select'


export default function Encounter_CombatantDetails_Stats({ combatant, tab, addCondition }) {
    // console.log(calculateAC(combatant))
    const context = useContext(EncounterContext)
    const conditionOptions = conditions.map(condition => (
        {value: condition, label: condition}
        ))
     
    const calcSaveThrow = (combatant, save, ability) => {
        if (combatant?.saves?.includes(save)) {
            // console.log(`has ${save} proficiency`)
            return (
                abilityModifier(ability) + calculateProficiencyBonus(combatant.cr)
            );
        } else {
            // console.log(`doesn't have ${save} proficiency`)
            return abilityModifier(ability);
        }
    };

    const calculateSkillBonus = (score, skill) => {
        let fullSkill = combatant.skills.filter(s => {return s.name === skill})[0]
        // const baseBonus = abilityModifier(modifiedAbilityScore(score.toLowerCase(), combatant))

        let bonus = abilityModifier(modifiedAbilityScore(score.toLowerCase(), combatant))
        switch (fullSkill.level) {
           case 'none':
              break
           case 'proficient':
              bonus += calculateProficiencyBonus(combatant.cr)
              break
           case 'expert':
            bonus += (calculateProficiencyBonus(combatant.cr) * 2)
              break
        }
  
        return bonus
     
    }
    
    const menu = useRef(null);

    return (
        <div 
            className={styles.detailsContainer}
            style={tab === "details"
                        ? { display: "flex" }
                        : { display: "none" }
                  }
            id="details">

            <div className={styles.abilityrow}>
                {abilityScores.map(score => (
                    <div className={styles.abilitybox}>
                        <h2>{score}</h2>
                        <button
                            className={styles.btn}
                            title="Athletics"
                            onClick={() => {
                                window.alert(diceRoll(1,20, abilityModifier(modifiedAbilityScore(score.toLowerCase(), combatant)))[2]
                                );
                            }}
                        >{modifiedAbilityScore(score.toLowerCase(), combatant)}
                        </button>

                        <button
                            className={styles.btn}
                            onClick={() => {
                                window.alert( diceRoll( 1, 20, calcSaveThrow( combatant, score, modifiedAbilityScore(score.toLowerCase(), combatant) ) )[2] );
                            }}
                        >{calcSaveThrow(combatant, score, modifiedAbilityScore(score.toLowerCase(), combatant))}
                        </button>

                        {abilityToSkills[score.toLowerCase()].map(skill => (
                            <>
                                {/* <div>{skill}</div> */}
                                {combatant?.skills?.map(s => s.name).includes(skill) && 
                                    <p 
                                        className={styles.link}
                                        title={calculateSkillBonus(score, skill)}
                                            onClick={() => {
                                                window.alert( diceRoll( 1, 20, calculateSkillBonus(score, skill)
                                                // window.alert( diceRoll( 1, 20, 0
                                                    )[2]
                                                );
                                            }}
                                    >{skill}</p>
                                }
                            </>
                        ))}
                    </div>
                ))}
            </div>

            <div className={styles.vulnerabilites}>
                {combatant?.vulnerabilities?.length > 0 && (
                <p>
                    <strong>Vulnerabilities: </strong>
                    {combatant.vulnerabilities.join(", ")}
                </p>
                )}
                {combatant?.resistances?.length > 0 && (
                <p>
                    <strong>Resistances: </strong>
                    {combatant.resistances.join(", ")}
                </p>
                )}
                {combatant?.damageImmunity?.length > 0 && (
                <p>
                    <strong>Damage Immunity: </strong>
                    {combatant.damageImmunity.join(", ")}
                </p>
                )}
                {combatant?.conditionImmunity?.length > 0 && (
                <p>
                    <strong>Condition Immunity: </strong>
                    {combatant.conditionImmunity.join(", ")}
                </p>
                )}
            </div>
            <div className={styles.vulnerabilites}>
                {combatant?.senses?.length > 0 && (
                <p>
                    <strong>Senses: </strong>
                    {combatant.senses.join(", ")}
                </p>
                )}
                {combatant?.speed?.length > 0 && (
                <p>
                    <strong>Speed: </strong>
                    {combatant.speed.join(", ")}
                </p>
                )}
                {combatant?.cr && (
                <p>
                    <strong>Challenge Rating: </strong>
                    {combatant.cr} ({crToXp(combatant.cr)} XP)
                </p>
                )}
                {combatant?.cr && (
                <p>
                    <strong>Proficiency Bonus: </strong>
                    {calculateProficiencyBonus(combatant.cr)}
                </p>
                )}
            </div>
            <p>AC: <strong>{calculateAC(combatant)}</strong></p>
            <div className={styles.title_buttons}>
                <Select
                options={conditionOptions}
                value={combatant?.conditions?.map(condition => (
                    {value: condition.name, label: condition.name}
                ))} 
                placeholder={'Conditions'} 
                isMulti
                menuPosition="fixed"
                menuPlacement="auto"
                onChange={(e) => {addCondition(combatant, e)}}
                />
            </div>
        </div>
    )
}

