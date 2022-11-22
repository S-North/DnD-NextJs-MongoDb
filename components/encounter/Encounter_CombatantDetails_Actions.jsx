import styles from './Encounter_CombatantDetails_Actions.module.css'
import { abilityModifier, diceRoll, calculateProficiencyBonus } from '../../utils/utils';
import { SplitButton } from 'primereact/splitbutton';
import { modifiedAbilityScore } from '../../utils/encounterUtils';
import { useContext } from 'react';
import { EncounterContext } from '../../pages/encounter/[id]';
import { UserContext } from '@auth0/nextjs-auth0';

export default function Encounter_CombatantDetails_Actions({ combatant, tab, doDamage}) {
    const context = useContext(EncounterContext)
    const monsters = [...context.encounter.monsters]
    
    const calculateEquipmentAction = (equipment) => {
        // IMPORTANT: when copying an object, use JSON.parse to do a deep copy, otherwise REFERENCES to objects and arrays in the properties will be passed
        let eq = JSON.parse(JSON.stringify(equipment))

        let action = eq.actions
        const damages = Object.keys(action).filter(k => k.includes('damage'))

        if (eq.type === 'Melee') {
            if (combatant.enemy === 'monster') action.attack = action.attack + abilityModifier(modifiedAbilityScore('str', combatant)) + calculateProficiencyBonus(combatant.cr)
            // will need to use xp or level for PCs and NPCs

            damages?.forEach(damage => {
                action[damage].hdBonus += abilityModifier(modifiedAbilityScore('str', combatant))
                eq.modifiers?.filter(mod => mod.category === 'bonus' && mod.type === 'melee damage').forEach(mod => {
                    action[damage].hdBonus += mod.bonus
                })
            })
        }

        if (eq.type === 'Ranged') {
            action.attack = action.attack + abilityModifier(modifiedAbilityScore('dex', combatant)) + calculateProficiencyBonus(combatant.cr)
            damages?.forEach(damage => {
                action[damage].hdBonus += abilityModifier(modifiedAbilityScore('dex', combatant))
                eq.modifiers?.filter(mod => mod.category === 'bonus' && mod.type === 'ranged damage').forEach(mod => {
                    action[damage].hdBonus += mod.bonus
                })            
            })
        }

        return action
    }

    return (
        <div
            style={
                tab === "actions"
                ? { display: "flex", flexDirection: "column", gap: "0.5rem" }
                : { display: "none" }
            }
            id="details"
        >
            {combatant?.equipment && combatant?.equipment?.filter(eq => eq.actions).map(eq => (
                <>
                {(eq.actions?.attack || eq.actions?.attack === 0) && ((eq.equiped && !eq.attunement) || (eq.equiped && eq.attunement && eq.attuned === true)) && <div key={eq._id} className={styles.actions}>
                    <div className={styles.action}>
                    <h2>{eq.name}</h2>
                    <p>{eq.description}</p>
                    {/* <p>{action.attack.name}</p> */}
                    <SplitButton
                        // label="Attack"
                        icon='pi pi-bolt'
                        tooltip="Do Attack"
                        // className={styles.btn}
                        className="p-button-sm mr-2 mb-2"
                        style={{"maxHeight": "2rem"}}
                        model={[
                            {label: 'Advantage', command: () => doDamage(
                                {
                                _id: combatant._id,
                                name: combatant.name,
                                enemy: combatant.enemy,
                                },
                                action,
                                {advantage: 'advantage'}
                            )}, 
                            {label: 'Disadvantage', command: () => doDamage(
                                {
                                _id: combatant._id,
                                name: combatant.name,
                                enemy: combatant.enemy,
                                },
                                action,
                                {advantage: 'disadvantage'}
                            )}
                        ]}
                        onClick={() => {
                            // debugger
                            doDamage(
                                {
                                _id: combatant._id,
                                name: combatant.name,
                                enemy: combatant.enemy,
                                str: combatant.str,
                                dex: combatant.dex
                                },
                                calculateEquipmentAction(eq), // pass in the attack, modified by equipment
                                {advantage: 'normal'}
                            );
                        }}
                    >
                        
                    </SplitButton>
                    </div>
                </div>}
                </>
            ))}
            {combatant.actions && (
                <div className={styles.actions}>
                {combatant.actions &&
                    combatant.actions.map((action) => (
                        <div key={action._id} className={styles.action}>
                            <h2>{action.name}</h2>
                            <p>{action.description}</p>
                            {(action.attack && action.attack > 0) |
                            action.damage1.hdDice ? (
                            <SplitButton
                                // label="Attack"
                                icon='pi pi-bolt'
                                tooltip="Do Attack"
                                // className={styles.btn}
                                className="p-button-sm mr-2 mb-2"
                                style={{"maxHeight": "2rem"}}
                                model={[
                                    {label: 'Advantage', command: () => doDamage(
                                        {
                                        _id: combatant._id,
                                        name: combatant.name,
                                        enemy: combatant.enemy,
                                        },
                                        action,
                                        {advantage: 'advantage'}
                                    )}, 
                                    {label: 'Disadvantage', command: () => doDamage(
                                        {
                                        _id: combatant._id,
                                        name: combatant.name,
                                        enemy: combatant.enemy,
                                        },
                                        action,
                                        {advantage: 'disadvantage'}
                                    )}
                                ]}
                                onClick={() => {
                                    doDamage(
                                        {
                                        _id: combatant._id,
                                        name: combatant.name,
                                        enemy: combatant.enemy,
                                        },
                                        action,
                                        {advantage: 'normal'}
                                    );
                                }}
                            >
                                
                            </SplitButton>
                            ) : (
                            <></>
                            )}
                            {action.damage && (
                            <button
                                onClick={() => {
                                    window.alert(
                                        diceRoll(
                                        action.damage.dice,
                                        action.damage.sides,
                                        action.damage.bonus
                                        )[2]
                                    );
                                }}
                            >
                                damage: {action.damage.dice}d
                                {action.damage.sides}+
                                {action.damage.bonus}
                            </button>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
