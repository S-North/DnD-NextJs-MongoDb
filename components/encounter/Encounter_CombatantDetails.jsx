import React, { useState, useEffect, createContext, useContext, useRef } from "react";
import styles from "./Encounter_CombatantDetails.module.css";
import { EncounterContext } from "../../pages/encounter/[id]";
import { truncate } from "../../utils/utils";
import { calculateConcentrationRemaining } from "../../utils/encounterUtils";

import { Toast } from 'primereact/toast';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';

import Encounter_CombatantDetails_Tabs from "./Encounter_CombatantDetails_Tabs";
import Encounter_CombatantDetails_Stats from "./Encounter_CombatantDetails_Stats";
import Encounter_CombatantDetails_Traits from "./Encounter_CombatantDetails_Traits";
import Encounter_CombatantDetails_SpellPane from "./Encounter_CombatantDetails_SpellPane";
import Encounter_CombatantDetails_Actions from "./Encounter_CombatantDetails_Actions";
import { spellClasses } from "../../utils/Forms";

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
            command: () => addConcentration(combatant)
        },
        {
            icon: 'pi pi-times-circle',
            label: 'Remove Concentration',
            disabled: !combatant?.concentration,
            command: () => removeConcentration(combatant)
        }
        ]

    useEffect(() => {
        // debugger
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

    const addCondition = (target, conditions) => {
        const currentRound = context.encounter.round
        console.log(currentRound)
        const update = conditions.map(condition => (
            {
                name: condition.value,
                started: currentRound,
                source: 'manually added',
                duration: 1000
            }
        )) 
        console.log(target, conditions)
        if (target.enemy === 'pc') context.editCharacter(target, {conditions: update})
        if (target.enemy === 'monster') context.editMonster(target, {conditions: update})
    }

    const addConcentration = (target, spell) => {
        console.log(target)
        spell && console.log(spell)

        const parseDuration = (duration) => {
            if (duration.length === 0) {console.log('duration is empty') ;return 0}
            let amount
            let unit
            const words = duration.split(' ')
            console.log(words)
            words.forEach(word => {
                // console.log(word)
                switch (word) {
                    case 'minute' || 'minutes': unit = 10; break
                    case 'hour'|| 'hours': unit = 10*60*24; break
                }
                const number = parseInt(word)
                console.log(number)
                console.log(typeof number)
                if (!isNaN(number) && typeof number === 'number') {
                    // console.log(`${word} is a number`)
                    amount = number
                } 
                // else console.error(`${word} is not a number`)
                
            })
            console.log(amount)
            console.log(unit)
            return amount*unit

        }
        const newSpell = {round: context.encounter.round}
        if (!spell) [newSpell.name, newSpell.duration] = window.prompt('Name & duration. e.g. Wall of Force,7').split(',')
        else if (spell) {
            newSpell.name = spell.name
            newSpell.duration = parseDuration(spell.duration)
        }
        
        console.log(newSpell)
        if (target.enemy === 'pc') context.editCharacter(target, {concentration: newSpell})
        if (target.enemy === 'monster') context.editMonster(target, {concentration: newSpell})
    }

    const removeConcentration = (target) => {
        console.log('remove old concentration')
        console.log(target)
        if (target.enemy === 'pc') context.editCharacter(target, {concentration: null})
        if (target.enemy === 'monster') context.editMonster(target, {concentration: null})
    }
    
    
    return (
        <>
            <Toast ref={toast} position="bottom-right" />

            {combatant &&
            <div className={styles.mainpanel}>
                <div className={styles.header}>
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
                    {<div className={styles.indicators}>
                        {combatant?.conditions?.map(condition => (
                            <p className={styles.indicatorCondition}>{condition.name}</p>
                        ))}
                        {combatant?.concentration &&
                            <p title={`Name: ${combatant.concentration.name} \nDuration: ${combatant.concentration.duration}\nInitiated: Round ${combatant.concentration.round + 1}\nRemaining: ${calculateConcentrationRemaining(combatant, context.encounter.round)}`} className={styles.indicatorConcentration}>{combatant.concentration.name}</p>
                        }
                    </div>}
                </div>
            <Encounter_CombatantDetails_Tabs combatant={combatant} tab={tab} setTab={setTab} />
            <div className={styles.contentarea}>
                {tab === 'details' && <Encounter_CombatantDetails_Stats combatant={combatant} tab={tab} addCondition={addCondition} />}
                {tab === 'traits' && <Encounter_CombatantDetails_Traits combatant={combatant} tab={tab} />}
                {tab === 'actions' && <Encounter_CombatantDetails_Actions combatant={combatant} tab={tab} doDamage={doDamage} />}
                {tab === 'spells' && <Encounter_CombatantDetails_SpellPane combatant={combatant} addConcentration={addConcentration} removeConcentration={removeConcentration} />}
            </div>

            
            </div>}
        </>
        
    )
}
