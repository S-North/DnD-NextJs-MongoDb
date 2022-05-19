import { useContext, useState } from "react";
import { EncounterContext } from "../../pages/encounter/[id]";
import { v4 as uuidv4 } from 'uuid'
import { MonsterForm } from "../../pages/monsters";

export default function EditMonsters ({ addMonsters }) {
    const encounter = useContext(EncounterContext)
    const [repeat, setRepeat] = useState();
  
    const dbUpdate = (monster) => {
      if (!repeat | typeof repeat !== 'string' | repeat > 10) {return}
      // selected is updated monster edited in the form.
      // repeat is how many of the edited monsters to add to the initiative
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
  
    return (
      <>
        <form className="flex-row">
          <label htmlFor="numberToAdd">
            How Many of these monsters do you want to add?
          </label>
          <input
            id="numberToAdd"
            type="number"
            required
            value={repeat}
            min="1"
            max="10"
            onChange={(e) => {
              setRepeat(e.target.value);
            }}
          />
        </form>
        <MonsterForm selected={encounter.selected} setSelected={encounter.setSelected} update={dbUpdate}></MonsterForm>
      </>
    );
  };