import React from 'react'
import { useRef, useContext } from 'react';
import { conditions } from '../../utils/Forms';
import { abilityModifier, crToXp, calculateProficiencyBonus, diceRoll } from '../../utils/utils';
import styles from './Encounter_CombatantDetails_Stats.module.css'
import { EncounterContext } from '../../pages/encounter/[id]';
import Select from 'react-select'


export default function Encounter_CombatantDetails_Stats({ combatant, tab, addCondition }) {
    const context = useContext(EncounterContext)
    const conditionOptions = conditions.map(condition => (
        {value: condition, label: condition}
        ))
     
    const calcSaveThrow = (combatant, save, ability) => {
        if (context?.combatant?.saves?.includes(save)) {
            return (
                abilityModifier(ability) + calculateProficiencyBonus(combatant.cr)
            );
        } else return abilityModifier(ability);
    };
    
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
                <div className={styles.abilitybox}>
                <h2>Str</h2>
                <button
                    className={styles.btn}
                    title="Athletics"
                    onClick={() => {
                        window.alert(diceRoll(1,20, abilityModifier(combatant.str))[2]
                        );
                    }}
                >{combatant.str}
                </button>

                <button
                    className={styles.btn}
                    onClick={() => {
                        window.alert( diceRoll( 1, 20, calcSaveThrow( combatant, "Str", combatant.str ) )[2] );
                    }}
                >{calcSaveThrow(combatant, "Str", combatant.str)}
                </button>

                {combatant.skills &&
                    combatant.skills.filter(skill => {return skill.name.toLowerCase() === 'athletics'})[0] && (
                        <p
                            className={styles.link}
                            title={
                            abilityModifier(combatant.str) +
                            calculateProficiencyBonus(combatant.cr)
                            }
                            onClick={() => {
                            window.alert( diceRoll( 1, 20, 
                                combatant.skills.filter( skill => { return skill.name.toLowerCase() === 'athletics' } )[0].bonus
                                )[2]
                            );
                            }}
                        >Athletics
                        </p>
                    )}
                </div>

                <div className={styles.abilitybox}>
                <h2>Dex</h2>
                <button
                    className={styles.btn}
                    title="Acrobatics, Sleight of Hand, Stealth"
                    onClick={() => { window.alert( diceRoll(1, 20, abilityModifier( combatant.dex ) )[2]) }}
                    >{combatant.dex}
                </button>

                <button
                    className={styles.btn}
                    onClick={() => {
                        window.alert(
                            diceRoll(
                            1,
                            20,
                            calcSaveThrow(
                                combatant,
                                "Dex",
                                combatant.dex
                            )
                            )[2]
                        );
                    }}
                >
                    {calcSaveThrow(combatant, "Dex", combatant.dex)}
                </button>

                {/* generate clickable links for each of the skills of this ability stat */}
                {["Acrobatics", "Sleight of Hand", "Stealth"].map(skillName => (
                    <React.Fragment key={skillName}>
                    {combatant?.skills?.filter(skill => {return skill.name === skillName}).length === 1 &&
                        <p
                            className={styles.link}
                            onClick={() => {
                            window.alert(
                                diceRoll(1, 20, combatant?.skills?.filter(skill => {return skill.name === skillName})[0].bonus)[2]
                            );
                            }}
                            title={combatant?.skills?.filter(skill => {return skill.name === skillName})[0].bonus}
                        >{skillName}
                        </p>
                    }
                    </React.Fragment>
                ))
                }

                </div>

                <div className={styles.abilitybox}>
                <h2>Con</h2>
                <button
                    className={styles.btn}
                    onClick={() => {
                        window.alert(
                            diceRoll(
                            1,
                            20,
                            abilityModifier(combatant.con)
                            )[2]
                        );
                    }}
                >
                    {combatant.con}
                </button>
                <button
                    className={styles.btn}
                    onClick={() => {
                        window.alert(
                            diceRoll(
                            1,
                            20,
                            calcSaveThrow(
                                combatant,
                                "Con",
                                combatant.con
                            )
                            )[2]
                        );
                    }}
                >
                    {calcSaveThrow(combatant, "Con", combatant.con)}
                </button>
                </div>

                <div className={styles.abilitybox}> 
                <h2>Int</h2>
                <button
                    className={styles.btn}
                    title="Arcana, History, Investigation, Nature, Religion"
                    onClick={() => {
                        window.alert(
                            diceRoll(
                            1,
                            20,
                            abilityModifier(combatant.int)
                            )[2]
                        );
                    }}
                >
                    {combatant.int}
                </button>
                <button
                    className={styles.btn}
                    onClick={() => {
                        window.alert(
                            diceRoll(
                            1,
                            20,
                            calcSaveThrow(
                                combatant,
                                "Int",
                                combatant.int
                            )
                            )[2]
                        );
                    }}
                >
                    {calcSaveThrow(combatant, "Int", combatant.int)}
                </button>

                {/* generate clickable links for each of the skills of this ability stat */}
                {["Arcana", "History", "Investigation", "Nature", "Religion"].map(skillName => (
                    <React.Fragment key={skillName}>
                    {combatant?.skills?.filter(skill => {return skill.name === skillName}).length === 1 &&
                        <p
                            className={styles.link}
                            onClick={() => {
                            window.alert(
                                diceRoll(1, 20, combatant?.skills?.filter(skill => {return skill.name === skillName})[0].bonus)[2]
                            );
                            }}
                            title={combatant?.skills?.filter(skill => {return skill.name === skillName})[0].bonus}
                        >{skillName}
                        </p>
                    }
                    </React.Fragment>
                ))
                }

                </div>

                <div className={styles.abilitybox}>
                <h2>Wis</h2>
                <button
                    className={styles.btn}
                    title="Animal Handling, Insight, Medicine, Perception, Survival"
                    onClick={() => {
                        window.alert(
                            diceRoll(
                            1,
                            20,
                            abilityModifier(combatant.wis)
                            )[2]
                        );
                    }}
                >
                    {combatant.wis}
                </button>
                <button
                    className={styles.btn}
                    onClick={() => {
                        window.alert(
                            diceRoll(
                            1,
                            20,
                            calcSaveThrow(
                                combatant,
                                "Wis",
                                combatant.wis
                            )
                            )[2]
                        );
                    }}
                >
                    {calcSaveThrow(combatant, "Wis", combatant.wis)}
                </button>

                {/* generate clickable links for each of the skills of this ability stat */}
                {["Animal Handling", "Insight", "Medicine", "Perception", "Survival"].map(skillName => (
                    <React.Fragment key={skillName}>
                    {combatant?.skills?.filter(skill => {return skill.name === skillName}).length === 1 &&
                        <p
                            className={styles.link}
                            onClick={() => {
                            window.alert(
                                diceRoll(1, 20, combatant?.skills?.filter(skill => {return skill.name === skillName})[0].bonus)[2]
                            );
                            }}
                            title={combatant?.skills?.filter(skill => {return skill.name === skillName})[0].bonus}
                        >{skillName}
                        </p>
                    }
                    </React.Fragment>
                ))
                }

                </div>

                <div className={styles.abilitybox}>
                <h2>Cha</h2>
                <button
                    className={styles.btn}
                    title="Deception, Intimidation, Performance, Persuasion"
                    onClick={() => {
                        window.alert(
                            diceRoll(
                            1,
                            20,
                            abilityModifier(combatant.cha)
                            )[2]
                        );
                    }}
                >
                    {combatant.cha}
                </button>
                <button
                    className={styles.btn}
                    onClick={() => {
                        window.alert(
                            diceRoll(
                            1,
                            20,
                            calcSaveThrow(
                                combatant,
                                "Cha",
                                combatant.cha
                            )
                            )[2]
                        );
                    }}
                >
                    {calcSaveThrow(combatant, "Cha", combatant.cha)}
                </button>

                {/* generate clickable links for each of the skills of this ability stat */}
                {["Deception", "Intimidation", "Performance", "Persuasion"].map(skillName => (
                    <React.Fragment key={skillName}>
                    {combatant?.skills?.filter(skill => {return skill.name === skillName}).length === 1 &&
                        <p
                            className={styles.link}
                            onClick={() => {
                            window.alert(
                                diceRoll(1, 20, combatant?.skills?.filter(skill => {return skill.name === skillName})[0].bonus)[2]
                            );
                            }}
                            title={combatant?.skills?.filter(skill => {return skill.name === skillName})[0].bonus}
                        >{skillName}
                        </p>
                    }
                    </React.Fragment>
                ))
                }

                </div>
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

