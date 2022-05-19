import { useContext, useState, useEffect } from "react";
import { EncounterContext } from "../../pages/encounter/[id]";
import { abilityModifier, diceRoll } from "../../utils/utils";

export default function RollInitiative ({ saveInitiative }) {
    const encounter = useContext(EncounterContext)
    const [initiative, setInitiative] = useState([]);
    const [sources, setSources] = useState([]);
  
    useEffect(() => {
      setInitiative(encounter.encounter.initiative); // populate initiative state with existing data
  
      return () => {};
    }, [encounter.encounter.initiative]);

    useEffect(() => {
        // get a list of all monster types
        const s = [];
        if (initiative) {
            initiative.forEach((v) => {
              if (v.source && !s.includes(v.source)) {
                s.push(v.source);
              }
            });
            setSources(s);
        }
    
      return () => {}
    }, [initiative])
    
  
    // const rollPlayer = (id) => {
    //     // roll a d20, add dex bonus, update the initiative. id = the characters id to roll on
    //     const init = encounter.initiative.filter((p) => { return p.id === id})[0]
    //     const roll = diceRoll(1,20,abilityModifier(characters.list.filter((p) => { return p.id === id})[0].dex))
    //     setInitiative([...encounter.initiative.filter(f => { return f.id !== id}), {...init, "id": id, "init": roll[2]}])
    // }
  
    const rollMonster = (id) => {
      // roll a d20, add dex bonus, update the initiative. id = the monsters id to roll on
      const init = initiative.filter((m) => {
        return m._id === id;
      })[0];
      const roll = diceRoll(
        1,
        20,
        abilityModifier(
          encounter.encounter.monsters.filter((m) => {
            return m._id === id;
          })[0].dex
        )
      );
      setInitiative([
        ...initiative.filter((f) => {
          return f._id !== id;
        }),
        { ...init, _id: id, init: roll[2] },
      ]);
    };
  
    const rollMonsters = (id) => {
      // roll all monster source groups. a d20 for each monster source group, then add individual bonus to the roll, update the initiative
      const init = initiative.filter((m) => {
        return m.enemy === "monster";
      });
      const update = [
        ...initiative.filter((f) => {
          return f.enemy !== "monster";
        }),
      ];
      sources.forEach((s) => {
        const roll = diceRoll(1, 20, 0);
        // /(`source group ${s} dice roll = ${roll[2]}`)
        init
          .filter((m) => {
            return m.source === s;
          })
          .forEach((m) => {
            update.push({
              ...m,
              init:
                roll[2] +
                abilityModifier(
                  encounter.encounter.monsters.filter((f) => {
                    return f._id === m._id;
                  })[0].dex
                ),
            });
          });
      });
      setInitiative([...update]);
    };
  
    const rollG = (gid) => {
      // roll a single monster source group. gid is the source id of the monsters
      const init = initiative.filter((m) => {return m.source === gid});
      const roll = diceRoll(1, 20, abilityModifier(encounter.encounter.monsters.filter((m) => { return m.source === gid})[0].dex));
      const update = [];
      init.forEach((m) => {update.push({ ...m, init: roll[2] })});
      setInitiative([...initiative.filter((f) => {return f.source !== gid}), ...update]);
    };
  
    return (
      <>
        <h2>Roll Initiative</h2>

        <form onSubmit={ (e) => { e.preventDefault(); saveInitiative( initiative ) } }>
  
            {/* section for player characters, enter initiative rolls here */}
            {initiative
                .filter((p) => {return p.enemy === "pc"})
                .sort((a, b) => (a._id > b._id ? 1 : -1)) // sorting on strings from here https://stackoverflow.com/a/43572944
                .map((p) => (
                    <div key={p._id} className="flex-row">
                        <div style={{ width: "30ch" }}>{p.name}</div>
                        <input type="number" id={p._id} name={p._id}
                            required
                            min={0}
                            value={parseInt(p.init)}
                            onChange={(e) => setInitiative([...initiative.filter((f) => {return f._id !== p._id}), { ...p, init: parseInt(e.target.value) }])}
                            style={{ width: "10ch" }}
                        />
                    </div>
                )
            )}
    
            <input type="button" className="btn green"
                value="roll monsters"
                onClick={(e) => {rollMonsters()}} />
    
            {sources.map((g) => (
            <div key={g}>
                <hr />
                {initiative.filter((c) => { return c.source === g })
                .sort((a, b) => (a.name > b.name ? 1 : -1)) // sorting on strings from here https://stackoverflow.com/a/43572944
                .map((c) => (
                    <div key={c._id} className="flex-row">
                    <div style={{ width: "30ch" }}>
                        {encounter.encounter.monsters.filter((m) => { return m._id === c._id })[0].name}
                    </div>
                    <input type="button" className="btn green" style={{ width: "10ch" }}
                        value={abilityModifier(encounter.encounter.monsters.filter((m) => { return m._id === c._id })[0].dex)}
                        onClick={() => {rollMonster(c._id, c.source)}}                  
                    />
                    <p>{c.init}</p>
                    </div>
                ))}
                {/* <div className="flex-row">
                            <input className="btn green" type="button" value="Roll Group" onClick={() => {rollG(g)}}></input>
                        </div> */}
            </div>
            ))}
            <hr />
    
            <input type="submit" className="btn green" value="Save" />

        </form>
      </>
    );
  };