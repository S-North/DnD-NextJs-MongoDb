import { useState } from 'react';
import styles from './PaginationItemList.module.css'

export default function PaginationItemList ({ admin }) {
  const filterItems = {
    search: '',
    type: ['Ammo', 'Valuable', "Heavy Armor", "Light Armor", "Melee", "Medium Armor", "Ranged", "Shield", "Potion", "Rod", "Ring", "Scroll", "Staff", "Wonderous Item", "Wand", "Gear"],
    magic: false,
    rarity: ['Common', 'Uncommon', 'Rare', 'Very Rare', 'Legendary', 'Artifact'],
    property: ['2 Handed', 'Ammunition', 'Finesse', 'Heavy', 'Light', 'Loading', 'Thrown', 'Versatile', 'Reach', 'Special'],
    attunement: false
  }
  const [ filter, setFilter ] = useState({
    search: '',

  });

  return (
    <div>
      <div className={styles.monster_filter_container}>
            {
               <div style={{'display': 'flex', 'flexDirection': 'column', 'gap': '0.5rem'}}>
               <button
                  // disabled={admin !== 'admin'}
                  className={styles.btn_add_new_monster}
                  onClick={() => {
                     setSelected(monsterTemplate);
                     setModal({ on: true, view: "edit" });
                  }}
               >New Monster
               </button>
               <button
                  className={styles.btn_add_new_monster}
                  onClick={() => exportToJson(monsters)}
                  >Export List</button>
               </div>
            }

            {/* filtering the results */}
            <details open style={{"width": "100%"}}>
               <summary style={{"display": "flex", "gap": "1rem", "alignItems": "baseline"}}>
                  <h2 style={{"width": "8rem"}}>Filter & Search</h2> 
                  <input
                     type="text"
                     placeholder="search"
                     value={search}
                     onChange={(e) => setSearch(e.target.value)}
                  ></input>
               </summary>
               <div className="flex-row">
                  {/* <Slider value={crRange} onChange={(e) => setCrRange(e.value)} range style={{"width": "100%"}} min={0} max={30} step={1}/> */}
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
                  {/* <fieldset> */}
                     {/* <legend>Source</legend> */}
                     <label>
                        <RadioButton value="official" name="source" onChange={(e) => setMonsterSource(e.value)} checked={monsterSource === 'official'} style={{"margin-right": "0.5rem"}} />
                        Offical
                     </label>
                     <label>
                        <RadioButton value="custom" name="source" onChange={(e) => setMonsterSource(e.value)} checked={monsterSource === 'custom'} style={{"margin-right": "0.5rem"}} />
                        Custom
                     </label>
                     <label>
                        <RadioButton value="both" name="source" onChange={(e) => setMonsterSource(e.value)} checked={monsterSource === 'both'} style={{"margin-right": "0.5rem"}} />
                        Both
                     </label>
                  {/* </fieldset> */}
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

    </div>
  )
}
