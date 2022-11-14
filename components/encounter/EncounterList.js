import { useContext, useState, useEffect } from "react";
import { EncounterContext } from "../../pages/encounter/[id]";
import { FaBackward, FaForward  } from 'react-icons/fa';
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { MultiSelect } from 'primereact/multiselect';
import { PanelMenu } from 'primereact/panelmenu';
import { TreeSelect } from 'primereact/treeselect';
import { v4 as uuidv4 } from "uuid";
 
// Encounter list is the list of combatants shown while the encounter is running.
// If you want the list of combatants shown while editing the encounter, you need InitiativeList.js

export default function EncounterList ({displayCombatant, changeHP, incrementInitiative, editEncounter}) {
    const context = useContext(EncounterContext)
    const [ moveDialog, setMoveDialog ] = useState(false);
    const [ encounterTargets, setEncounterTargets ] = useState(null);
    const [ move, setMove ] = useState({execute: false, monsters: [], target: {}});
    const [ selectedMonsters, setSelectedMonsters ] = useState(null);
    const [ selectedTarget, setSelectedTarget ] = useState(null);
    const [ executeMove, setexecuteMove ] = useState(false)

    useEffect(() => {
        if (context?.encounter?._id) {
            let adventures
            let encounters
            const getAdventures = async () => {
                const advResponse = await fetch(`/api/adventures`, {
                    method: "POST",
                    body: JSON.stringify(
                        {
                        action: 'query',
                        data: {campaignId: context.encounter.campaignId}
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })

                const encResponse = await fetch(`/api/encounters`, {
                method: "POST",
                body: JSON.stringify(
                    {
                    action: 'query',
                    data: {campaignId: context.encounter.campaignId}
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
                })

                adventures = await advResponse.json(advResponse)
                // console.log(adventures)
                encounters = await encResponse.json(encResponse)
                // console.log(encounters)

                setEncounterTargets(adventures.map(a => (
                    {
                        label: a.name,
                        expanded: context.encounter.adventureId === a._id,
                        items: [...encounters.filter(enc => enc.adventureId === a._id).map(enc => (
                            {
                                label: enc.name,                                
                                visible: enc._id !== context.encounter._id,
                                command: () => setMove(current => {return {...current, target: enc}})
                                // command: () => console.log(enc)
                            }
                        )), {label: '<NEW ENCOUNTER>', command: () => setSelectedTarget({name: 'NEW ENCOUNTER'})}]
                    }
                )))
            }
            getAdventures()
        }

        return () => {}
    }, [context])
    
    function getExpandedStats (combatant) {
        // console.log(combatant)
        switch (true) {
            default:
                break;
            case combatant.enemy === "monster":
                return context.encounter.monsters.filter((f) => f._id === combatant._id)[0];
                break;
            case combatant.enemy === "pc":
                // console.log(encounter.characters)
                return context.characters.filter((f) => f._id === combatant._id)[0];
        }
    }

    const handleMoveMonsters = async (e, monsters, target) => {
        e.preventDefault()
        setSelectedMonsters(monsters)
        setSelectedTarget(target)
        setexecuteMove(true)
    }

    useEffect(() => {
        // console.log(move.target)
      if (move?.monsters?.length > 0 && move?.target?._id && move?.execute) {
        const initItems = [...move.target.initiative]
        const monsterItems = [...move.target.monsters]

        move.monsters.forEach(monster => {
            const newId = uuidv4()
            const {name, enemy, source} = monster
            initItems.push({name, enemy, source, init: 0, _id: newId})
            monsterItems.push({...monster, _id: newId})
        })

        // console.log(initItems)
        // console.log(monsterItems)

        const itemsToRemove = move.monsters.map(item => item._id)
        const remainingInit = context.encounter.initiative.filter(init => {return !itemsToRemove.includes(init._id)} )
        const remainingMonsters = context.encounter.monsters.filter(monster => {return !itemsToRemove.includes(monster._id)} )
        // console.log(itemsToRemove)
        // console.log(move.target.name)
        // console.log(remainingInit)
        // console.log(remainingMonsters)

        editEncounter({initiative: initItems, monsters: monsterItems}, move.target._id)
        editEncounter({initiative: remainingInit, monsters: remainingMonsters}, context.encounter._id)
        setMove({execute: false, monsters: [], target: {}})
        setMoveDialog(false)
    }
    
      return
    }, [move])
    
    return (
        <div className="one-column">
            <Dialog style={{"width": "100%","maxWidth": "45rem"}} visible={moveDialog} onHide={() => {setMove({execute: false, monsters: [], target: {}}); setMoveDialog(false)}}>
                {/* <MultiSelect
                style={{"width": "100%", "margin-bottom": "1rem"}}
                    value={selectedMonsters} 
                    options={context.encounter.monsters.filter(m => m.currentHp > 0)} 
                    onChange={(e) => setSelectedMonsters(e.value)} 
                    optionLabel="name"
                    filter
                    display='chip'
                    placeholder="Select monsters to move" maxSelectedLabels={3} /> */}

                <MultiSelect
                style={{"width": "100%", "margin-bottom": "1rem"}}
                    value={move.monsters} 
                    options={context.encounter.monsters.filter(m => m.currentHp > 0)} 
                    onChange={(e) => setMove({...move, monsters: e.target.value})} 
                    optionLabel="name"
                    filter
                    display='chip'
                    placeholder="Select monsters to move" maxSelectedLabels={3} />

                <PanelMenu style={{"width": "100%", "margin-bottom": "1rem"}} model={encounterTargets}></PanelMenu>
                
                <div className="flex-row" style={{"alignItems": "center"}}>
                    {/* {move?.monsters?.length > 0 && move?.target?.name && <p>Move <strong>{move.monsters.map(m => m.name).join(', ')}</strong> to "<strong>{move.target.name}</strong>"</p>} */}
                </div>
                <div style={{"display": "flex"}}>
                    <Button
                        style={{"width": "100%"}}
                        className="p-button-success" 
                        label={move?.monsters?.length > 0 && move?.target?.name ? <strong>Move {move.monsters.map(m => m.name).join(', ')} to "{move.target.name}"</strong> : "Make a Selection"}
                        disabled={move.monsters.length < 1 || !move.target?._id}
                        onClick={(e) => setMove({...move, execute: true})} />
                        </div>
            </Dialog>

            <div className="flex-row">
                <h3>{`Round: ${context.encounter.round + 1} Turn: ${
                    context.encounter.turn + 1
                }`}</h3>
                <button onClick={ () => { incrementInitiative("back") } }
                >
                    <FaBackward />
                </button>
                <button onClick={ () => { editEncounter({mode: 'editing'})}}> Edit </button>
                <button onClick={() => { incrementInitiative("forward")}}> <FaForward /> </button>
                <Button
                    label="Move" 
                    className="p-button-sm"
                    onClick={(e) => {e.preventDefault(); setMoveDialog(true)}}
                />
            </div>

            {context?.encounter?.initiative && context?.characters && context.encounter.initiative
            .sort((a, b) => b.init - a.init)
            .map((combatant, index) => (
                <div key={combatant._id}>
                    {combatant && <div key={combatant.id} className="combatant-item" style={context.encounter.turn === index 
                        ? { backgroundColor: "lightgreen" }
                        : { backgroundColor: "white" }
                    }>

                        <div 
                            className="initiative" 
                            style={{ 
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "0",
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                backgroundImage: `url(${getExpandedStats(combatant).picture_url})`, 
                                backgroundSize: "100%", 
                                backgroundRepeat: "no-repeat", 
                                objectFit: "fill", 
                                color: "white", 
                                minWidth: "3rem" }}>
                                <p style={{"color": "white", "textShadow": "0px 0px 5px black", "fontWeight": "bold", "padding": "1px", "fontSize": "16px"}}>{combatant.init}</p>
                        </div>
                        {/* <img src={getExpandedStats(combatant).picture_url} height='40' width='40'></img> */}
                        <div className="details" style={{width: "100%"}}
                            onClick={() => {
                            combatant.enemy === "monster"
                                ? displayCombatant(
                                    context.encounter.monsters.filter((m) => m._id === combatant._id)[0]
                                )
                                : displayCombatant(
                                    context.characters.filter((c) => c._id === combatant._id)[0]
                                );
                            }}
                        >
                            <h2>AC: {getExpandedStats(combatant).ac} {getExpandedStats(combatant).name}</h2>
                            {getExpandedStats(combatant).conditions && Array.isArray(getExpandedStats(combatant).conditions) && <p>{getExpandedStats(combatant).conditions.map(condition => (condition.name)).join(", ")}</p>}
                        </div>

                        <div className="hitpoints" style={getExpandedStats(combatant).currentHp > 0 ? {cursor: "pointer"} : {cursor: "pointer", "backgroundColor": "#b90000"}} onClick={() => { changeHP([combatant])} }>
                            <h2>
                            {getExpandedStats(combatant).currentHp}/{getExpandedStats(combatant).maxHp}
                            </h2>
                        </div>
                    </div>}
                </div>
            ))}
        </div>
    )
}