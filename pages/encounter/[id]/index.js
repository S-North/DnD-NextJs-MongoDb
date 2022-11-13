import connectToDatabase from "../../../utils/mongodb";
import { ObjectId } from "mongodb";
import { v4 as uuidv4 } from 'uuid'

import { withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import React, { useState, useEffect, createContext, useContext, useRef } from "react";
import encounterStyle from "../../../styles/Encounter.module.css";

import { calculateConcentrationRemaining } from "../../../utils/encounterUtils";
import monsters, { MonsterForm } from "../../monsters";
import InitiativeList from "../../../components/encounter/InitiativeList";
import Encounter_CombatantDetails, { EncounterDetailsContext } from "../../../components/encounter/Encounter_CombatantDetails";
import CharacterForm from "../../../components/forms/CharacterForm";
import AddCharacter from "../../../components/encounter/AddCharacter";
import AddMonster from "../../../components/encounter/AddMonster";
import EditMonsters from "../../../components/encounter/EditMonsters";
import RollInitiative from "../../../components/encounter/RollInitiative";
import DamageCalculator from "../../../components/encounter/DamageCalculator";
import EncounterList from "../../../components/encounter/EncounterList";
import DoAttack from "../../../components/encounter/DoAttack";
import Nav from "../../../components/Nav";

import { Dialog } from 'primereact/dialog';

export const EncounterContext = createContext();

const Encounter = ({ initialEncounter }) => {
   const api = "/api/";
   const { user, error, isLoading } = useUser();
   const [encounter, setEncounter] = useState(initialEncounter);
   const [characters, setCharacters] = useState();
   const [campaign, setCampaign] = useState({});
   const [adventure, setAdventure] = useState({});
   const [tab, setTab] = useState('details')

   // used as temporary storage during edit, then as the combatant to display during running
   const [selected, setSelected] = useState();

   // used during mode: 'running' as temporary storage when adjusting a combatant e.g. changing HP, conditions, etc
   const [tempCombatant, setTempCombatant] = useState();
   const [modal, setModal] = useState({ type: "none", on: false });


   useEffect(() => {
      // keybindings for keyboard commands. Needs some more research

      document.addEventListener("keyup", function (e) {
         if (e.key === "Escape") {
            setModal({ on: false, type: "" });
         }
      });

      return () => {};
   }, []);

   useEffect(() => {
      if (encounter && !characters) {
         const getCharacters = async () => {
            const response = await fetch(`${api}characters`, {
               method: "POST",
               body: JSON.stringify({
                  action: "query",
                  data: { campaignId: encounter.campaignId },
               }),
               headers: {
                  "Content-type": "application/json; charset=UTF-8",
               },
            });
            const encCharacters = await response.json();
            setCharacters(encCharacters);
         };
         getCharacters();
      }

      if (encounter) {
         const getCamapign = async () => {
            const response = await fetch(`${api}campaigns`, {
               method: "POST",
               body: JSON.stringify({
                  action: "query",
                  data: { _id: encounter.campaignId },
               }),
               headers: {
                  "Content-type": "application/json; charset=UTF-8",
               },
            });
            const campaign = await response.json();
            if (campaign.length > 0) setCampaign(campaign[0]);
         };
         getCamapign();

         const getAdventure = async () => {
            const response = await fetch(`${api}adventures`, {
               method: "POST",
               body: JSON.stringify({
                  action: "query",
                  data: { _id: encounter.adventureId },
               }),
               headers: {
                  "Content-type": "application/json; charset=UTF-8",
               },
            });
            const adventure = await response.json();
            if (adventure.length > 0) setAdventure(adventure[0]);
         };
         getAdventure();
      }

      return () => {};
   }, [encounter]);

   useEffect(() => {
      // when the turn is changed to a new combatant, get their full stats and do some stuff
      let combatant = {}
      if (encounter?.initiative?.length > 0) combatant = getCombatantStats(encounter.initiative[encounter.turn]);

      // Turn alerts e.g. spell ends, has condition, is dead
      if (combatant?.concentration && calculateConcentrationRemaining(combatant, encounter.round) === 0) window.alert(`Spell "${combatant.concentration.name}" has ended`) 

      // set the [selected] variable to the current combatant
      if (
         characters &&
         encounter &&
         encounter?.turn !== undefined &&
         encounter?.mode === "running"
      ) {
         // console.log(combatant);
         switch (true) {
            case combatant.enemy == "pc":
               setSelected(
                  characters.filter(
                     (character) => character._id === combatant._id
                  )[0]
               );
               break;

            case combatant.enemy === "monster":
               setSelected(
                  encounter.monsters.filter(
                     (monster) => monster._id === combatant._id
                  )[0]
               );
         }
      }

      return () => {};
   }, [encounter?.turn, characters]);


   const saveCustomMonster = async (monster) => {
      console.log(monster)
      monster = {...monster, sourceBook: 'Custom Edited', campaignMonster: true}
      console.log(monster)
      const DATA = {
         campaignId: encounter.campaignId,
         monster: monster
      }
      const response = await fetch(`${api}campaigns`, {
         method: "POST",
         body: JSON.stringify({
            action: "append monster",
            data: DATA,
         }),
         headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      const reply = await response.json();
      console.log(reply)
      if (reply.confirm.acknowledged && reply.confirm.modifiedCount > 0) {
         setCampaign({...campaign, monsters: [...campaign.monsters, reply.monster]})
      }
   }

   const initiativeItemToFullStats = (initItem) => {
      if (characters) {
         switch (true) {
            default:
               break;
            case initItem.enemy === "monster":
               return encounter.monsters.filter(
                  (f) => f._id === initItem._id
               )[0];
               break;
            case initItem.enemy === "pc":
               return characters.filter((f) => f._id === initItem._id)[0];
         }
      }
   };

   const getCombatantStats = (combatant) => {
      // console.log(combatant._id)
      // console.log(encounter.monsters.map(monster => {return monster._id}).includes(combatant._id))
      if (encounter.monsters.map(monster => {return monster._id}).includes(combatant._id)) {
         // return encounter.monsters.filter(monster => monster._id = combatant._id)[0]
         // console.log(encounter.monsters.filter(monster => monster._id = combatant._id)[0])
         return encounter.monsters.filter(monster => monster._id === combatant._id)[0]
      } 
      if (characters?.map(character => {return character._id}).includes(combatant._id)) {
         // console.log(characters.filter(character => character._id = combatant._id)[0])
         return characters.filter(character => character._id === combatant._id)[0]
      } else return selected
   }

   const addCharacters = async (charactersList) => {
      const response = await fetch(`${api}encounters`, {
         method: "POST",
         body: JSON.stringify({
            action: "editone",
            data: {
               ...encounter,
               initiative: [...encounter.initiative, ...charactersList],
            },
         }),
         headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      const encCharacters = await response.json();
      if (encCharacters.acknowledged && encCharacters.modifiedCount > 0) {
         setEncounter({
            ...encounter,
            initiative: [...encounter.initiative, ...charactersList],
         });
         setModal({ on: false, type: "" });
      }
   };

/** 
* @summary updates the supplied character in the characters collection. It sends the updated character to the characters API, on success it updates the character state
* @param {object} character - {character} is an object containing the full stats of the character
* @param {object} update - update should be an object containing the changed fields in the character e.g. {currentHp: 15, conditions: [...conditions, 'blinded']}
* @return {void} - returns nothing
*/
   const editCharacter = async (character, updated) => {
      // send the character update to the character api (mongodb editone)
      const response = await fetch(`${api}characters`, {
         method: "POST",
         body: JSON.stringify({
            action: "editone",
            data: {
               _id: character._id,
               ...updated,
            },
         }),
         headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      const encCharacters = await response.json();

      // if fetch returns a successful update, update the characters state
      if (encCharacters.acknowledged && encCharacters.modifiedCount > 0) {
         setCharacters([
            ...characters.filter((c) => c._id !== character._id),
            { ...character, ...updated },
         ]);
      }
   };

   const addMonsters = async (monsters) => {
      // identify the collection and document then update the initiative & monsters
      const response = await fetch(`${api}encounters`, {
         method: "POST",
         body: JSON.stringify({
            action: "editone",
            data: {
               _id: encounter._id,
               initiative: [
                  ...encounter.initiative,
                  ...monsters.map((m) => ({
                     _id: m._id,
                     enemy: "monster",
                     source: m.source,
                     init: 0,
                     name: m.name,
                  })),
               ],
               monsters: [
                  ...encounter.monsters,
                  ...monsters.map((m) => ({
                     ...m,
                     enemy: "monster",
                  })),
               ],
            },
         }),
         headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      const encCharacters = await response.json();
      if (encCharacters.acknowledged && encCharacters.modifiedCount > 0) {
         setEncounter({
            ...encounter,
            initiative: [
               ...encounter.initiative,
               ...monsters.map((m) => ({
                  _id: m._id,
                  enemy: "monster",
                  source: m.source,
                  init: 0,
                  name: m.name,
               })),
            ],
            monsters: [
               ...encounter.monsters,
               ...monsters.map((m) => ({
                  ...m,
                  enemy: "monster",
               })),
            ],
         });
         setModal({ on: false, type: "" });
      }
      setModal({ on: false, type: "" }); // close the form window
   };

   const editMonster = async (monster, update) => {
      // {monster} is an object containing the full stats of the monster
      // updated is an object containing the keys and values to update
      // update should be an object containing the changed fields in the monster e.g. {currentHp: 15, conditions: [...conditions, 'blinded']}

      // console.log(monster)
      // console.log(update)

      if (!update) update = monster;
      // console.log(update)

      const updated = { ...monster, ...update };
      // console.log(updated)

      const response = await fetch(`/api/encounters`, {
         method: "POST",
         body: JSON.stringify({
            action: "editone",
            data: {
               _id: encounter._id,
               ...encounter,
               monsters: [
                  ...encounter.monsters.filter((m) => m._id !== monster._id),
                  updated,
               ],
            },
         }),
         headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      const updateStatus = await response.json();
      if (updateStatus.acknowledged && updateStatus.modifiedCount === 1) {
         console.log(updateStatus)
         setEncounter({
            ...encounter,
            monsters: [
               ...encounter.monsters.filter((m) => m._id !== monster._id),
               updated,
            ],
         });
      }
      // setModal({ type: "none", on: false });
   };

   const deleteCombatant = async (combatant) => {
      const response = await fetch(`${api}encounters`, {
         method: "POST",
         body: JSON.stringify({
            action: "editone",
            data: {
               ...encounter,
               initiative: [
                  ...encounter.initiative.filter(
                     (i) => i._id !== combatant._id
                  ),
               ],
               monsters: [
                  ...encounter.monsters.filter((i) => i._id !== combatant._id),
               ],
            },
         }),
         headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      const encCharacters = await response.json();
      if (encCharacters.acknowledged && encCharacters.modifiedCount > 0) {
         setEncounter({
            ...encounter,
            initiative: [
               ...encounter.initiative.filter((i) => i._id !== combatant._id),
            ],
            monsters: [
               ...encounter.monsters.filter((i) => i._id !== combatant._id),
            ],
         });
         setModal({ on: false, type: "" });
      }
   };

   const moveMonsters = async (monsters) => {
      // hook this up the to move monsters component
   }
   
   const saveInitiative = async (initiative) => {
      console.log(initiative);
      // update the encounter with the initiative rolls, then set the encounter to "running"
      const response = await fetch(`${api}encounters`, {
         method: "POST",
         body: JSON.stringify({
            action: "editone",
            data: {
               _id: encounter._id,
               initiative: initiative,
               mode: "running",
               round: 0,
               turn: 0,
            },
         }),
         headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      const newInitiative = await response.json();
      setEncounter({
         ...encounter,
         initiative: initiative,
         mode: "running",
         round: 0,
         turn: 0,
      });
      setModal({ on: false, type: "" });
      setSelected(initiativeItemToFullStats(initiative[0]));
   };

   const editEncounter = async (update) => {
      // update should be an object containing the changed fields in the encounter
      const response = await fetch(`/api/encounters`, {
         method: "POST",
         body: JSON.stringify({
            action: "editone",
            data: {
               _id: encounter._id,
               ...update,
            },
         }),
         headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      const updateStatus = await response.json();
      setEncounter({ ...encounter, ...update });
   };

   const incrementInitiative = (direction) => {
      // console.log(`length: ${encounter.initiative.length} turn: ${encounter.turn}`)
      switch (direction) {
         case "forward":
            if (encounter.turn < encounter.initiative.length - 1) {
               editEncounter({ turn: encounter.turn + 1 });
            } else {
               editEncounter({
                  turn: 0,
                  round: encounter.round + 1,
               });
            }
            break;

         case "back":
            if (encounter.turn > 0) {
               editEncounter({ turn: encounter.turn - 1 });
            } else if (encounter.round > 0) {
               editEncounter({
                  turn: encounter.initiative.length - 1,
                  round: encounter.round - 1,
               });
            }
            break;
      }
   };

   const displayCombatant = (combatant) => {
      // console.log(combatant);
      setSelected(combatant);
   };

   const changeHP = (combatant) => {
      console.log("here i am");
      setTempCombatant(combatant);
      setModal({ on: true, type: "Damage Calculator" });
   };

   const doDamage = (attacker, attack, options) => {
      console.log(attacker);
      console.log(attack);
      setTempCombatant({ attacker, attack, options });
      setModal({ on: true, type: "Attack" });
   };

   // const [ editButton, setEditButton ] = useState({state: 'Edit', icons: 'pi pi-fw pi-wrench'})

   const editEncounterState = () => {
      // console.log(encounterState.state)
      if (encounter.mode == 'editing') {
         setEncounter({...encounter, mode: 'running'})
         setEditButton({state: 'Edit', icons: 'pi pi-fw pi-wrench'})
         setModal({ type: "rollInitiative", on: true })
      } else if (encounter.mode == 'running') {
         setEncounter({...encounter, mode: 'editing'})
         setEditButton({state: 'Run', icons: 'pi pi-fw pi-play'})
      }
   }

   const saveMonster = async (monster) => {
      monster._id = uuidv4() // mot mongodb id format?? https://orangematter.solarwinds.com/2019/12/22/what-is-mongodbs-id-field-and-how-to-use-it/
      console.log(monster)
      console.log(campaign)
      let monsterList = []
      if (campaign.monsters && Array.isArray(campaign.monsters)) {
         console.log('monster array present')
         monsterList = [...campaign.monsters, monster]
      }
      console.log(monsterList)
   };

   const contextValue = {
      campaign,
      encounter,
      setEncounter,
      characters,
      editCharacter,
      setCharacters,
      selected,
      setSelected,
      editMonster,
      modal,
      setModal,
      initiativeItemToFullStats,
      saveMonster,
      getCombatantStats,
      saveCustomMonster
   }


   return (
      <EncounterContext.Provider value={contextValue} >
         <>
            <Nav
               location="encounter"
               user={user}
               encounter={encounter}
               campaign={campaign}
               adventure={adventure}
            ></Nav>

            {/* modal window for popup forms */}
            <Dialog visible={modal.on} onHide={() => setModal({...modal, on: false})} header={modal.type} style={{"width": "100vw", "maxWidth": "45rem"}}>
               {/* Modal content */}
               {/* <div className="modal-content"> */}
                  {/* <span
                     className="close"
                     onClick={() => {
                        setModal({ on: false, type: "none" });
                     }}
                  >
                     &times;
                  </span> */}

                  {modal.type === "Add Character" && (
                     <AddCharacter
                        addCharacters={addCharacters}
                     ></AddCharacter>
                  )}

                  {modal.type === "Add Monster" && (
                     <div className={encounterStyle.monster_select}>
                        <AddMonster></AddMonster>
                     </div>
                  )}

                  {modal.type === "Edit Monster" && (
                     <EditMonsters addMonsters={addMonsters}></EditMonsters>
                  )}

                  {modal.type === "Edit Combatant" &&
                     selected &&
                     selected.enemy === "monster" && (
                        <MonsterForm
                           selected={selected}
                           setSelected={setSelected}
                           update={editMonster}
                           setModal={setModal}
                        ></MonsterForm>
                     )}
                  {modal.type === "Edit Combatant" &&
                     selected &&
                     selected.enemy === "pc" && (
                        <CharacterForm
                           data={selected}
                           update={editMonster}
                        ></CharacterForm>
                     )}

                  {modal.type === "Roll Initiative" && (
                     <RollInitiative
                        saveInitiative={saveInitiative}
                     ></RollInitiative>
                  )}

                  {modal.type === "Damage Calculator" && (
                     <DamageCalculator
                        targets={tempCombatant}
                        editMonster={editMonster}
                        editCharacter={editCharacter}
                        setCampaign={setCampaign}
                     ></DamageCalculator>
                  )}

                  {modal.type === "Attack" && tempCombatant && (
                     <DoAttack
                        tempCombatant={tempCombatant}
                        encounter={encounter}
                        characters={characters}
                     ></DoAttack>
                  )}
               {/* </div> */}
            </Dialog>

            <section>
               {/* the edit list of combatants */}
               {encounter && encounter.mode === "editing" && (
                  <InitiativeList
                     displayItem={(selected) => {
                        setSelected(selected);
                        setModal({ on: true, type: "Edit Combatant" });
                     }}
                     deleteItem={deleteCombatant}
                     initiativeItemToFullStats={initiativeItemToFullStats}
                  ></InitiativeList>
               )}

               {/* running initiative list */}
               {encounter && encounter.mode === "running" && (
                  <EncounterList
                     incrementInitiative={incrementInitiative}
                     editEncounter={editEncounter}
                     displayCombatant={displayCombatant}
                     changeHP={changeHP}
                  ></EncounterList>
               )}

               {selected && (
                  <div className="column-wide">
                     <EncounterDetailsContext.Provider value={{tab, setTab}}>
                        <Encounter_CombatantDetails selected={selected} doDamage={doDamage} />
                     </EncounterDetailsContext.Provider>
                  </div>
               )}
            </section>
         </>
      </EncounterContext.Provider>
   );
};


export default withPageAuthRequired(Encounter);

export async function getServerSideProps(context) {
   const { db } = await connectToDatabase();
   const id = new ObjectId(context.params.id);
   let response = await db.collection("encounters").find({ _id: id }).toArray();
   const encounter = await JSON.parse(JSON.stringify(response));

   return {
      props: { initialEncounter: encounter[0] },
   };
}
