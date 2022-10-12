import { useContext, useState } from "react";
import { EncounterContext } from "../../pages/encounter/[id]";
import styles from './AddCharacter.module.css';
import { Button } from 'primereact/button';


export default function AddCharacter ({ addCharacters }) {
    const context = useContext(EncounterContext)
    const [selected, setSelected] = useState([]);

    const pcsInInitiative = context.encounter.initiative
      .filter((pc) => {return pc.enemy === "pc"})
      .map((id) => id._id);

    const pcsNotInInitiative = context.characters.filter((pc) => {
      return !pcsInInitiative.includes(pc._id);
    });

  
    const handleSelect = (e, player) => {
      if (e.target.checked) {
        setSelected([...selected, player]);
      } else {
        setSelected(
          selected.filter((character) => {
            return character._id !== player._id;
          })
        );
      }
    };

    const selectAll = (e) => {
      console.log(e.target.checked)
      if (e.target.checked) setSelected([...context.characters]) 
      else setSelected([])
    }
  
    const handleSubmit = (selected) => {
      const data = selected.map((pc) => ({
        name: pc.name,
        _id: pc._id,
        enemy: "pc",
        init: 0,
      }));
      addCharacters(data);
      context.setModal({ on: false, type: null });
    };
  
    return (
        <>
        <div className='flex-row'>
            <h2 className={styles.title}>Character List</h2>  
        </div>

        <section className={styles.section}>
          {pcsNotInInitiative.length > 0 &&
          <label className={styles.label}>
            <input 
              type='checkbox'
              className={styles.checkbox}
              checked={selected.length === pcsNotInInitiative.length}
              onChange={(e) => selectAll(e)}
            />
          Select All</label>}
          <hr />

          <section className={styles.characters}>
            {pcsNotInInitiative.length > 0 ?
              pcsNotInInitiative.map((pc) => (
                <div key={pc._id} className={styles.listRow}>
                    <label className={styles.label}>
                      <input 
                        type="checkbox"
                        className={styles.checkbox}
                        checked={selected.map(id => (id._id)).includes(pc._id)}
                        onChange={(e) => {handleSelect(e, pc)}}
                      />
                      {pc.name}</label>
                    </div>
              ))
            : <p>There are no additional campaign characters to add</p>}
          </section>

          {pcsNotInInitiative.length > 0 && <Button className={styles.submitButton} value="Add Selected" onClick={() => handleSubmit(selected)}>Add Selected</Button>}
        </section>
        
      </>
    );
  };