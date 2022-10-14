import { useContext } from "react";
import { EncounterContext } from "../../pages/encounter/[id]";
import { MonsterList } from "../../pages/monsters";

export default function AddMonster ({ setSelected }) {   
    const encounter = useContext(EncounterContext)

    const choseMonster = async (monster) => {
        // console.log(monster)

        // Check for location of monster. Custom edited is stored in the campaign collection. Otherwise it should be in the monsters collection
        const api = '/api/'
        const custom = monster.campaignMonster
        console.log(custom)
        let query = {}
        if (monster.campaignMonster) query = {
          collection: 'campaigns',
          query: 'query',
          data: {_id: monster._id}
        }
        if (!monster.campaignMonster) query = {
          collection: 'monsters',
          query: 'query',
          data: {_id: monster._id}
        }

        const response = await fetch(`${api}${query.collection}`, {
          method: "POST",
          body: JSON.stringify(
              {
              action: query.query,
              data: query.data
          }),
          headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        const allMonsters = await response.json()
        if (allMonsters.length > 0 && !custom) encounter.setSelected(allMonsters[0]);
        if (custom && monster) {
          console.log('detected custom monster')
          console.log(monster)
          encounter.setSelected(monster);
        }
        encounter.setModal({ type: "editMonsters", on: true });
      }
  
    return (
      <>
        <MonsterList setSelected={choseMonster} setModal={encounter.setModal} extraMonsters={encounter.campaign.monsters}></MonsterList>
      </>
    );
  };