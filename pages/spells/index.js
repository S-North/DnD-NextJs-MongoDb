import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useState, useEffect } from 'react';
import Nav from '../../components/Nav';
import styles from '../../styles/Spells.module.css'
import { sizes, types, crRange, sensesList, abilityList, languagesList, skillList, damageTypes, conditions, monsterTemplate, schools, spellLevels } from '../../utils/Forms'
import { truncate, abilityModifier, diceRoll, crToXp, displayCrAsFraction } from '../../utils/utils'
import ReactPaginate from 'react-paginate'; // https://www.npmjs.com/package/react-paginate
import spellBook from '../../spells.json'
import { importSpell } from '../../utils/import';

export default withPageAuthRequired(function Spells({ }) {
    const api = '/api/'
    const [ selected, setSelected ] = useState();
    const [ modal, setModal ] = useState({"type": "none", "on": false})
    const [ updated, setUpdated ] = useState(0)

    const importSpells = async (file) => {
        // console.log(file)
        const spellUpload = []
        spellBook.forEach(spell => {
            spellUpload.push(importSpell(spell))
        })
        console.log(spellUpload)
        const response = await fetch(`${api}spells`, {
        method: "POST",
        body: JSON.stringify(
            {
            action: 'addmany',
            data: spellUpload
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        const uploadedSpells = await response.json()
        console.log(uploadedSpells)
    }

    return(
        <>
        <Nav location='spells'></Nav>
        <section>
            <div className="one-column">
                <SpellList />
            </div>

            <div className="one-column">
                <button onClick={() => {importSpells(spellBook)}}>Import Spells</button>
            </div>

        </section>
        </>
    )
})

const SpellList = ({ addMonster, editMonster, deleteMonster, setSelected, setModal, updated }) => {
    const api = '/api/'
    const [ spells, setSpells ] = useState([]);
  
    // manage the query state
    const [ search, setSearch ] = useState("")
    const [ minLevel, setminLevel ] = useState(0)
    const [ maxLevel, setMaxLevel ] = useState(9)
    const [ school, setSchool ] = useState()
    const [ sortName, setSortName ] = useState('asc')
    const [ sortLevel, setSortLevel ] = useState('off')
    const [ query, setQuery ] = useState(
      {minLevel: minLevel, maxLevel: maxLevel, search: search}
    )
  
    // pagination state
    const [ currentItems, setCurrentItems ] = useState(null);
    const [ pageCount, setPageCount ] = useState(0);
    const [ itemOffset, setItemOffset ] = useState(0);
    const [ itemsPerPage, setItemsPerPage ] = useState(10)
  
    useEffect(() => {
      console.log(`updated: ${updated}`)
      if (school === 'none') {setQuery({})}
      const getSpells = async () => {
        const response = await fetch(`${api}spells`, {
          method: "POST",
          body: JSON.stringify(
              {
              action: 'minilist',
              data: {minLevel: minLevel, maxLevel: maxLevel, search: search, school: school},
              sort: {name: sortName, level: sortLevel}
          }),
          headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        const allSpells = await response.json()
        setItemOffset(0)
        setSpells(allSpells)
      }
      getSpells()
  
      return () => {} 
    }, [minLevel, maxLevel, search, sortName, sortLevel, school, updated])
  
    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(spells.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(spells.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, spells]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % spells.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
  
    const handleSort = (button) => {
      switch (button) {
          case 'name':
              console.log('clicked name')
              setSortLevel('off')
              if (sortName === 'off') setSortName('asc')
              if (sortName === 'asc') setSortName('desc')
              if (sortName === 'desc') setSortName('asc')
              break
          case 'level':
              console.log('clicked level')
              setSortName('off')
              if (sortLevel === 'off') setSortLevel('asc')
              if (sortLevel === 'asc') setSortLevel('desc')
              if (sortLevel === 'desc') setSortLevel('asc')
      }
    }
  
    const getMonster = async (monster) => {
      console.log(monster)
      const response = await fetch(`${api}monsters`, {
        method: "POST",
        body: JSON.stringify(
            {
            action: 'query',
            data: {_id: monster._id}
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      const selectedMonster = await response.json()
      console.log(selectedMonster)
      if (selectedMonster && selectedMonster.length > 0) setSelected(selectedMonster[0]); setModal({on:true, view: "edit"})
    }
  
    return (
        <>
        <div className={styles.filter_container}>
            {<button className={styles.btn_add_new} onClick={() => {setSelected(monsterTemplate); setModal({on:true, view: "edit"})}}>New Spell</button>}
        
        {/* filtering the results */}
        <details open>
            <summary>Filter & Search</summary>
            <div className="flex-row">
                  <input type="text" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)}></input>
                  <select value={minLevel} onChange={(e) => {setminLevel(parseFloat(e.target.value))}} style={{width: '10ch'}}>
                      {spellLevels.map(level => (
                          <option key={level} value={level}>{displayCrAsFraction(level)}</option>
                      ))}
                  </select>
                  <select value={maxLevel} onChange={(e) => {setMaxLevel(parseFloat(e.target.value))}} style={{width: '10ch'}}>
                      {spellLevels.map(level => (
                          <option key={level} value={level}>{displayCrAsFraction(level)}</option>
                      ))}
                  </select>
            </div>
            <div className="flex-row">
            <select value={school} onChange={(e) => {setSchool(e.target.value)}} style={{}}>
                  {['none', ...schools].map(school => (
                      <option key={school} value={school}>{school}</option>
                  ))}
              </select>
              <input type='button' 
                  value={sortName} 
                  onClick={(e) => {handleSort('name')}} 
                  style={sortName !== 'off' ? {width: '10ch', backgroundColor: 'green', color: 'white'} : {width: '10ch', backgroundColor: 'grey', color: 'white'}} title={sortName} />
              <input type='button' 
                  value={sortLevel} 
                  onClick={(e) => {handleSort('level')}} 
                  style={sortLevel !== 'off' ? {width: '10ch', backgroundColor: 'green', color: 'white'} : {width: '10ch', backgroundColor: 'grey', color: 'white'}} title={sortLevel} />
            
            </div>  
        </details>
        </div>
        
        <div className={styles.item_list}>
        {currentItems && currentItems.map(spell => (
            <div key={spell._id} className={styles.list_item}>
                <div className={styles.item_text} onClick={() => {setSelected(spell); setModal({on:true, view: "view"})}}>
                    <div className="link">
                            <h2>{spell.name}</h2>
                            <div style={{display: "flex"}}>
                              <p><strong>Level: {spell.level} - </strong></p>
                              <em>{spell.school}</em>
                            </div>
                    </div>
                </div>
                <div className='actions'>
                    {deleteMonster && <FaWindowClose 
                        style={{"cursor": "pointer"}} 
                        color="red"
                        onClick={() => {deleteMonster("monsters", monster._id)}} />}
  
                    {editMonster && <FaEdit
                        style={{"cursor": "pointer"}} 
                        color="grey"
                        onClick={() => {getMonster(monster)}} />}
  
                </div>
            </div>
        ))}
        </div>
  
        {spells?.length > itemsPerPage && <div id='pagination-controls'>
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
        {/* <div className="flex-row">
            <button className="blue" onClick={() => {prev()}}>Prev</button>
            <button className="blue" onClick={() => {next()}}>Next</button>
        </div> */}
        </>
    );
  }