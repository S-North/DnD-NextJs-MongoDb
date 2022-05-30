import { useContext } from "react";
import { EncounterContext } from "../../pages/encounter/[id]";
import { MonsterList } from "../../pages/monsters";

export default function AddMonster ({ setSelected }) {   
    const encounter = useContext(EncounterContext)

    const choseMonster = async (monster) => {
        console.log(monster)
        const api = 'http://localhost:3000/api/'
        const response = await fetch(`${api}monsters`, {
          method: "POST",
          body: JSON.stringify(
              {
              action: 'query',
              data: {_id: monster._id}
          }),
          headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        const allMonsters = await response.json()
        if (allMonsters.length > 0) encounter.setSelected(allMonsters[0]);
        encounter.setModal({ type: "editMonsters", on: true });
      }
  
    return (
      <>
        <MonsterList setSelected={choseMonster} setModal={encounter.setModal}></MonsterList>
      </>
    );
  };