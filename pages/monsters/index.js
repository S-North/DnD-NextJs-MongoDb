import connectToDatabase from "../../utils/mongodb";
import { useState, useEffect, useRef } from "react";
import {
   truncate,
   abilityModifier,
   diceRoll,
   crToXp,
   displayCrAsFraction,
   skillToAbility,
   calculateProficiencyBonus
} from "../../utils/utils";
import { v4 as uuidv4 } from "uuid";
import { FaEdit, FaWindowClose, FaDiceSix } from "react-icons/fa";
import ReactPaginate from "react-paginate"; // https://www.npmjs.com/package/react-paginate
import BasicForm from "../../components/forms/BasicForm";
import monsterManual from "../../utils/monsterManual";
import { importMonster } from "../../utils/import";
import {
   sizes,
   types,
   crRange,
   sensesList,
   abilityList,
   languagesList,
   skillList,
   damageTypes,
   conditions,
   monsterTemplate,
   spellSlotLevels,
} from "../../utils/Forms";
import styles from "../../styles/Monsters.module.css";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Nav from "../../components/Nav";
import { SpellList } from "../spells";

import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import { TieredMenu } from 'primereact/tieredmenu';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

export default withPageAuthRequired(function Monsters({}) {
   const api = "/api/";
   const [selected, setSelected] = useState();
   const [modal, setModal] = useState({ type: "none", on: false });
   const [updated, setUpdated] = useState(0);
   const [ importMessage, setImportMessage ] = useState("")
   const [ importTag, setImportTag ] = useState('nothing')

   const importMonsterManual = async (json) => {
      console.log(json)
      const monsterUpload = [];
      json.monster.forEach((monster) => {
         monsterUpload.push(importMonster({monster: monster, importTag: json.source}));
      });
      console.log(monsterUpload);

      // break the array into groups of 50 and upload to database
      const uploadChunk = async (chunk) => {
         console.log(chunk)

         const response = await fetch(`${api}monsters`, {
            method: "POST",
            body: JSON.stringify({
               action: "addmany",
               data: chunk,
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
         });
         const uploadedMonsters = await response.json();
         console.log(uploadedMonsters);
      }

      const chunkSize = 50;

      for (let i = 0; i < monsterUpload.length; i += chunkSize) {
         const chunk = monsterUpload.slice(i, i + chunkSize);
         await uploadChunk(chunk)
      }
   };

   const editMonster = async (monster) => {
      console.log(monster);
      if (monster._id) {
         const response = await fetch(`${api}monsters`, {
            method: "POST",
            body: JSON.stringify({
               action: "editone",
               data: monster,
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
         });
         const uploadedMonsters = await response.json();
         console.log(uploadedMonsters);
         setUpdated(updated + 1);
         setModal({ on: false, type: "none" });
      } else if (!monster._id) {
         const response = await fetch(`${api}monsters`, {
            method: "POST",
            body: JSON.stringify({
               action: "addone",
               data: monster,
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
         });
         const uploadedMonsters = await response.json();
         console.log(uploadedMonsters);
         setUpdated(updated + 1);
         setModal({ on: false, type: "none" });
      }
   };

   const deleteMonster = async (collection, _id) => {
      const response = await fetch(`${api}monsters`, {
         method: "POST",
         body: JSON.stringify({
            action: "deleteone",
            data: { _id: _id },
         }),
         headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      const uploadedMonsters = await response.json();
      console.log(uploadedMonsters);
      setUpdated(updated + 1);
   };

   const getFile = async (file) => {
      let content
      if (file.type === 'application/json') {
         content = await JSON.parse(await file.text());
      } else {
         setImportMessage('Selected import file is not in JSON FORMAT');
         console.log('Selected import file is not in JSON FORMAT')
         return
      }

      // console.log(content.monster)

      if (content.length === 0) {
         setImportMessage('No records found in data');
         console.log('No records found')
         return
      }

      content.monster.forEach(monster => {
         if (!monster.name) {
            setImportMessage("data is not valid")
            console.log("data is not valid")
         }
      }) 
      // console.log(content)
      if (content.source) setImportTag(content.source)
      importMonsterManual(content)
   }

   return (
      <>
         <Nav location="monsters"></Nav>
         {/* modal window */}
         {modal.on && (
            <div id="modal-window" className="modal">
               {/* Modal content */}
               <div className="modal-content">
                  <span
                     className="close"
                     onClick={() => {
                        setModal({ on: false, type: "none" });
                     }}
                  >
                     &times;
                  </span>
                  {modal.type === "campaigns" && (
                     <>
                        <h3>Edit Campaign</h3>
                        <BasicForm
                           data={selected}
                           updateFnc={updateCampaigns}
                           mongoCollection={modal.type}
                        ></BasicForm>
                     </>
                  )}

                  {modal.view === "edit" && (
                     <>
                        <MonsterForm
                           selected={selected}
                           setSelected={setSelected}
                           update={editMonster}
                        ></MonsterForm>
                     </>
                  )}

                  {modal.view === "view" && (
                     <>
                        <MonsterView id={selected._id}></MonsterView>
                     </>
                  )}
               </div>
            </div>
         )}

         <section>
            <div className="one-column">
               <MonsterList
                  importMonsterManual={importMonsterManual}
                  addMonster={editMonster}
                  deleteMonster={deleteMonster}
                  setSelected={setSelected}
                  editMonster={editMonster}
                  setModal={setModal}
                  updated={updated}
               ></MonsterList>
            </div>

            <div className="column-wide">
               {/* <input type='text' value={importTag} onChange={(e) => setImportTag(e.target.value)}></input> */}
               {/* <button
                  disabled
                  onClick={() => {
                     importMonsterManual();
                  }}
               >
                  Import Monsters
               </button> */}
               
               {importMessage.length > 0 && <p>{importMessage}</p>}
               <FileUpload
                  accept="application/json"
                  customUpload 
                  uploadHandler={(e) => getFile(e.files[0])}
                  emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>}>
               </FileUpload>
            </div>
         </section>
      </>
   );
});

const MonsterList = ({
   addMonster,
   editMonster,
   deleteMonster,
   setSelected,
   setModal,
   updated,
}) => {
   const api = "/api/";
   const [monsters, setMonsters] = useState([]);

   // manage the query state
   const [search, setSearch] = useState("");
   const [minCr, setminCr] = useState(0);
   const [maxCr, setMaxCr] = useState(30);
   const [type, setType] = useState();
   const [sortName, setSortName] = useState("asc");
   const [sortCr, setSortCr] = useState("off");
   const [query, setQuery] = useState({
      minCr: minCr,
      maxCr: maxCr,
      search: search,
   });

   // pagination state
   const [currentItems, setCurrentItems] = useState(null);
   const [pageCount, setPageCount] = useState(0);
   const [itemOffset, setItemOffset] = useState(0);
   const [itemsPerPage, setItemsPerPage] = useState(10);

   useEffect(() => {
      console.log(`updated: ${updated}`);
      if (type === "none") {
         setQuery({});
      }
      const getMonsters = async () => {
         const response = await fetch(`${api}monsters`, {
            method: "POST",
            body: JSON.stringify({
               action: "minilist",
               data: { minCr: minCr, maxCr: maxCr, search: search, type: type },
               sort: { name: sortName, cr: sortCr },
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
         });
         const allMonsters = await response.json();
         setItemOffset(0);
         setMonsters(allMonsters);
      };
      getMonsters();

      return () => {};
   }, [minCr, maxCr, search, sortName, sortCr, type, updated]);

   useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(monsters.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(monsters.length / itemsPerPage));
   }, [itemOffset, itemsPerPage, monsters]);

   // Invoke when user click to request another page.
   const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % monsters.length;
      console.log(
         `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
   };

   const handleSort = (button) => {
      switch (button) {
         case "name":
            console.log("clicked name");
            setSortCr("off");
            if (sortName === "off") setSortName("asc");
            if (sortName === "asc") setSortName("desc");
            if (sortName === "desc") setSortName("asc");
            break;
         case "cr":
            console.log("clicked cr");
            setSortName("off");
            if (sortCr === "off") setSortCr("asc");
            if (sortCr === "asc") setSortCr("desc");
            if (sortCr === "desc") setSortCr("asc");
      }
   };

   const getMonster = async (monster) => {
      console.log(monster);
      const response = await fetch(`${api}monsters`, {
         method: "POST",
         body: JSON.stringify({
            action: "query",
            data: { _id: monster._id },
         }),
         headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      const selectedMonster = await response.json();
      console.log(selectedMonster);
      if (selectedMonster && selectedMonster.length > 0)
         setSelected(selectedMonster[0]);
      setModal({ on: true, view: "edit" });
   };

   const exportToJson = (objectData) => {
      objectData.forEach(monster => {
         const getFullMonster = async () => {
            const response = await fetch(`/api/monsters`, {
               method: "POST",
               body: JSON.stringify({
                  action: "query",
                  data: { _id: id },
               }),
               headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            const fullMonster = await response.json();
            // if (fullMonster && fullMonster.length > 0) setMonster(fullMonster[0]);
         };
      })

      let filename = "monsters.json";
      let contentType = "application/json;charset=utf-8;";
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        var blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(objectData, null, 2)))], { type: contentType });
        navigator.msSaveOrOpenBlob(blob, filename);
      } else {
        var a = document.createElement('a');
        a.download = filename;
        a.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(objectData, null, 2));
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    }

   return (
      <>
         <div className={styles.monster_filter_container}>
            {
               <div style={{'display': 'flex', 'flexDirection': 'column', 'gap': '0.5rem'}}>
               <button
                  className={styles.btn_add_new_monster}
                  onClick={() => {
                     setSelected(monsterTemplate);
                     setModal({ on: true, view: "edit" });
                  }}
               >
                  New Monster
               </button>
               <button
                  className={styles.btn_add_new_monster}
                  onClick={() => exportToJson(monsters)}
                  >Export List</button>
               </div>
            }

            {/* filtering the results */}
            <details open>
               <summary>Filter & Search</summary>
               <div className="flex-row">
                  <input
                     type="text"
                     placeholder="search"
                     value={search}
                     onChange={(e) => setSearch(e.target.value)}
                  ></input>
                  <select
                     value={minCr}
                     onChange={(e) => {
                        setminCr(parseFloat(e.target.value));
                     }}
                     style={{ width: "10ch" }}
                  >
                     {crRange.map((cr) => (
                        <option key={cr} value={cr}>
                           {displayCrAsFraction(cr)}
                        </option>
                     ))}
                  </select>
                  <select
                     value={maxCr}
                     onChange={(e) => {
                        setMaxCr(parseFloat(e.target.value));
                     }}
                     style={{ width: "10ch" }}
                  >
                     {crRange.map((cr) => (
                        <option key={cr} value={cr}>
                           {displayCrAsFraction(cr)}
                        </option>
                     ))}
                  </select>
               </div>
               <div className="flex-row">
                  <select
                     value={type}
                     onChange={(e) => {
                        setType(e.target.value);
                     }}
                     style={{}}
                  >
                     {["none", ...types].map((type) => (
                        <option key={type} value={type}>
                           {type}
                        </option>
                     ))}
                  </select>
                  <input
                     type="button"
                     value={sortName}
                     onClick={(e) => {
                        handleSort("name");
                     }}
                     style={
                        sortName !== "off"
                           ? {
                                width: "10ch",
                                backgroundColor: "green",
                                color: "white",
                             }
                           : {
                                width: "10ch",
                                backgroundColor: "grey",
                                color: "white",
                             }
                     }
                     title={sortName}
                  />
                  <input
                     type="button"
                     value={sortCr}
                     onClick={(e) => {
                        handleSort("cr");
                     }}
                     style={
                        sortCr !== "off"
                           ? {
                                width: "10ch",
                                backgroundColor: "green",
                                color: "white",
                             }
                           : {
                                width: "10ch",
                                backgroundColor: "grey",
                                color: "white",
                             }
                     }
                     title={sortCr}
                  />
               </div>
            </details>
         </div>

         <div className={styles.item_list}>
            {currentItems &&
               currentItems.map((monster) => (
                  <div key={monster._id} className={styles.list_item}>
                     <div
                        key={monster.id}
                        className={styles.item_text}
                        onClick={() => {
                           setSelected(monster);
                           setModal({ on: true, view: "view" });
                        }}
                     >
                        <div className="link">
                           <h2>{monster.name}</h2>
                           <div style={{ display: "flex" }}>
                              <p>
                                 <strong>CR: {monster.cr} - </strong>
                              </p>
                              <em>
                                 {monster.size} {monster.type}
                              </em>
                           </div>
                        </div>
                     </div>
                     <div className="actions">
                        {deleteMonster && (
                           <FaWindowClose
                              style={{ cursor: "pointer" }}
                              color="red"
                              onClick={() => {
                                 deleteMonster("monsters", monster._id);
                              }}
                           />
                        )}

                        {editMonster && (
                           <FaEdit
                              style={{ cursor: "pointer" }}
                              color="grey"
                              onClick={() => {
                                 getMonster(monster);
                              }}
                           />
                        )}
                     </div>
                  </div>
               ))}
         </div>

         {monsters && monsters.length > itemsPerPage && (
            <div id="pagination-controls">
               <ReactPaginate
                  breakLabel="..."
                  nextLabel=" >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={2}
                  pageCount={pageCount}
                  previousLabel="< "
                  renderOnZeroPageCount={null}
                  activeClassName="active-page"
               />
            </div>
         )}
         {/* <div className="flex-row">
          <button className="blue" onClick={() => {prev()}}>Prev</button>
          <button className="blue" onClick={() => {next()}}>Next</button>
      </div> */}
      </>
   );
};

const MonsterView = ({ id }) => {
   const [monster, setMonster] = useState();

   useEffect(() => {
      const getFullMonster = async () => {
         const response = await fetch(`/api/monsters`, {
            method: "POST",
            body: JSON.stringify({
               action: "query",
               data: { _id: id },
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" },
         });
         const fullMonster = await response.json();
         if (fullMonster && fullMonster.length > 0) setMonster(fullMonster[0]);
      };
      if (id) getFullMonster();

      return () => {};
   }, [id]);

   return (
      <>
         {monster && (
            <>
               <div className="flex-row">
                  {monster.picture_url && (
                     <img src={monster.picture_url} width="50px"></img>
                  )}
                  <h3>{`${monster.name}`}</h3>
                  <h2>{`( CR ${displayCrAsFraction(monster.cr)} ) XP: ${
                     monster.xp
                  }`}</h2>
               </div>

               <div
                  className="flex-row"
                  style={{
                     backgroundColor: "rgba(255,255,255,0.7)",
                     padding: "0.5rem",
                     marginBottom: "1ch",
                  }}
               >
                  <em>{`${monster.size} ${monster.type}. Speed: `}</em>
               </div>

               <div
                  className="flex-row"
                  style={{
                     backgroundColor: "rgba(255,255,255,0.7)",
                     padding: "0.5rem",
                     marginBottom: "1ch",
                  }}
               >
                  <div>
                     <h2>{"STR"}</h2>
                     <p>{monster.str}</p>
                     <p>{abilityModifier(monster.str)}</p>
                  </div>
                  <div>
                     <h2>{"DEX"}</h2>
                     <p>{monster.dex}</p>
                     <p>{abilityModifier(monster.dex)}</p>
                  </div>
                  <div>
                     <h2>{"CON"}</h2>
                     <p>{monster.con}</p>
                     <p>{abilityModifier(monster.con)}</p>
                  </div>
                  <div>
                     <h2>{"INT"}</h2>
                     <p>{monster.int}</p>
                     <p>{abilityModifier(monster.int)}</p>
                  </div>
                  <div>
                     <h2>{"WIS"}</h2>
                     <p>{monster.wis}</p>
                     <p>{abilityModifier(monster.wis)}</p>
                  </div>
                  <div>
                     <h2>{"CHA"}</h2>
                     <p>{monster.cha}</p>
                     <p>{abilityModifier(monster.cha)}</p>
                  </div>
               </div>

               <div
                  style={{
                     backgroundColor: "rgba(255,255,255,0.7)",
                     padding: "0.5rem",
                     marginBottom: "1ch",
                  }}
               >
                  <h2>Traits</h2>
                  {monster.traits &&
                     monster.traits.map((trait) => (
                        <div>
                           <h2>{trait.name}</h2>
                           <p>{trait.description}</p>
                        </div>
                     ))}
               </div>

               <div
                  style={{
                     backgroundColor: "rgba(255,255,255,0.7)",
                     padding: "0.5rem",
                     marginBottom: "1ch",
                  }}
               >
                  <h2>Actions</h2>
                  {monster.actions &&
                     monster.actions.map((action) => (
                        <>
                           <div>
                              <h2>{action.name}</h2>
                              <p>{action.description}</p>
                           </div>
                        </>
                     ))}
               </div>

               <div
                  style={{
                     backgroundColor: "rgba(255,255,255,0.7)",
                     padding: "0.5rem",
                     marginBottom: "1ch",
                  }}
               >
                  <h2>Description</h2>
                  <p>{monster.description}</p>
               </div>
            </>
         )}
      </>
   );
};

const MonsterForm = ({ selected, setSelected, update }) => {
   const api = "/api/";
   const [modal, setModal] = useState({ on: false, view: "" });
   const [tabs, setTabs] = useState("details");
   const [item, setItem] = useState();
   const [trait, setTrait] = useState();
   const [action, setAction] = useState();
   const [spells, setSpells] = useState();
   const actionTemplate = {
      name: "",
      description: "",
      attack: 0,
      damage1: { enabled: false },
      damage2: { enabled: false },
      damage3: { enabled: false },
      dc: {},
   };
   const [legendary, setLegendary] = useState();
   const [monsters, setMonsters] = useState([]);

   // new skills button
   const skillsMenu = useRef(null);
   const menuModel = () => {
      const currentSkills = []
      selected.skills.forEach(skill => {
         currentSkills.push(skill.name)
      })
      console.log(currentSkills)
      const items = skillList.filter(skill => {return !currentSkills.includes(skill)})
      console.log(items)
      return items.map(item => (
         {
            label: item,
            command: (e) => {
               console.log(item);
               setSelected({...selected, skills: [...selected.skills, {name: item, level: 'none', bonus: abilityModifier(selected[skillToAbility(item)])}]}),
               skillsMenu.current.toggle(e)}

         }
      ))
   }

   useEffect(() => {
      if (selected) setItem(selected);
      if (selected?.spells) {
         const getSpells = async () => {
            const response = await fetch(`${api}spells`, {
               method: "POST",
               body: JSON.stringify({
                  action: "monster",
                  data: { name: { $in: selected.spells } },
                  sort: {},
               }),
               headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            const spellList = await response.json();
            // setItemOffset(0)
            setSpells(spellList);
         };
         getSpells();
      }

      return () => {};
   }, [selected]);

   const editTrait = (trait) => {
      console.log(trait);
      trait._id &&
         setItem({
            ...item,
            traits: [...item.traits.filter((f) => f._id !== trait._id), trait],
         });
      !trait._id &&
         setItem({
            ...item,
            traits: [...item.traits, { ...trait, _id: uuidv4() }],
         });
      setModal({ on: false, view: "" }); // close the action form
   };

   const deleteTrait = (traitId) => {
      setSelected({
         ...selected,
         traits: [...selected.traits.filter((f) => f._id !== traitId)],
      });
   };

   const addAction = () => {
      console.log("add action");
   };

   const editAction = async (action) => {
      console.log(action);
      const damages = {};
      // add damages if enabled, otherwise just set to disabled with no keys
      if (action.damage1.enabled) {
         damages.damage1 = action.damage1;
      } else damages.damage1 = { enabled: false };
      if (action.damage2.enabled) {
         damages.damage2 = action.damage2;
      } else damages.damage2 = { enabled: false };
      if (action.damage3.enabled) {
         damages.damage3 = action.damage3;
      } else damages.damage3 = { enabled: false };

      console.log(damages);
      // if there's an id then do an edit, otherwise add a new item to actions with new generated id
      action._id &&
         setItem({
            ...item,
            actions: [
               ...item.actions.filter((f) => f._id !== action._id),
               { ...action, ...damages },
            ],
         });
      !action._id &&
         setItem({
            ...item,
            actions: [
               ...item.actions,
               { ...action, _id: uuidv4(), ...damages },
            ],
         });
      setModal({ on: false, view: "" }); // close the action form
   };

   const deleteAction = (actionId) => {
      setSelected({
         ...selected,
         actions: [...selected.actions.filter((f) => f._id !== actionId)],
      });
   };

   const editLegendary = (legendary) => {
      console.log("edit legendary");
   };

   const setSpellslots = (level, value) => {
      let spellslots = item.spellSlots;
      if (spellslots === undefined) spellslots = [];
      spellslots[level] = parseInt(value);
      setItem({ ...item, spellSlots: spellslots });
   };

   const addSpell = (spell) => {
      console.log(spell);
      if (item?.spells) {
         setItem({
            ...item,
            spells: [...item.spells, spell.name.toLowerCase()],
         });
         setSpells([...spells, spell]);
      } else {
         setItem({ ...item, spells: [spell.name.toLowerCase()] });
         setSpells([spell]);
      }
   };

   const deleteSpell = (spell) => {
      setItem({
         ...item,
         spells: item.spells.filter((f) => {
            return f !== spell.toLowerCase();
         }),
      });
      setSpells([
         ...spells.filter((f) => {
            return f.name !== spell;
         }),
      ]);
   };

   const updateSkillLevel = (name, level) => {
      let skill = selected.skills.filter(item => {return item.name === name})[0]
      let bonus = abilityModifier(selected[skillToAbility(name)])
      switch (level) {
         case 'none':
            break
         case 'proficient':
            bonus += calculateProficiencyBonus(selected.cr)
            break
         case 'expert':
            bonus += (calculateProficiencyBonus(selected.cr) * 2)
            break
      }

      const newSkillList = [...selected.skills.filter(item => item.name !== name), {...skill, level, bonus}]
      setSelected({...selected, skills: newSkillList})
   }

   const updateSkillBonus = (skill, value) => {
      setSelected({...selected, skills: [...selected.skills.filter(item => {return skill.name !== item.name}), {...skill, bonus: value}]})
   }

   const deleteSkill = (skill) => {
      setSelected({...selected, skills: [...selected.skills.filter(item => {return skill.name !== item.name})]})
   }

   return (
      <>
         {/* modal window */}
         {modal.on && (
            <div id="modal-window" className="modal">
               {/* Modal content */}
               <div className="modal-content">
                  <span
                     className="close"
                     onClick={() => {
                        setModal({ on: false, type: "" });
                     }}
                  >
                     &times;
                  </span>

                  {modal.view === "trait" && (
                     <form
                        className={styles.action_form}
                        id="action-form"
                        onSubmit={(e) => {
                           e.preventDefault();
                           editTrait(trait);
                        }}
                     >
                        <h2>Trait Form</h2>
                        <input
                           type="text"
                           value={trait.name}
                           onChange={(e) =>
                              setTrait({ ...trait, name: e.target.value })
                           }
                        ></input>
                        <textarea
                           rows="10"
                           type="text"
                           value={trait.description}
                           onChange={(e) =>
                              setTrait({
                                 ...trait,
                                 description: e.target.value,
                              })
                           }
                        ></textarea>
                        <button className={styles.action_save} type="submit">
                           Save
                        </button>
                     </form>
                  )}

                  {modal.view === "action" && (
                     <>
                        <h2>Action Form</h2>
                        <form
                           className={styles.action_form}
                           id="action-form"
                           onSubmit={(e) => {
                              e.preventDefault();
                              editAction(action);
                           }}
                        >
                           <input
                              required
                              className={styles.action_name}
                              type="text"
                              value={action.name}
                              onChange={(e) => {
                                 setAction({ ...action, name: e.target.value });
                              }}
                           ></input>
                           <textarea
                              className={styles.action_description}
                              rows="10"
                              value={action.description}
                              onChange={(e) => {
                                 setAction({
                                    ...action,
                                    description: e.target.value,
                                 });
                              }}
                           ></textarea>
                           {/* <input type='checkbox' checked={action.attackEnabled} onChange={(e) => {setAction({...action, attackEnabled: !attackEnabled})}}></input> */}
                           <label className={styles.action_lblToHit}>
                              To Hit
                           </label>
                           <input
                              className={styles.action_chkToHit}
                              type="checkbox"
                           ></input>
                           <input
                              className={styles.action_toHit}
                              type="number"
                              min="0"
                              id="to-hit"
                              value={action.attack}
                              onChange={(e) => {
                                 setAction({
                                    ...action,
                                    attack: e.target.value,
                                 });
                              }}
                           ></input>

                           {action.damage1 && (
                              <>
                                 <label className={styles.action_dmg1Label}>
                                    Damage 1
                                 </label>
                                 <input
                                    className={styles.action_dmg1Chk}
                                    type="checkbox"
                                    checked={action.damage1.enabled}
                                    onChange={(e) => {
                                       setAction({
                                          ...action,
                                          damage1: {
                                             ...action.damage1,
                                             enabled: !action.damage1.enabled,
                                          },
                                       });
                                    }}
                                 ></input>
                                 <input
                                    className={styles.action_dmg1Option1}
                                    disabled={!action.damage1.enabled}
                                    type="number"
                                    min="1"
                                    required
                                    value={action.damage1.hdDice}
                                    onChange={(e) => {
                                       setAction({
                                          ...action,
                                          damage1: {
                                             ...action.damage1,
                                             hdDice: parseInt(e.target.value),
                                          },
                                       });
                                    }}
                                 ></input>
                                 <input
                                    className={styles.action_dmg1Option2}
                                    disabled={!action.damage1.enabled}
                                    type="number"
                                    min="1"
                                    required
                                    value={action.damage1.hdSides}
                                    onChange={(e) => {
                                       setAction({
                                          ...action,
                                          damage1: {
                                             ...action.damage1,
                                             hdSides: parseInt(e.target.value),
                                          },
                                       });
                                    }}
                                 ></input>
                                 <input
                                    className={styles.action_dmg1Option3}
                                    disabled={!action.damage1.enabled}
                                    type="number"
                                    min="0"
                                    required
                                    value={action.damage1.hdBonus}
                                    onChange={(e) => {
                                       setAction({
                                          ...action,
                                          damage1: {
                                             ...action.damage1,
                                             hdBonus: parseInt(e.target.value),
                                          },
                                       });
                                    }}
                                 ></input>
                                 <select
                                    className={styles.action_dmg1Option4}
                                    disabled={!action.damage1.enabled}
                                    value={action.damage1.type}
                                    onChange={(e) => {
                                       setAction({
                                          ...action,
                                          damage1: {
                                             ...action.damage1,
                                             type: e.target.value,
                                          },
                                       });
                                    }}
                                 >
                                    {damageTypes.map((type, i) => (
                                       <option key={i} value={type}>
                                          {type}
                                       </option>
                                    ))}
                                 </select>
                              </>
                           )}

                           {action.damage2 && (
                              <>
                                 <label className={styles.action_dmg2Label}>
                                    Damage 2
                                 </label>
                                 <input
                                    type="checkbox"
                                    className={styles.action_dmg2Chk}
                                    checked={action.damage2.enabled}
                                    onChange={(e) => {
                                       setAction({
                                          ...action,
                                          damage2: {
                                             ...action.damage2,
                                             enabled: !action.damage2.enabled,
                                          },
                                       });
                                    }}
                                 ></input>
                                 <input
                                    className={styles.action_dmg2Option1}
                                    disabled={!action.damage2.enabled}
                                    type="number"
                                    min="1"
                                    required
                                    value={action.damage2.hdDice}
                                    onChange={(e) => {
                                       setAction({
                                          ...action,
                                          damage2: {
                                             ...action.damage2,
                                             hdDice: parseInt(e.target.value),
                                          },
                                       });
                                    }}
                                 ></input>
                                 <input
                                    className={styles.action_dmg2Option2}
                                    disabled={!action.damage2.enabled}
                                    type="number"
                                    min="1"
                                    required
                                    value={action.damage2.hdSides}
                                    onChange={(e) => {
                                       setAction({
                                          ...action,
                                          damage2: {
                                             ...action.damage2,
                                             hdSides: parseInt(e.target.value),
                                          },
                                       });
                                    }}
                                 ></input>
                                 <input
                                    className={styles.action_dmg2Option3}
                                    disabled={!action.damage2.enabled}
                                    type="number"
                                    min="0"
                                    required
                                    value={action.damage2.hdBonus}
                                    onChange={(e) => {
                                       setAction({
                                          ...action,
                                          damage2: {
                                             ...action.damage2,
                                             hdBonus: parseInt(e.target.value),
                                          },
                                       });
                                    }}
                                 ></input>
                                 <select
                                    className={styles.action_dmg2Option4}
                                    disabled={!action.damage2.enabled}
                                    value={action.damage2.type}
                                    onChange={(e) => {
                                       setAction({
                                          ...action,
                                          damage2: {
                                             ...action.damage2,
                                             type: e.target.value,
                                          },
                                       });
                                    }}
                                 >
                                    {damageTypes.map((type, i) => (
                                       <option key={i} value={type}>
                                          {type}
                                       </option>
                                    ))}
                                 </select>
                              </>
                           )}

                           {action.damage3 && (
                              <>
                                 <label className={styles.action_dmg3Label}>
                                    Damage 3
                                 </label>
                                 <input
                                    className={styles.action_dmg3Chk}
                                    type="checkbox"
                                    checked={action.damage3.enabled}
                                 ></input>
                                 <input
                                    className={styles.action_dmg3Option1}
                                    disabled={!action.damage3.enabled}
                                    type="number"
                                    min="1"
                                    required
                                    value={action.damage3.hdDice}
                                    onChange={(e) => {
                                       setAction({
                                          ...action,
                                          damage3: {
                                             ...action.damage3,
                                             hdDice: parseInt(e.target.value),
                                          },
                                       });
                                    }}
                                 ></input>
                                 <input
                                    className={styles.action_dmg3Option2}
                                    disabled={!action.damage3.enabled}
                                    type="number"
                                    min="1"
                                    required
                                    value={action.damage3.hdSides}
                                    onChange={(e) => {
                                       setAction({
                                          ...action,
                                          damage3: {
                                             ...action.damage3,
                                             hdSides: parseInt(e.target.value),
                                          },
                                       });
                                    }}
                                 ></input>
                                 <input
                                    className={styles.action_dmg3Option3}
                                    disabled={!action.damage3.enabled}
                                    type="number"
                                    min="0"
                                    required
                                    value={action.damage3.hdBonus}
                                    onChange={(e) => {
                                       setAction({
                                          ...action,
                                          damage3: {
                                             ...action.damage3,
                                             hdBonus: parseInt(e.target.value),
                                          },
                                       });
                                    }}
                                 ></input>
                                 <select
                                    className={styles.action_dmg3Option4}
                                    disabled={!action.damage3.enabled}
                                    value={action.damage3.type}
                                    onChange={(e) => {
                                       setAction({
                                          ...action,
                                          damage3: {
                                             ...action.damage3,
                                             type: e.target.value,
                                          },
                                       });
                                    }}
                                 >
                                    {damageTypes.map((type, i) => (
                                       <option key={i} value={type}>
                                          {type}
                                       </option>
                                    ))}
                                 </select>
                              </>
                           )}

                           <button className={styles.action_save} type="submit">
                              Save
                           </button>
                        </form>
                     </>
                  )}
                  {modal.view === "spell" && (
                     <SpellList setSelected={addSpell} setModal={setModal} />
                  )}
                  {modal.view === "legendary" && (
                     <>
                        <h2>Legendary Form</h2>
                        <input type="text" value={item.name}></input>
                        <textarea
                           type="text"
                           rows={10}
                           value={item.text}
                        ></textarea>
                        <input type="number" value={item.cost}></input>
                        <input type="number" value={item.actions}></input>
                     </>
                  )}
               </div>
            </div>
         )}

         {selected && (
            <form
               onSubmit={(e) => {
                  e.preventDefault();
                  update(item);
               }}
            >
               {/* submit button */}
               <div className="flex-row">
                  <button className="green" type="submit">
                     Save
                  </button>
               </div>{" "}
               <br />

               {/* tabs for sections */}
               <div id="tabs" className="flex-row">
                  <button
                     type="button"
                     className="tab"
                     style={
                        tabs === "details" ? { backgroundColor: "#babdd4" } : {}
                     }
                     onClick={() => {
                        setTabs("details");
                     }}
                  >
                     Details
                  </button>
                  <button
                     type="button"
                     className="tab"
                     style={
                        tabs === "skills" ? { backgroundColor: "#babdd4" } : {}
                     }
                     onClick={() => {
                        setTabs("skills");
                     }}
                  >
                     skills
                  </button>
                  <button
                     type="button"
                     className="tab"
                     style={
                        tabs === "resist" ? { backgroundColor: "#babdd4" } : {}
                     }
                     onClick={() => {
                        setTabs("resist");
                     }}
                  >
                     resistance
                  </button>
                  <button
                     type="button"
                     className="tab"
                     style={
                        tabs === "traits" ? { backgroundColor: "#babdd4" } : {}
                     }
                     onClick={() => {
                        setTabs("traits");
                     }}
                  >
                     traits
                  </button>
                  <button
                     type="button"
                     className="tab"
                     style={
                        tabs === "actions" ? { backgroundColor: "#babdd4" } : {}
                     }
                     onClick={() => {
                        setTabs("actions");
                     }}
                  >
                     actions
                  </button>
                  <button
                     type="button"
                     className="tab"
                     style={
                        tabs === "legend" ? { backgroundColor: "#babdd4" } : {}
                     }
                     onClick={() => {
                        setTabs("legend");
                     }}
                  >
                     legendary
                  </button>
                  <button
                     type="button"
                     className="tab"
                     style={
                        tabs === "spells" ? { backgroundColor: "#babdd4" } : {}
                     }
                     onClick={() => {
                        setTabs("spells");
                     }}
                  >
                     spells
                  </button>
               </div>

               <div
                  style={
                     tabs === "details"
                        ? { display: "block" }
                        : { display: "none" }
                  }
               >
                  <label htmlFor="name">Name:</label>
                  <input
                     id="name"
                     type="text"
                     required
                     placeholder="name"
                     value={selected.name}
                     onChange={(e) => {
                        setSelected({ ...selected, name: e.target.value });
                     }}
                  />
                  <label htmlFor="picture">Picture:</label>
                  <input
                     id="picture"
                     type="text"
                     placeholder="picture url"
                     value={selected.picture_url}
                     onChange={(e) => {
                        setSelected({
                           ...selected,
                           picture_url: e.target.value,
                        });
                     }}
                  />

                  <div className="flex-row">
                     <label htmlFor="type">Size:</label>
                     <select
                        name="size"
                        id="size"
                        value={selected.size}
                        onChange={(e) => {
                           setSelected({ ...selected, size: e.target.value });
                        }}
                     >
                        {sizes.map((o) => (
                           <option key={o} value={o}>
                              {o}
                           </option>
                        ))}
                     </select>

                     <label htmlFor="type">Type:</label>
                     <select
                        name="type"
                        id=""
                        value={selected.type}
                        onChange={(e) => {
                           setSelected({ ...selected, type: e.target.value });
                        }}
                     >
                        {types.map((o) => (
                           <option key={o} value={o}>
                              {o}
                           </option>
                        ))}
                     </select>

                     <label htmlFor="ac">AC:</label>
                     <input
                        id="ac"
                        type="number"
                        placeholder="ac"
                        required
                        value={selected.ac}
                        onChange={(e) => {
                           setSelected({ ...selected, ac: e.target.value });
                        }}
                     />
                  </div>

                  <label htmlFor="descr">Description: </label>
                  <textarea
                     id="descr"
                     rows="10"
                     type="text"
                     placeholder="description"
                     value={selected.description}
                     onChange={(e) => {
                        setSelected({
                           ...selected,
                           description: e.target.value,
                        });
                     }}
                  />

                  {selected && selected.hitDice && (
                     <div className="flex-row">
                        <label htmlFor="dice">Hit Dice:</label>
                        <input
                           id="dice"
                           type="number"
                           placeholder="dice"
                           required
                           value={selected.hitDice.hdDice}
                           onChange={(e) => {
                              setSelected({
                                 ...selected,
                                 hitDice: {
                                    ...selected.hitDice,
                                    hdDice: e.target.value,
                                 },
                              });
                           }}
                        />

                        <label htmlFor="sides"> d </label>
                        <input
                           id="sides"
                           type="number"
                           placeholder="sides"
                           required
                           value={selected.hitDice.hdSides}
                           onChange={(e) => {
                              setSelected({
                                 ...selected,
                                 hitDice: {
                                    ...selected.hitDice,
                                    hdSides: e.target.value,
                                 },
                              });
                           }}
                        />

                        <label htmlFor="bonus"> + </label>
                        <input
                           id="bonus"
                           type="number"
                           placeholder="bonus"
                           required
                           value={selected.hitDice.hdBonus}
                           onChange={(e) => {
                              setSelected({
                                 ...selected,
                                 hitDice: {
                                    ...selected.hitDice,
                                    hdBonus: e.target.value,
                                 },
                              });
                           }}
                        />

                        <FaDiceSix
                           className="tooltip"
                           title="Roll hitpoints"
                           color="green"
                           style={{ width: "20ch", height: "30px" }}
                           onClick={() => {
                              setSelected({
                                 ...selected,
                                 maxHp: diceRoll(
                                    selected.hitDice.hdDice,
                                    selected.hitDice.hdSides,
                                    selected.hitDice.hdBonus
                                 )[2],
                              });
                           }}
                        ></FaDiceSix>
                        <label htmlFor="hp">HP:</label>
                        <input
                           id="maxHp"
                           type="number"
                           placeholder="HP"
                           required
                           value={selected.maxHp}
                           onChange={(e) => {
                              setSelected({
                                 ...selected,
                                 maxHp: parseInt(e.target.value),
                              });
                           }}
                        />
                     </div>
                  )}

                  <div className="flex-row">
							<label htmlFor="walking">Speed:</label>
							{selected?.speed?.map((speed, index) => (
								<input key={index} type="text" value={speed} onChange={(e) => {
									const el = selected.speed;
									el[index] = e.target.value;
									setSelected({...selected, speed: el})}}></input>
							))}
							<button onClick={(e) => {e.preventDefault(), setSelected({...selected, speed: [...selected.speed, ""]})}}>+</button>
                     
						</div>
                  <div className="flex-row">
                     <label htmlFor="cr">Challenge:</label>
                     <select
                        name="cr"
                        id=""
                        value={selected.cr}
                        onChange={(e) => {
                           setSelected({
                              ...selected,
                              cr: parseFloat(e.target.value),
                              xp: crToXp(e.target.value),
                           });
                        }}
                     >
                        {crRange.map((o) => (
                           <option key={o} value={o}>
                              {o}
                           </option>
                        ))}
                     </select>

                     <label htmlFor="xp">XP:</label>
                     <input
                        id="xp"
                        type="number"
                        placeholder="xp"
                        required
                        value={selected.xp}
                        onChange={(e) => {
                           setSelected({
                              ...selected,
                              xp: parseInt(e.target.value),
                           });
                        }}
                     />
                  </div>

                  <div className="flex-checkboxes">
                     {sensesList.map((c) => (
                        <div key={c} className="checkboxs">
                           <input
                              title={c}
                              style={{ cursor: "pointer" }}
                              type="checkbox"
                              name={c}
                              checked={selected.senses.includes(c)}
                              value={c}
                              onChange={(e) => {
                                 selected.senses.includes(e.target.value)
                                    ? setSelected({
                                         ...selected,
                                         senses: [
                                            ...selected.senses.filter((f) => {
                                               return f !== e.target.value;
                                            }),
                                         ],
                                      })
                                    : setSelected({
                                         ...selected,
                                         senses: [
                                            ...selected.senses,
                                            e.target.value,
                                         ],
                                      });
                              }}
                           />
                           <label htmlFor={c}>{c}</label>
                        </div>
                     ))}
                  </div>

                  <div className="flex-row">
                     <div className="ability-box">
                        <label>Str</label>
                        <input
                           placeholder="str"
                           type="number"
                           required
                           value={selected.str}
                           onChange={(e) => {
                              setSelected({
                                 ...selected,
                                 str: parseInt(e.target.value),
                              });
                           }}
                        />
                        <p>
                           {selected.str > 11
                              ? `+ ${abilityModifier(selected.str)}`
                              : abilityModifier(selected.str)}
                        </p>
                     </div>

                     <div className="ability-box">
                        <label>Dex</label>
                        <input
                           placeholder="dex"
                           type="number"
                           required
                           value={selected.dex}
                           onChange={(e) => {
                              setSelected({
                                 ...selected,
                                 dex: parseInt(e.target.value),
                              });
                           }}
                        />
                        <p>
                           {selected.dex > 11
                              ? `+ ${abilityModifier(selected.dex)}`
                              : abilityModifier(selected.dex)}
                        </p>
                     </div>

                     <div className="ability-box">
                        <label>Con</label>
                        <input
                           placeholder="con"
                           type="number"
                           required
                           value={selected.con}
                           onChange={(e) => {
                              setSelected({
                                 ...selected,
                                 con: parseInt(e.target.value),
                              });
                           }}
                        />
                        <p>
                           {selected.con > 11
                              ? `+ ${abilityModifier(selected.con)}`
                              : abilityModifier(selected.con)}
                        </p>
                     </div>

                     <div className="ability-box">
                        <label>Int</label>
                        <input
                           placeholder="int"
                           type="number"
                           required
                           value={selected.int}
                           onChange={(e) => {
                              setSelected({
                                 ...selected,
                                 int: parseInt(e.target.value),
                              });
                           }}
                        />
                        <p>
                           {selected.int > 11
                              ? `+ ${abilityModifier(selected.int)}`
                              : abilityModifier(selected.int)}
                        </p>
                     </div>

                     <div className="ability-box">
                        <label>Wis</label>
                        <input
                           placeholder="wis"
                           type="number"
                           required
                           value={selected.wis}
                           onChange={(e) => {
                              setSelected({
                                 ...selected,
                                 wis: parseInt(e.target.value),
                              });
                           }}
                        />
                        <p>
                           {selected.wis > 11
                              ? `+ ${abilityModifier(selected.wis)}`
                              : abilityModifier(selected.wis)}
                        </p>
                     </div>

                     <div className="ability-box">
                        <label>Char</label>
                        <input
                           placeholder="cha"
                           type="number"
                           required
                           value={selected.cha}
                           onChange={(e) => {
                              setSelected({
                                 ...selected,
                                 cha: parseInt(e.target.value),
                              });
                           }}
                        />
                        <p>
                           {selected.cha > 11
                              ? `+ ${abilityModifier(selected.cha)}`
                              : abilityModifier(selected.cha)}
                        </p>
                     </div>
                  </div>

                  <hr />
                  <h2>Saves</h2>
                  <br />
                  <div className="flex-checkboxes">
                     {abilityList.map((c) => (
                        <div key={c} className="checkboxs">
                           <input
                              title={c}
                              style={{ cursor: "pointer" }}
                              type="checkbox"
                              name={c}
                              checked={selected.saves.includes(c)}
                              value={c}
                              onChange={(e) => {
                                 selected.saves.includes(e.target.value)
                                    ? setSelected({
                                         ...selected,
                                         saves: [
                                            ...selected.saves.filter((f) => {
                                               return f !== e.target.value;
                                            }),
                                         ],
                                      })
                                    : setSelected({
                                         ...selected,
                                         saves: [
                                            ...selected.saves,
                                            e.target.value,
                                         ],
                                      });
                              }}
                           />
                           <label htmlFor={c}>{c}</label>
                        </div>
                     ))}
                  </div>
               </div>
               <div
                  style={
                     tabs === "skills"
                        ? { display: "block" }
                        : { display: "none" }
                  }
               >
                  <hr />
                  <h2>Languages</h2>
                  <br />
                  <div className="flex-checkboxes">
                     {languagesList.map((c) => (
                        <div key={c} className="checkboxs">
                           <label>
                           <input
                              title={c}
                              style={{ cursor: "pointer" }}
                              type="checkbox"
                              name={c}
                              checked={selected.languages.includes(c)}
                              value={c}
                              onChange={(e) => {
                                 selected.languages.includes(e.target.value)
                                    ? setSelected({
                                         ...selected,
                                         languages: [
                                            ...selected.languages.filter(
                                               (f) => {
                                                  return f !== e.target.value;
                                               }
                                            ),
                                         ],
                                      })
                                    : setSelected({
                                         ...selected,
                                         languages: [
                                            ...selected.languages,
                                            e.target.value,
                                         ],
                                      });
                              }}
                           />
                           {c}</label>
                        </div>
                     ))}
                  </div>

                  <hr />
                  <div className="">
                     {/* add new skill menu button */}
                     <TieredMenu model={menuModel()} popup ref={skillsMenu} id="overlay_tmenu" />
                     <Button label="New Skill" icon="pi pi-bars" onClick={(event) => {event.preventDefault(); skillsMenu.current.toggle(event)}} aria-haspopup aria-controls="overlay_tmenu" className="p-button-sm"/>
                     
                     {/* list of skills */}
                     <div className={styles.skillList}>
                        {selected.skills.sort((a,b) => (a.name > b.name)).map((skill) => (
                           <div key={skill.name} className={styles.skillRow}>
                              <div style={{"minWidth": "8rem"}}><strong>{skill.name}</strong></div>

                              <label>
                                 <input type='radio' name={skill.name} id='none' checked={skill.level === 'none'} onChange={(e) => updateSkillLevel(skill.name, e.target.id)}></input>
                              none</label>

                              <label>
                                 <input type='radio' name={skill.name} id='proficient' checked={skill.level === 'proficient'} onChange={(e) => updateSkillLevel(skill.name, e.target.id)}></input>
                              proficient</label>

                              <label>
                                 <input type='radio' name={skill.name} id='expert' checked={skill.level === 'expert'} onChange={(e) => updateSkillLevel(skill.name, e.target.id)}></input>
                              expert</label>

                              <label>
                                 <input type='radio' name={skill.name} id='other' checked={skill.level === 'other'} onChange={(e) => updateSkillLevel(skill.name, e.target.id)}></input>
                              other</label>

                              <input type='number' value={skill.bonus} disabled={skill.level !== 'other'} onChange={(e) => updateSkillBonus(skill, e.target.value)}></input>
                              <Button className="p-button-sm" icon='pi pi-trash' onClick={(e) => {e.preventDefault(); deleteSkill(skill)}}></Button>

                           </div>
                        ))}
                     </div>

                  </div>
               </div>
               <div
                  style={
                     tabs === "resist"
                        ? { display: "block" }
                        : { display: "none" }
                  }
               >
                  <div className="list-columns">
                     <div
                        style={{
                           padding: "0.5ch",
                           backgroundColor: "white",
                           boxShadow: "0 0 5px grey",
                        }}
                     >
                        <h2 style={{ padding: "0.5ch" }}>Vulnerabilities</h2>
                        <div className="flex-checkboxes">
                           {damageTypes.map((c) => (
                              <div key={c} className="checkboxs">
                                 <input
                                    title={c}
                                    style={{ cursor: "pointer" }}
                                    type="checkbox"
                                    name={c}
                                    checked={selected.vulnerabilities.includes(
                                       c
                                    )}
                                    value={c}
                                    onChange={(e) => {
                                       selected.vulnerabilities.includes(
                                          e.target.value
                                       )
                                          ? setSelected({
                                               ...selected,
                                               vulnerabilities: [
                                                  ...selected.vulnerabilities.filter(
                                                     (f) => {
                                                        return (
                                                           f !== e.target.value
                                                        );
                                                     }
                                                  ),
                                               ],
                                            })
                                          : setSelected({
                                               ...selected,
                                               vulnerabilities: [
                                                  ...selected.vulnerabilities,
                                                  e.target.value,
                                               ],
                                            });
                                    }}
                                 />
                                 <label htmlFor={c}>{c}</label>
                              </div>
                           ))}
                        </div>
                     </div>

                     <div
                        style={{
                           padding: "0.5ch",
                           backgroundColor: "white",
                           boxShadow: "0 0 5px grey",
                        }}
                     >
                        <h2 style={{ paddingBottom: "2ch" }}>Resistances</h2>
                        <div className="flex-checkboxes">
                           {damageTypes.map((c) => (
                              <div key={c} className="checkboxs">
                                 <input
                                    title={c}
                                    style={{ cursor: "pointer" }}
                                    type="checkbox"
                                    name={c}
                                    checked={selected.resistances.includes(c)}
                                    value={c}
                                    onChange={(e) => {
                                       selected.resistances.includes(
                                          e.target.value
                                       )
                                          ? setSelected({
                                               ...selected,
                                               resistances: [
                                                  ...selected.resistances.filter(
                                                     (f) => {
                                                        return (
                                                           f !== e.target.value
                                                        );
                                                     }
                                                  ),
                                               ],
                                            })
                                          : setSelected({
                                               ...selected,
                                               resistances: [
                                                  ...selected.resistances,
                                                  e.target.value,
                                               ],
                                            });
                                    }}
                                 />
                                 <label htmlFor={c}>{c}</label>
                              </div>
                           ))}
                        </div>
                     </div>

                     <div
                        style={{
                           padding: "0.5ch",
                           backgroundColor: "white",
                           boxShadow: "0 0 5px grey",
                        }}
                     >
                        <h2>Immuities</h2>
                        <div className="flex-checkboxes">
                           {damageTypes.map((c) => (
                              <div key={c} className="checkboxs">
                                 <input
                                    title={c}
                                    style={{ cursor: "pointer" }}
                                    type="checkbox"
                                    name={c}
                                    checked={selected.damageImmunity.includes(
                                       c
                                    )}
                                    value={c}
                                    onChange={(e) => {
                                       selected.damageImmunity.includes(
                                          e.target.value
                                       )
                                          ? setSelected({
                                               ...selected,
                                               damageImmunity: [
                                                  ...selected.damageImmunity.filter(
                                                     (f) => {
                                                        return (
                                                           f !== e.target.value
                                                        );
                                                     }
                                                  ),
                                               ],
                                            })
                                          : setSelected({
                                               ...selected,
                                               damageImmunity: [
                                                  ...selected.damageImmunity,
                                                  e.target.value,
                                               ],
                                            });
                                    }}
                                 />
                                 <label htmlFor={c}>{c}</label>
                              </div>
                           ))}
                        </div>
                     </div>

                     <div
                        style={{
                           padding: "0.5ch",
                           backgroundColor: "white",
                           boxShadow: "0 0 5px grey",
                        }}
                     >
                        <div className="flex-checkboxes">
                           {conditions.map((c) => (
                              <div key={c} className="checkboxs">
                                 <input
                                    title={c}
                                    style={{ cursor: "pointer" }}
                                    type="checkbox"
                                    name={c}
                                    checked={selected.conditionImmunity.includes(
                                       c
                                    )}
                                    value={c}
                                    onChange={(e) => {
                                       selected.conditionImmunity.includes(
                                          e.target.value
                                       )
                                          ? setSelected({
                                               ...selected,
                                               conditionImmunity: [
                                                  ...selected.conditionImmunity.filter(
                                                     (f) => {
                                                        return (
                                                           f !== e.target.value
                                                        );
                                                     }
                                                  ),
                                               ],
                                            })
                                          : setSelected({
                                               ...selected,
                                               conditionImmunity: [
                                                  ...selected.conditionImmunity,
                                                  e.target.value,
                                               ],
                                            });
                                    }}
                                 />
                                 <label htmlFor={c}>{c}</label>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
               <div
                  style={
                     tabs === "traits"
                        ? { display: "block" }
                        : { display: "none" }
                  }
               >
                  {/* traits */}
                  {item && item.traits && (
                     <div id="traits" className="list-columns">
                        {item.traits.map((trait, i) => (
                           <div className="flex-row" key={trait._id}>
                              <div
                                 className="list-item"
                                 style={{ textAlign: "left", width: "100%" }}
                              >
                                 <div
                                    className="flex-row"
                                    style={{ cursor: "pointer", width: "100%" }}
                                    onClick={() => {
                                       setTrait(trait);
                                       setModal({ on: true, view: "trait" });
                                    }}
                                 >
                                    {trait.name && (
                                       <h2
                                          style={{
                                             display: "inline-block",
                                             paddingRight: "1ch",
                                             width: "15ch",
                                             textAlign: "left",
                                          }}
                                       >
                                          {trait.name}:{" "}
                                       </h2>
                                    )}
                                    {trait.description && (
                                       <p
                                          style={{
                                             display: "inline-block",
                                             textAlign: "left",
                                             width: "100%",
                                          }}
                                       >
                                          {trait.description}
                                       </p>
                                    )}
                                 </div>
                                 <FaWindowClose
                                    size="20px"
                                    color="red"
                                    style={{
                                       cursor: "pointer",
                                       float: "right",
                                    }}
                                    onClick={() => deleteTrait(trait._id)}
                                 ></FaWindowClose>
                              </div>
                           </div>
                        ))}
                        <br />
                        <button
                           type="button"
                           className="btn blue"
                           style={{ float: "right" }}
                           onClick={() => {
                              setTrait({ name: "", description: "" });
                              setModal({ on: true, view: "trait" });
                           }}
                        >
                           New Trait
                        </button>
                     </div>
                  )}
               </div>
               <div
                  style={
                     tabs === "actions"
                        ? { display: "block" }
                        : { display: "none" }
                  }
               >
                  {/* actions */}
                  {item && item.actions && (
                     <div id="actions" className="list-columns">
                        {item.actions.map((action, i) => (
                           <div className="flex-row" key={i}>
                              <div
                                 className="list-item"
                                 style={{ textAlign: "left", width: "100%" }}
                              >
                                 <div
                                    className="flex-row"
                                    style={{ cursor: "pointer", width: "100%" }}
                                    onClick={() => {
                                       setAction(action);
                                       setModal({ on: true, view: "action" });
                                    }}
                                 >
                                    {action.name && (
                                       <h2
                                          style={{
                                             display: "inline-block",
                                             paddingRight: "1ch",
                                             width: "15ch",
                                             textAlign: "left",
                                          }}
                                       >
                                          {action.name}:{" "}
                                       </h2>
                                    )}
                                    {action.description && (
                                       <p
                                          style={{
                                             display: "inline-block",
                                             textAlign: "left",
                                             width: "100%",
                                          }}
                                       >
                                          {action.description}
                                       </p>
                                    )}
                                 </div>
                                 <FaWindowClose
                                    size="20px"
                                    color="red"
                                    style={{
                                       cursor: "pointer",
                                       float: "right",
                                    }}
                                    onClick={() => {
                                       deleteAction(action._id);
                                    }}
                                 ></FaWindowClose>
                              </div>
                           </div>
                        ))}
                     </div>
                  )}
                  <br />
                  <button
                     type="button"
                     className="btn blue"
                     style={{ float: "right" }}
                     onClick={() => {
                        setAction(actionTemplate);
                        setModal({ on: true, view: "action" });
                     }}
                  >
                     New Action
                  </button>
               </div>
               <div
                  style={
                     tabs === "legend"
                        ? { display: "block" }
                        : { display: "none" }
                  }
               >
                  {/* legendary */}
                  {selected.legendary && (
                     <div id="legendary" className="list-columns">
                        {selected.legendary.map((action, i) => (
                           <div className="flex-row" key={i}>
                              <div
                                 className="list-item"
                                 style={{ textAlign: "left", width: "100%" }}
                              >
                                 <div
                                    className="flex-row"
                                    style={{ cursor: "pointer", width: "100%" }}
                                    onClick={() => {
                                       setItem(action);
                                       setModal({
                                          on: true,
                                          view: "legendary",
                                       });
                                    }}
                                 >
                                    {action.name && (
                                       <h2
                                          style={{
                                             display: "inline-block",
                                             paddingRight: "1ch",
                                             width: "15ch",
                                             textAlign: "left",
                                          }}
                                       >
                                          {action.name}:{" "}
                                       </h2>
                                    )}
                                    {action.text && (
                                       <p
                                          style={{
                                             display: "inline-block",
                                             textAlign: "left",
                                             width: "100%",
                                          }}
                                       >
                                          {truncate(action.text, 70)}
                                       </p>
                                    )}
                                 </div>
                                 <FaWindowClose
                                    size="20px"
                                    color="red"
                                    style={{
                                       cursor: "pointer",
                                       float: "right",
                                    }}
                                    onClick={() => {
                                       window.alert("delete");
                                    }}
                                 ></FaWindowClose>
                              </div>
                           </div>
                        ))}
                     </div>
                  )}
               </div>
               <div
                  style={
                     tabs === "spells"
                        ? { display: "block" }
                        : { display: "none" }
                  }
               >
                  {/* spell slots */}
                  <form className={styles.spellslots_container}>
                     {spellSlotLevels.map((level, index) => (
                        <label htmlFor={level}>
                           {level}
                           <input
                              id={level}
                              type="number"
                              value={
                                 item?.spellSlots && item?.spellSlots[index]
                              }
                              onChange={(e) =>
                                 setSpellslots(index, e.target.value)
                              }
                           ></input>
                        </label>
                     ))}
                     <button
                        onClick={(e) => {
                           e.preventDefault(),
                              setModal({ on: true, view: "spell" });
                        }}
                     >
                        New Spell
                     </button>
                  </form>

                  {/* spells */}
                  {spells && (
                     <div id="spells" className={styles.spell_list}>
                        {spells
                           .sort((a, b) => {
                              return a.level - b.level;
                           })
                           .map((spell, i) => (
                              <div key={i._id} className={styles.spell_line}>
                                 <div
                                    className={styles.delete_button}
                                    onClick={() => deleteSpell(spell.name)}
                                 >
                                    <FaWindowClose color="red" size="1.5em" />
                                 </div>
                                 <div title={spell.description}>
                                    <strong>{spell.name}:</strong> Level{" "}
                                    <strong>{spell.level}</strong>{" "}
                                    {spell.school}
                                 </div>
                              </div>
                           ))}

                        <br></br>
                     </div>
                  )}
               </div>
            </form>
         )}
      </>
   );
};

export { MonsterList, MonsterForm };
export async function getServerSideProps(context) {
   try {
      await connectToDatabase;
      return {
         props: { isConnected: true },
      };
   } catch (e) {
      console.error(e);
      return {
         props: { isConnected: false },
      };
   }
}
