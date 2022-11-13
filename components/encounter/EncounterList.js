import { useContext, useState, useEffect } from "react";
import { EncounterContext } from "../../pages/encounter/[id]";
import { FaBackward, FaForward  } from 'react-icons/fa';
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { MultiSelect } from 'primereact/multiselect';
import { PanelMenu } from 'primereact/panelmenu';
import { TreeSelect } from 'primereact/treeselect';
 
// Encounter list is the list of combatants shown while the encounter is running.
// If you want the list of combatants shown while editing the encounter, you need InitiativeList.js

export default function EncounterList ({displayCombatant, changeHP, incrementInitiative, editEncounter}) {
    const context = useContext(EncounterContext)
    const [ moveDialog, setMoveDialog ] = useState(false);
    const [ encounterTargets, setEncounterTargets ] = useState(null);
    const [ selectedMonsters, setSelectedMonsters ] = useState(null);
    const [ selectedTarget, setSelectedTarget ] = useState(null);


    const getTargets = async (encounter) => {
        const response = await fetch(`/api/adventures`, {
            method: "POST",
            body: JSON.stringify(
                {
                action: 'query',
                data: {campaignId: encounter.campaignid}
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
          }
          })
          const adventures = await response.json(response)
          return await adventures
    }

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
                                command: () => setSelectedTarget(enc)
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

    const moveMonsters = async (monsters, target) => {
        // console.log(monsters)
        // console.log(target)
        // e.preventDefault()
        const data = {
            target: target._id,
            monsters
        }
        // data.target ? console.log(data) : console.log('create a new encounter')
        setSelectedMonsters([])
        setSelectedTarget()
        setMoveDialog(false)
    }

    // const encounterTargets = [{
    //     label: context.encounter.name,
    //     icon:'pi pi-fw pi-file',
    // }]


    return (
        <div className="one-column">
            <Dialog style={{"minWidth": "30rem"}} visible={moveDialog} onHide={() => {setSelectedMonsters([]); setSelectedTarget(); setMoveDialog(false)}}>
                <MultiSelect
                style={{"width": "100%", "margin-bottom": "1rem"}}
                    value={selectedMonsters} 
                    options={context.encounter.monsters.filter(m => m.currentHp > 0)} 
                    onChange={(e) => setSelectedMonsters(e.value)} 
                    optionLabel="name"
                    // filter
                    display='chip'
                    placeholder="Select monsters to move" maxSelectedLabels={3} />

                <PanelMenu style={{"width": "100%", "margin-bottom": "1rem"}} model={encounterTargets}></PanelMenu>
                
                <div className="flex-row">
                    {selectedMonsters && selectedTarget && <h3>{`Move ${selectedMonsters.map(m => m.name).join(', ')} to ${selectedTarget.name}`}</h3>}
                    <Button 
                        className="p-button-success" 
                        label="Move" 
                        disabled={selectedMonsters < 1 || !selectedTarget}
                        onClick={(e) => moveMonsters(selectedMonsters, selectedTarget)} />
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
                    <div key={combatant.id} className="combatant-item" style={context.encounter.turn === index 
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
                </div>
            </div>
            ))}
        </div>
    )
}