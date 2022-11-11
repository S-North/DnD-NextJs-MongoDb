import { useState, useContext } from "react";
import styles from "./Encounter_CombatantDetails.module.css";
import { EncounterContext } from "../../pages/encounter/[id]";
import { EncounterDetailsContext } from "./Encounter_CombatantDetails";

export default function Encounter_CombatantDetails_Tabs({ combatant, tab, setTab }) {
    const context = useContext(EncounterContext)
    
    // const details = useContext(EncounterDetailsContext)

    return (
        <>
        {combatant && <div className={styles.tabs}>
            <button
                className={styles.tab}
                style={tab === "details" ? { backgroundColor: "white", zIndex: "1" } : {}}
                onClick={() => setTab("details")}
            >Details
            </button>
            <button
                className={styles.tab}
                style={tab === "traits" ? { backgroundColor: "white", zIndex: "1" } : {}}
                onClick={() => setTab("traits")}
            >
                Traits (
                {combatant.traits?.length > 0 ? combatant.traits.length : 0})
            </button>
            <button
                className={styles.tab}
                style={tab === "actions" ? { backgroundColor: "white", zIndex: "1" } : {}}
                onClick={() => setTab("actions")}
            >
                Actions (
                {combatant.actions?.length > 0 ? combatant.actions.length : 0}
                )
            </button>
            <button
                className={styles.tab}
                style={tab === "spells" ? { backgroundColor: "white", zIndex: "1" } : {}}
                onClick={() => setTab("spells")}
            >
                Spells (
                {combatant.spellSlots?.reduce((total, current) => {
                    if (typeof current === 'number') total += parseInt(current);
                    return total
                },0
                )}
                )
            </button>
            <button
                className={styles.tab}
                style={
                    tab === "legendary" ? { backgroundColor: "white", zIndex: "1" } : {}
                }
                onClick={() => setTab("legendary")}
            >
                Legendary
            </button>
        </div>}
        </>
    )
}
