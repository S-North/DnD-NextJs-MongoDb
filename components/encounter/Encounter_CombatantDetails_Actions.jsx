import styles from './Encounter_CombatantDetails_Actions.module.css'
import { diceRoll } from '../../utils/utils';
import { SplitButton } from 'primereact/splitbutton';

export default function Encounter_CombatantDetails_Actions({ combatant, tab, doDamage}) {
  return (
    <div
        style={
            tab === "actions"
            ? { display: "block" }
            : { display: "none" }
        }
        id="details"
    >
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
