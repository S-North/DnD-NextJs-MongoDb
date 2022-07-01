import { useContext, useState } from "react";
import { EncounterContext } from "../../pages/encounter/[id]";
import { v4 as uuidv4 } from 'uuid'
import { MonsterForm } from "../../pages/monsters";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import styles from './DamageCalculator.module.css'

export default function EditMonsters ({ addMonsters }) {
    const encounter = useContext(EncounterContext)
    const [repeat, setRepeat] = useState(1);
  
    const dbUpdate = (monster) => {
      if (!repeat | typeof repeat !== 'number' | repeat > 20) {return}
      // selected is updated monster edited in the form.
      // repeat is how many of the edited monsters to add to the initiative
      console.log(monster)
      const monsters = [];
      for (let i = 0; i < parseInt(repeat); i++) {
        monsters.push({
          ...monster,
          currentHp: monster.maxHp,
          source: monster._id,
          _id: uuidv4(),
          name: `${monster.name} ${i + 1}`,
        });
      }
      addMonsters(monsters);
      encounter.setModal({ on: false, type: null });
      encounter.setSelected({});
    };

    const changeRepeat = (direction) => {
      switch (direction) {
        case 'down':
          repeat > 0 && setRepeat(repeat - 1)
          break
        default:
          repeat <20 && setRepeat(repeat + 1)
      }
    }
  
    return (
      <>
        <form onSubmit={(e) => e.preventDefault()} className={styles.align_row}>
          <label htmlFor="numberToAdd" style={{width: '20ch'}}>
            Monsters to add?
          </label>
          <button className={styles.subtract_button} onClick={() => changeRepeat('down')}><FaAngleLeft /></button>
          <input
            id="numberToAdd"
            type="number"
            required
            value={repeat}
            min="1"
            max="20"
            onChange={(e) => {
              setRepeat(parseInt(e.target.value));
            }}
          />
          <button className={styles.subtract_button} onClick={() => changeRepeat('up')}><FaAngleRight /></button>
        </form>
        <MonsterForm selected={encounter.selected} setSelected={encounter.setSelected} update={dbUpdate}></MonsterForm>
      </>
    );
  };