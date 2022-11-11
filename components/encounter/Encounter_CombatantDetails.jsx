import React, { useState, useEffect, createContext, useContext, useRef } from "react";
import styles from "./Encounter_CombatantDetails.module.css";
import { EncounterContext } from "../../pages/encounter/[id]";
import { truncate } from "../../utils/utils";

import { Toast } from 'primereact/toast';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';

import Encounter_CombatantDetails_Tabs from "./Encounter_CombatantDetails_Tabs";
import Encounter_CombatantDetails_Stats from "./Encounter_CombatantDetails_Stats";
import Encounter_CombatantDetails_Traits from "./Encounter_CombatantDetails_Traits";
import Encounter_CombatantDetails_SpellPane from "./Encounter_CombatantDetails_SpellPane";
import Encounter_CombatantDetails_Actions from "./Encounter_CombatantDetails_Actions";

export const EncounterDetailsContext = createContext();

export default function Encounter_CombatantDetails({ selected, doDamage }) {
    const context = useContext(EncounterContext)
    const [combatant, setCombatant] = useState({})
    const [tab, setTab] = useState('details')
    const toast = useRef(null);
    const menu = useRef(null);
    const menuItems = [
        {
            icon: 'pi pi-fw pi-file-export', 
            label: 'Save Custom',
            command: () => {
                let confirm = true
                if (context.campaign.monsters?.map(monster => (monster.name)).includes(combatant.name)) {
                confirm = window.confirm(`There is already a monster called ${combatant.name} in the campaign monsters. Are you sure you wan't to add this duplicate name?`)
                }
                if (confirm) {
                console.log(combatant)
                context.saveCustomMonster(combatant);
                showSticky(combatant.name, 'Saved to campaign monsters.')
                } else {
                showSticky(combatant.name, 'Monster not saved')
                }
            }
        },
        {
            icon: 'pi pi-stopwatch',
            label: 'Add Concentration',
            command: () => console.log('add concentration')
        },
        {
            icon: 'pi pi-times-circle',
            label: 'Remove Concentration',
            disabled: !combatant?.concentration,
            command: () => console.log('remove concentration')
        }
        ]

    useEffect(() => {
        if (selected?.enemy === 'monster' && context.encounter) {
        setCombatant(context.encounter.monsters.filter(monster => {return selected._id === monster._id})[0])
        }
        // if (selected?.enemy === 'monster' && selected.sourceBook === 'Custom Edited' && context.encounter) {
        //    console.log('set the combatant view to...')
        //    console.log(context.campaign.monsters.filter(monster => {return selected._id === monster._id}))
        //    // console.log(context.campaign.monsters.filter(monster => {return selected._id === monster._id})[0])
        //    setCombatant(context.campaign.monsters.filter(monster => {return selected._id === monster._id})[0])
        //    }
        if (selected?.enemy === 'pc' && context.characters) {
        setCombatant(context.characters.filter(character => {return selected._id === character._id})[0])
        }
        
        return () => {}
        }, [selected, context.encounter, context.characters])
    
    const showSticky = (title, message) => {
        toast.current.show({severity: 'success', summary: title, detail: message, life: 5000});
    }

    return (
        <>
            <Toast ref={toast} position="bottom-right" />

            {combatant &&
            <div className={styles.mainpanel}>
                <div className={styles.title}>

                {combatant.picture_url && (
                    <a href={combatant.picture_url} target='blank'>
                    <img
                        src={combatant.picture_url}
                        className={styles.image} />
                    </a>
                )}

                <div className={styles.title__info}>
                    <h3>{combatant.name}</h3>
                    <span>
                        <p>
                            <strong>
                            {combatant.size && combatant.size}{" "}
                            {combatant.type && combatant.type}
                            </strong>
                            ,{" "}<strong>Speed: </strong>
                            {combatant.speed && combatant.speed},{" "}
                            <strong>Languages: </strong>
                            {combatant.languages && combatant.languages.join(", ")},
                        </p>
                        <p title={combatant.description}>
                            <strong>Description: </strong>
                            {truncate(combatant.description, 100)}
                        </p>
                    </span>
                </div>
                <Menu model={menuItems}
                    popup ref={menu}>
                </Menu>
                <Button
                    className="p-button-sm"
                    style={{"maxHeight": "2rem"}}
                    icon="pi pi-ellipsis-v" 
                    onClick={(event) => menu.current.toggle(event)}/>
                </div>
            <Encounter_CombatantDetails_Tabs combatant={combatant} tab={tab} setTab={setTab} />
            <div className={styles.contentarea}>
                {tab === 'details' && <Encounter_CombatantDetails_Stats combatant={combatant} tab={tab} />}
                {tab === 'traits' && <Encounter_CombatantDetails_Traits combatant={combatant} tab={tab} />}
                {tab === 'actions' && <Encounter_CombatantDetails_Actions combatant={combatant} tab={tab} doDamage={doDamage} />}
                {tab === 'spells' && <Encounter_CombatantDetails_SpellPane combatant={combatant} />}
            </div>
            </div>}

        </>
        
    )
}
