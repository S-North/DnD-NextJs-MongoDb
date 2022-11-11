import styles from './Encounter_CombatantDetails_Traits.module.css'

export default function Encounter_CombatantDetails_Traits({ combatant, tab }) {
  return (
    <>
    {combatant && <div
        style={
        tab === "traits"
            ? { display: "block" }
            : { display: "none" }
        }
        id="details"
    >
        {combatant.traits && (
        <div className={styles.traits}>
            {combatant.traits &&
                combatant.traits.map((trait) => (
                    <div key={trait._id} className={styles.trait}>
                    <h2>{trait.name}</h2>
                    <p>{trait.description}</p>
                    </div>
                ))}
        </div>
        )}
    </div>}
    </>
  )
}
