import { useContext, useState, useEffect } from "react";
import { EncounterContext } from "../../pages/encounter/[id]";
import { FaBackward, FaForward  } from 'react-icons/fa'


// Encounter list is the list of combatants shown while the encounter is running.
// If you want the list of combatants shown while editing the encounter, you need InitiativeList.js

export default function EncounterList ({displayCombatant, changeHP, incrementInitiative, editEncounter}) {
    const encounter = useContext(EncounterContext)
    function getExpandedStats (combatant) {
        switch (true) {
            default:
                break;
            case combatant.enemy === "monster":
                return encounter.encounter.monsters.filter((f) => f._id === combatant._id)[0];
                break;
            case combatant.enemy === "pc":
                console.log(encounter.characters)
                return encounter.characters.filter((f) => f._id === combatant._id)[0];
        }
    }


    return (
        <div className="one-column">
              <div className="flex-row">
                <h3>{`Round: ${encounter.encounter.round + 1} Turn: ${
                  encounter.encounter.turn + 1
                }`}</h3>
                <button onClick={ () => { incrementInitiative("back") } }
                >
                  <FaBackward />
                </button>
                <button onClick={ () => { editEncounter({mode: 'editing'})}}> Edit </button>
                <button onClick={() => { incrementInitiative("forward")}}> <FaForward /> </button>
              </div>

              {encounter.encounter.initiative && encounter.characters && encounter.encounter.initiative
                .sort((a, b) => b.init - a.init)
                .map((combatant, index) => (
                    <div key={combatant._id}>
                        <div key={combatant.id} className="combatant-item" style={encounter.encounter.turn === index 
                            ? { backgroundColor: "lightgreen" }
                            : { backgroundColor: "white" }
                        }>

                        <div className="initiative" style={{ backgroundColor: "green", color: "white", width: "40px" }}>{combatant.init}</div>
                        <div className="details" style={{width: "100%"}}
                            onClick={() => {
                            combatant.enemy === "monster"
                                ? displayCombatant(
                                    encounter.encounter.monsters.filter((m) => m._id === combatant._id)[0]
                                )
                                : displayCombatant(
                                    encounter.characters.filter((c) => c._id === combatant._id)[0]
                                );
                            }}
                        >
                            <h2>AC: {getExpandedStats(combatant).ac} {getExpandedStats(combatant).name}</h2>
                            {getExpandedStats(combatant).conditions && Array.isArray(getExpandedStats(combatant).conditions) && <p>{getExpandedStats(combatant).conditions.join(", ")}</p>}
                        </div>

                        <div className="hitpoints" style={{cursor: "pointer"}} onClick={() => { changeHP([combatant])} }>
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