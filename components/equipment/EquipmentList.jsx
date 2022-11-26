import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'; // https://www.npmjs.com/package/react-paginate
import { equipmentTypes, equipmentRarity, equipmentProperies } from '../../utils/Forms';
import { MultiStateCheckbox } from 'primereact/multistatecheckbox';
import { FaWindowClose, FaEdit } from 'react-icons/fa';
import styles from './EquipmentList.module.css'

export default function EquipmentList ({ user, clickFunction, editFunction, deleteFunction, modalFunction }) {
  const [ equipment, setEquipment ] = useState([])
  const magicOptions = [
    { value: 'Magic', icon: 'pi pi-check' },
    { value: 'Ordinary', icon: 'pi pi-times' },
    { value: 'All', icon: 'pi pi-globe' }
  ];
  const attuneOptions = [
    { value: 'Required', icon: 'pi pi-check' },
    // { value: 'Not Required', icon: 'pi pi-times' },
    { value: 'All', icon: 'pi pi-globe' }
  ];

  // manage the query state
  const [ query, setQuery ] = useState({
    search: '',
    type: '',
    magic: 'All',
    rarity: '',
    property: '',
    attunement: 'All'
  })

  // pagination state
  const [ currentItems, setCurrentItems ] = useState(null);
  const [ pageCount, setPageCount ] = useState(0);
  const [ itemOffset, setItemOffset ] = useState(0);
  const [ itemsPerPage, setItemsPerPage ] = useState(10)

  useEffect(() => {
    const getMonsters = async () => {
      const response = await fetch(`/api/equipment`, {
          method: "POST",
          body: JSON.stringify({
            action: "query",
            query,
            projection: { 
              _id: 1, 
              name: 1,
              type: 1,
              rarity: 1,
              magic: 1,
              attunement: 1
            }
            // sort: { name: sortName, cr: sortCr },
          }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      let apiResponse = await response.json();
      setPageCount(0)
      setItemOffset(0);
      setEquipment(apiResponse)
    }
    getMonsters()
  
    return
  }, [query])

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(equipment.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(equipment.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, equipment]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % equipment.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  const exportToJson = async (objectData) => {
    console.log(objectData)
    const monsters = []

    await objectData.forEach(monster => {
       const getFullMonster = async () => {
          const response = await fetch(`/api/equipment`, {
             method: "POST",
             body: JSON.stringify({
                action: "query",
                data: { _id: monster._id },
             }),
             headers: { "Content-type": "application/json; charset=UTF-8" },
          });
          const fullMonster = await response.json();
          monsters.push(fullMonster)
          // if (fullMonster && fullMonster.length > 0) setMonster(fullMonster[0]);
       };
       getFullMonster()
    })

    let filename = "monsters.json";
    let contentType = "application/json;charset=utf-8;";
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      var blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(monsters, null, 2)))], { type: contentType });
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      var a = document.createElement('a');
      a.download = filename;
      a.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(monsters, null, 2));
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }
    

    return (
        <>
        <div className={styles.filterbox}>
          <button onClick={e => {e.preventDefault(); exportToJson(equipment)}}>Export</button>

          <div className={styles.details}>
            <div>
              {/* <strong htmlFor='search'>Search</strong>  */}
              <input
                id='search'
                type="text"
                placeholder="search"
                value={query.search}
                onChange={(e) => setQuery({...query, search: e.target.value})}
              ></input>
            </div>
            <div>
              <label htmlFor='type'>Type</label>
              <select
                id='type'
                value={query.type}
                onChange={(e) => {
                setQuery({...query, type: e.target.value})}}
                style={{ minWidth: "fit-content" }}
              >
                  {['Any', ...equipmentTypes].map((type) => (
                    <option key={type} value={type}>
                        {type}
                    </option>
                  ))}
              </select>
              <label htmlFor='rarity'>Rarity</label>
              <select
                id='rarity'
                value={query.rarity}
                onChange={(e) => {
                setQuery({...query, rarity: e.target.value})}}
                style={{ minWidth: "fit-content" }}
              >
                  {['Any', ...equipmentRarity].map((rarity) => (
                    <option key={rarity} value={rarity}>
                        {rarity}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              {/* <fieldset style={{width: "100%"}}> */}
                <legend>Magic Item</legend>
                <div className={styles.checkbox_container}>
                  <MultiStateCheckbox options={magicOptions} value={query.magic} optionValue="value" empty={false} onChange={e => setQuery({...query, magic: e.value})} />
                  <label>{query.magic}</label>
                </div>
              {/* </fieldset>
              <fieldset style={{width: "100%"}}> */}
                <legend>Attunement</legend>
                <div className={styles.checkbox_container}>
                  <MultiStateCheckbox options={attuneOptions} value={query.attunement} optionValue="value" empty={false} onChange={e => setQuery({...query, attunement: e.value})} />
                  <label>{query.attunement}</label>
                </div>
              {/* </fieldset> */}
            </div>
          </div>

          </div>
            <div className={styles.item_list}>
          {currentItems && currentItems.map(equipment => (
            <div key={equipment._id} className={styles.list_item}>
              {/* <div> */}
                <div className={styles.item_text} onClick={clickFunction ? () => {clickFunction(equipment); modalFunction({on: false, view: ""}) } : () => {}}>
                  <h2>{equipment.name}</h2>
                  <div style={{display: "flex"}}>
                  <em>{equipment.type} - {equipment.rarity} {equipment.magic && 'Magic'}</em>
                </div>
              {/* </div> */}
              </div>
              {user?.permission === 'admin' && <div className={styles.actionDiv}>
                  {deleteFunction && <FaWindowClose 
                      style={{"cursor": "pointer"}} 
                      color="red"
                      onClick={() => {deleteFunction("spells", equipment._id)}} />}

                  {editFunction && <FaEdit
                      style={{"cursor": "pointer"}} 
                      color="grey"
                      onClick={() => {editFunction(equipment); modalFunction({on: true, view: "edit"})}} />}
              </div>}
            </div>
          ))}
          </div>

        {equipment?.length > itemsPerPage && <div id='pagination-controls'>
          <ReactPaginate
            breakLabel="..."
            nextLabel=" >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="< "
            renderOnZeroPageCount={null}
            activeClassName='active-page'
          />
        </div>}
        </>
    )
}