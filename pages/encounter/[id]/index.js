import { connectToDatabase } from '../../../utils/mongodb'
import { useState, useEffect } from 'react'
import { abilityModifier, diceRoll, xpToLevel, displayCrAsFraction } from '../../../utils/utils'

import styles from '../../../styles/CombatantDetails.module.css'
import { FaWindowClose, FaBackward, FaForward  } from 'react-icons/fa'
import { ObjectId } from 'mongodb'
import {MonsterList, MonsterForm} from '../../monsters/index'
import Nav from '../../../components/Nav'
import { v4 as uuidv4 } from 'uuid'


const Encounter = ({initialEncounter}) => {
    const api = 'http://localhost:3000/api/'
    const [encounter, setEncounter] = useState(initialEncounter);
    const [characters, setCharacters] = useState();
    const [campaign, setCampaign] = useState({});
    const [adventure, setAdventure] = useState({});
    const [initiative, setInitiative] = useState();

    // used as temporary storage during edit, then as the combatant to display during running 
    const [selected, setSelected] = useState();

    // used during mode: 'running' as temporary storage when adjusting a combatant e.g. changing HP, conditions, etc
    const [ tempCombatant, setTempCombatant ] = useState()
    const [modal, setModal] = useState({ type: "none", on: false });

    useEffect(() => {
      // keybindings for keyboard commands. Needs some more research 

      document.addEventListener('keyup', function(e) {
        if (e.key === 'Escape') {
            setModal({on: false, type: ''})
        }
        // else if (e.key === 'ArrowRight' && encounter.mode === 'running') {
        //   incrementInitiative("forward")
        //   console.log('right arrow')
        // }
        // else if (e.key === 'ArrowLeft' && encounter.mode === 'running') {
        //   incrementInitiative("back")
        //   console.log('left arrow')
        // }
        // else if (e.key === 'h' && e.getModifierState('Control') && e.getModifierState('Alt') && encounter.mode === 'running') {
        //   // incrementInitiative("back")
        //   console.log('hitpoints')
        //   hpCalulatorForSelected()
        // }
      });
 
      return () => {}
    }, [])
    
    
    useEffect(() => {
      if (encounter && !characters) {
          const getCharacters = async () => {
              const response = await fetch(`${api}characters`, {
                  method: "POST",
                  body: JSON.stringify(
                      {
                      action: 'query',
                      data: {campaignId: encounter.campaignId}
                  }),
                  headers: {"Content-type": "application/json; charset=UTF-8"}
                })
                const encCharacters = await response.json()
                setCharacters(encCharacters)
          }
          getCharacters()
      }

      return () => {}
    }, [encounter])

    useEffect(() => {
      // when the turn is changed to a new combatant, make them selected (this will be used to update the details view)
      const combatant = encounter.initiative[encounter.turn]
      // console.log(combatant)

      if (characters && encounter && encounter.turn !== undefined) {
        console.log(combatant)
        switch (true) {
          case combatant.enemy == 'pc':
            setSelected(characters.filter(character => character._id === combatant._id)[0])
            break
            
          case combatant.enemy === 'monster':
            setSelected(encounter.monsters.filter(monster => monster._id === combatant._id)[0])
        }
      }
    
      return () => {}
    }, [encounter.turn, characters])
    
    
    const selectMonster = (monster) => {
        // utility function to handle setting the selected item state. Should propably rename as this is used for monsters, characters, npcs, etc
        setSelected(monster);
      };
    
    const addCharacters = async (charactersList) => {
        const response = await fetch(`${api}encounters`, {
            method: "POST",
            body: JSON.stringify(
                {
                action: 'editone',
                data: {
                    ...encounter,
                    initiative: [...encounter.initiative, ...charactersList]}
            }),
            headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            const encCharacters = await response.json()
            if (encCharacters.acknowledged && encCharacters.modifiedCount > 0) {
            setEncounter({
                ...encounter,
                initiative: [...encounter.initiative, ...charactersList]})
            setModal({on: false, type: ""})
            }
    }
    
    const addMonsters = async (monsters) => {
      // identify the collection and document then update the initiative & monsters
      const response = await fetch(`${api}encounters`, {
        method: "POST",
        body: JSON.stringify(
            {
            action: 'editone',
            data: {
              _id: encounter._id,
              initiative: [...encounter.initiative, ...monsters.map(m => (
                  {
                      _id: m._id,
                      enemy: "monster",
                      source: m.source,
                      init: 0,
                      name: m.name
                  }
              ))],
              monsters: [...encounter.monsters, ...monsters]
          }
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        const encCharacters = await response.json()
        if (encCharacters.acknowledged && encCharacters.modifiedCount > 0) {
        setEncounter(
          {
            ...encounter,
            initiative: [...encounter.initiative, ...monsters.map(m => (
                {
                    _id: m._id,
                    enemy: "monster",
                    source: m.source,
                    init: 0,
                    name: m.name
                }
            ))],
            monsters: [...encounter.monsters, ...monsters]
        }
        )
        setModal({on: false, type: ""})
        }
      setModal({ on: false, type: "" }); // close the form window
      };
    
    const deleteCombatant = async (combatant) => {
        const response = await fetch(`${api}encounters`, {
            method: "POST",
            body: JSON.stringify(
                {
                action: 'editone',
                data: {
                    ...encounter,
                    initiative: [...encounter.initiative.filter(i => i._id !== combatant._id)],
                    monsters: [...encounter.monsters.filter(i => i._id !== combatant._id)]
                }
            }),
            headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            const encCharacters = await response.json()
            if (encCharacters.acknowledged && encCharacters.modifiedCount > 0) {
            setEncounter({
                ...encounter,
                initiative: [...encounter.initiative.filter(i => i._id !== combatant._id)],
                monsters: [...encounter.monsters.filter(i => i._id !== combatant._id)]
            })
            setModal({on: false, type: ""})
            }
    }
    
    const editCombatant = async (monster) => {
      // this is only for monsters. updates the encounter.initiative & encounter.monsters
      // identify the collection and document then update the initiative & monsters
      
    };
  
    const editCharacter = (character) => {
      // updates the selected character in context.characters
      editItem("characters", character, character.id);
      setSelected({});
    };
  
    const saveInitiative = async (initiative) => {
      // update the encounter in firestore
      // update the encounter with the initiative rolls, then set the encounter to "running"
      const response = await fetch(`${api}encounters`, {
          method: "POST",
          body: JSON.stringify(
              {
              action: 'editone',
              data: {
                _id: encounter._id,
                initiative: initiative,
                mode: 'running',
                round: 0,
                turn: 0
              }
          }),
          headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        const newInitiative = await response.json()
        setEncounter({
          ...encounter,
          initiative: initiative,
          mode: 'running',
          round: 0,
          turn: 0
        })
      setModal({ on: false, type: "" });
    };

    const editEncounter = async (update) => {
      // update should be an object containing the changed fields in the encounter
      const response = await fetch(`/api/encounters`, {
          method: "POST",
          body: JSON.stringify(
              {
              action: 'editone',
              data: {
                _id: encounter._id,
                ...update
              }
          }),
          headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        const updateStatus = await response.json()
        setEncounter({...encounter, ...update})
      }
  
    const incrementInitiative = (direction) => {
      // console.log(`length: ${encounter.initiative.length} turn: ${encounter.turn}`)
      switch (direction) {
        case 'forward':
          if (encounter.turn < encounter.initiative.length -1) {
            editEncounter({ turn: encounter.turn + 1 });
          } else {
            editEncounter({ 
              turn: 0, 
              round: encounter.round + 1 });
          }
          break;

        case "back":
          if (encounter.turn > 0) {
            editEncounter({ turn: encounter.turn - 1 });
          } else if (encounter.round > 0) {
            editEncounter({
              turn: encounter.initiative.length - 1,
              round: encounter.round - 1,
            });
          }
          break;
      }
    };
  
    const displayCombatant = (combatant) => {
      switch (true) {
        case combatant.enemy === "monster":
          setSelected(encounter.monsters.filter((m) => m.id === combatant.id)[0]);
          break;
        case combatant.enemy === "pc":
          setSelected(characters.filter((c) => c.id === combatant.id)[0]);
          break;
      }
    };

    const changeHP = (combatant) => {
      setTempCombatant(combatant)
      setModal({on: true, type: 'HpCalculator'})
    }

    const hpCalulatorForSelected = () => {
      console.log(selected)
      console.log(encounter)
      changeHP(selected)
    }

    const doDamage = (attacker, attack) => {
      console.log(attacker)
      console.log(attack)
      setTempCombatant({attacker, attack})
      setModal({on: true, type: 'doAttack'})
    }
    
    return (
       <>
  
       {/* modal window for popup forms */}
       {modal.on && (
          <div id="modal-window" className="modal">
            {/* Modal content */}
            <div className="modal-content">

              <span className="close" onClick={() => {
                  setModal({ on: false, type: "none" });
                }}>&times;
              </span>

              {modal.type === "addPC" && (
                <AddCharacter characters={characters} encounter={encounter} addCharacters={addCharacters} initiative={initiative} setInitiative={setInitiative} setModal={setModal} clearView={setSelected}></AddCharacter>
              )}

              {modal.type === "addMonster" && (
                  <div className="list-columns one-column">
                    <AddMonster setSelected={setSelected} setModal={setModal}></AddMonster>
                  </div>
              )}

              {modal.type === "editMonsters" && (
                  <EditMonsters selected={selected} setSelected={setSelected} addMonsters={addMonsters} setModal={setModal}></EditMonsters>
              )}

              {modal.type === "rollInitiative" && (
                  <RollInitiative encounter={encounter} characters={characters} setModal={setModal} saveInitiative={saveInitiative}></RollInitiative>
              )}

              {modal.type === "HpCalculator" && (
                <DamageCalculator tempCombatant={tempCombatant} characters={characters} monsters={encounter.monsters} editEncounter={editEncounter} setCampaign={setCampaign}></DamageCalculator>
              )}

              {modal.type === "doAttack" && (
                <>
                {tempCombatant && <DoAttack tempCombatant={tempCombatant} encounter={encounter} characters={characters}></DoAttack>}
                </>
              )}

            </div>
          </div>
        )}

        <section>
            {/* the edit list of combatants */}
            {encounter && encounter.mode === "editing" && (
            <div className="one-column">
              <div className="flex-row" style={{ justifyContent: "flex-end" }}>
                {/* <h2>Combatants</h2> */}
                {characters && (
                    <button className="blue" 
                        onClick={() => {
                            setModal({ type: "addPC", on: true });
                        }}> Add PC
                    </button>
                )}

                <button className="blue"
                    onClick={() => {
                        setModal({ type: "addNPC", on: true });
                    }}> Add NPC
                </button>

                <button className="blue"
                    onClick={() => {
                        setModal({ type: "addMonster", on: true });
                    }}>Add Monster
                </button>

                <button className="green"
                    onClick={() => {
                        setModal({ type: "rollInitiative", on: true });
                    }}> Run
                </button>
              </div>

              {characters && encounter && encounter.initiative.map((combatant) => (
                  <>
                    {combatant.enemy === "pc" && (
                      <div key={combatant._id}>
                        <InitiativeItem
                          combatant={combatant}
                          encounter={encounter}
                          campaign={campaign}
                          action={selectMonster}
                          characters={characters}
                          deleteCombatant={deleteCombatant}
                        ></InitiativeItem>
                      </div>
                    )}
                  </>
                ))}

              {encounter &&
                encounter.initiative.map((combatant) => (
                  <>
                    {combatant.enemy === "monster" && (
                      <div key={combatant._id}>
                        <InitiativeItem
                          combatant={combatant}
                          encounter={encounter}
                          campaign={campaign}
                          action={selectMonster}
                          characters={characters}
                          deleteCombatant={deleteCombatant}
                        ></InitiativeItem>
                      </div>
                    )}
                  </>
                ))}
            </div>
          )}

          {/* running initiative list */}
          {encounter && encounter.mode === "running" && (
            <div className="one-column">
              <div className="flex-row">
                <h3>{`Round: ${encounter.round + 1} Turn: ${
                  encounter.turn + 1
                }`}</h3>
                <button onClick={ () => { incrementInitiative("back") } }
                >
                  <FaBackward />
                </button>
                <button onClick={ () => { editEncounter({mode: 'editing'})}}> Edit </button>
                <button onClick={() => { incrementInitiative("forward")}}> <FaForward /> </button>
              </div>

              {/* <p>initiative list</p> */}
              <CombatantList
                encounter={encounter}
                characters={characters}
                displayCombatant={displayCombatant}
                setSelected={setSelected}
                changeHP={changeHP}
              ></CombatantList>
            </div>
          )}

        {selected && <div className="column-wide">
          <CombatantDetails combatant={selected} doDamage={doDamage}></CombatantDetails>
        </div>}

        </section>
       </>
    );
}

export default Encounter

const InitiativeItem = ({ encounter, combatant, action, deleteCombatant, characters }) => {
    const [item, setItem] = useState();
  
    useEffect(() => {
        switch (true) {
            default:
                break;
            case combatant.enemy === "monster":
                setItem(encounter.monsters.filter((f) => f._id === combatant._id)[0]);
                break;
            case combatant.enemy === "pc":
                setItem(characters.filter((f) => f._id === combatant._id)[0]);
        }
  
        return () => {};
    }, [encounter]);
  
    return (
        <>
            {item && (
                <div className="list-item">
                    <div style={{ cursor: "pointer", width: "100%" }}
                        onClick={() => {action(item);}}>
        
                    <h2>{item.name}</h2>
                    {item.cr && <p>CR: {displayCrAsFraction(item.cr)}</p>}
                    {item.enemy === 'pc' && <p>Level: {xpToLevel(item.xp)}</p>}
                    </div>
        
                    <FaWindowClose color="red" style={{ cursor: "pointer" }}
                        onClick={() => { deleteCombatant(combatant)}}>
                    </FaWindowClose>
                </div>
            )}
        </>
    );
  };

const AddCharacter = ({ characters, encounter, setModal, addCharacters }) => {
  const pcsInInitiative = encounter.initiative
    .filter((pc) => {return pc.enemy === "pc"})
    .map((id) => id._id);
  const pcsNotInInitiative = characters.filter((pc) => {
    return !pcsInInitiative.includes(pc._id);
  });
  const [selected, setSelected] = useState([]);

  const handleSelect = (e, player) => {
    if (e.target.checked) {
      setSelected([...selected, player]);
    } else {
      setSelected(
        selected.filter((character) => {
          return character.id !== player.id;
        })
      );
    }
  };

  const handleSubmit = (selected) => {
    const data = selected.map((pc) => ({
      name: pc.name,
      _id: pc._id,
      enemy: "pc",
      init: 0,
    }));
    addCharacters(data);
    setModal({ on: false, type: null });
  };

  return (
      <>
      <div className='flex-row'>
          <h2>Character List</h2>
          {pcsNotInInitiative.length > 0 && <button className='green' value="Add All" onClick={
              () => handleSubmit(pcsNotInInitiative)
              }>Add All</button>}

      </div>
      {pcsNotInInitiative.length > 0 ?
        pcsNotInInitiative.map((pc) => (
          <div key={pc._id} className="flex-row">
            <div className="flex-checkboxes">
              <div className="checkboxs">
                <input type="checkbox"
                  onChange={(e) => {handleSelect(e, pc)}}
                />
                <p>{pc.name}</p>
              </div>
            </div>
          </div>
        ))
      : <p>There are no additional campaign characters to add</p>}
      {pcsNotInInitiative.length > 0 && <button value="Add Selected" onClick={() => handleSubmit(selected)}>Add Selected</button>}
    </>
  );
};
  
const AddMonster = ({ setSelected, setModal }) => {
  const choseMonster = (monster) => {
    const getMonsters = async () => {
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
      if (allMonsters.length > 0) setSelected(allMonsters[0]);
      setModal({ type: "editMonsters", on: true });
    }
    getMonsters()
  };

  return (
    <>
      <MonsterList setSelected={choseMonster} setModal={() => {console.log("dummy function")}}></MonsterList>
    </>
  );
};

const EditMonsters = ({ selected, setSelected, addMonsters, setModal }) => {
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
    setModal({ on: false, type: null });
    setSelected({});
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
      <MonsterForm selected={selected} setSelected={setSelected} update={dbUpdate}></MonsterForm>
    </>
  );
};

const RollInitiative = ({ encounter, setModal, saveInitiative }) => {
  const [initiative, setInitiative] = useState([]);
  const [sources, setSources] = useState([]);

  useEffect(() => {
    setInitiative(encounter.initiative); // populate initiative state with existing data

    // get a list of all monster types
    const s = [];
    encounter.initiative.forEach((v) => {
      if (v.source && !s.includes(v.source)) {
        s.push(v.source);
      }
    });
    setSources(s);
    return () => {};
  }, [encounter]);

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
        encounter.monsters.filter((m) => {
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
                encounter.monsters.filter((f) => {
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
    const roll = diceRoll(1, 20, abilityModifier(encounter.monsters.filter((m) => { return m.source === gid})[0].dex));
    const update = [];
    init.forEach((m) => {update.push({ ...m, init: roll[2] })});
    setInitiative([...initiative.filter((f) => {return f.source !== gid}), ...update]);
  };

  return (
    <>
      <h2>Roll Initiative</h2>

      {/* section for player characters, enter initiative rolls here */}
      {initiative.filter((p) => {return p.enemy === "pc"})
        .sort((a, b) => (a._id > b._id ? 1 : -1)) // sorting on strings from here https://stackoverflow.com/a/43572944
        .map((p) => (
          <div key={p._id} className="flex-row">
            <div style={{ width: "30ch" }}>{p.name}</div>
            {/* <input 
                        type="button" 
                        value={abilityModifier(characters.list.filter((player) => { return player.id === p.id})[0].dex)} 
                        onClick={() => {rollPlayer(p.id)}} 
                        className="btn green" 
                        style={{"width": "10ch"}}/> */}
            <input type="number" id={p.id} name={p.id}
              value={p.init}
              onChange={(e) => setInitiative([...initiative.filter((f) => {return f._id !== p._id}), { ...p, init: e.target.value }])}
              style={{ width: "5ch" }}
            />
          </div>
        ))}

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
                  {encounter.monsters.filter((m) => { return m._id === c._id })[0].name}
                </div>
                <input type="button" className="btn green" style={{ width: "10ch" }}
                  value={abilityModifier(encounter.monsters.filter((m) => { return m._id === c._id })[0].dex)}
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

      <input type="button" className="btn green"
        value="Save"
        onClick={ (e) => { saveInitiative( initiative ) } }
      />
    </>
  );
};

const CombatantList = ({ encounter, characters, displayCombatant, setSelected, changeHP }) => {
  useEffect(() => {
    setSelected(encounter.initiative[encounter.turn]);
    return () => {};
  }, []);

  return (
    <>
      {/* sort the initiative list, highest init to lowest */}
      {encounter.initiative
        .sort((a, b) => b.init - a.init)
        .map((combatant, index) => (
          <div key={combatant._id}>
            <Combatant
              combatant={combatant}
              index={index}
              encounter={encounter}
              characters={characters}
              displayCombatant={displayCombatant}
              changeHP={changeHP}
            ></Combatant>
          </div>
        ))}
    </>
  );
};

const Combatant = ({
  combatant,
  index,
  characters,
  displayCombatant,
  encounter,
  changeHP
}) => {
  const [details, setDetails] = useState();

  useEffect(() => {
    if (characters && combatant && combatant.enemy === "pc") {
      setDetails(characters.filter((c) => c._id === combatant._id)[0]);
    } else if (combatant && combatant.enemy === "monster")
      setDetails(encounter.monsters.filter((m) => m._id === combatant._id)[0]);
    return () => {};
  }, [combatant, characters]);

  return (
    <>
      {details && (
        <div key={details.id} className="combatant-item" style={encounter.turn === index 
          ? { backgroundColor: "lightgreen" }
          : { backgroundColor: "white" }
        }>
          <div className="initiative" style={{ backgroundColor: "green", color: "white", width: "40px" }}>{combatant.init}</div>
          <div className="details" style={{width: "100%"}}
            // onClick={() => {
            //   combatant.enemy === "monster"
            //     ? displayCombatant(
            //         encounter.monsters.filter((m) => m.id === combatant.id)[0]
            //       )
            //     : displayCombatant(
            //         characters.list.filter((c) => c.id === combatant.id)[0]
            //       );
            // }}
          >
            <h2>{details.name}</h2>
            <p>Invisible, Blinded</p>
          </div>

          <div className="hitpoints" style={{cursor: "pointer"}} onClick={() => { changeHP(combatant)} }
          >
            <h2>
              {details.maxHp}
              {details.maxHP}/{details.maxHp}
              {details.maxHP}
            </h2>
          </div>
        </div>
      )}
    </>
  );
};
  
const CombatantDetails = ({ combatant, doDamage }) => {
  return (
    <>
    <div className={styles.mainpanel}>
      <div className={styles.title}>
        <h3>{combatant.name}</h3>
      </div>

        <div className={styles.abilityrow}>

          <div className={styles.abilitybox}>
            <h2>Str</h2>
            <button className={styles.btn}
              onClick={() => {
                window.alert(diceRoll(1, 20, abilityModifier(combatant.str))[2]);
              }}
            >
              {combatant.str}
            </button>
            <button className={styles.btn}>Save</button>
            {combatant.skills && combatant.skills.includes('Athletics') && <button className={styles.btn}>Athletics</button>}
          </div>

          <div className={styles.abilitybox}>
            <h2>Dex</h2>
            <button className={styles.btn}
              onClick={() => {
                window.alert(diceRoll(1, 20, abilityModifier(combatant.dex))[2]);
              }}
            >
              {combatant.dex}
            </button>
            <button className={styles.btn}>Save</button>
            {combatant.skills && combatant.skills.includes('Acrobatics') && <button className={styles.btn}>Acrobatics</button>}
            {combatant.skills && combatant.skills.includes('Sleight of Hand') && <button className={styles.btn}>Sleight of Hand</button>}
            {combatant.skills && combatant.skills.includes('Stealth') && <button className={styles.btn}>Stealth</button>}
          </div>

          <div className={styles.abilitybox}>
            <h2>Con</h2>
            <button className={styles.btn}
              onClick={() => {
                window.alert(diceRoll(1, 20, abilityModifier(combatant.con))[2]);
              }}
            >
              {combatant.con}
            </button>
            <button className={styles.btn}>Save</button>
          </div>

          <div className={styles.abilitybox}>
            <h2>Int</h2>
            <button className={styles.btn}
              onClick={() => {
                window.alert(diceRoll(1, 20, abilityModifier(combatant.int))[2]);
              }}
            >
              {combatant.int}
            </button>
            <button className={styles.btn}>Save</button>
            {combatant.skills && combatant.skills.includes('Arcana') && <button className={styles.btn}>Arcana</button>}
            {combatant.skills && combatant.skills.includes('History') && <button className={styles.btn}>History</button>}
            {combatant.skills && combatant.skills.includes('Investigation') && <button className={styles.btn}>Investigation</button>}
            {combatant.skills && combatant.skills.includes('Nature') && <button className={styles.btn}>Nature</button>}
            {combatant.skills && combatant.skills.includes('Religion') && <button className={styles.btn}>Religion</button>}
          </div>

          <div className={styles.abilitybox}>
            <h2>Wis</h2>
            <button className={styles.btn}
              onClick={() => {
                window.alert(diceRoll(1, 20, abilityModifier(combatant.wis))[2]);
              }}
            >
              {combatant.wis}
            </button>
            <button className={styles.btn}>Save</button>
            {combatant.skills && combatant.skills.includes('Animal Handling') && <button className={styles.btn}>Animal Handling</button>}
            {combatant.skills && combatant.skills.includes('Insight') && <button className={styles.btn}>Insight</button>}
            {combatant.skills && combatant.skills.includes('Medicine') && <button className={styles.btn}>Medicine</button>}
            {combatant.skills && combatant.skills.includes('Perception') && <button className={styles.btn}>Perception</button>}
            {combatant.skills && combatant.skills.includes('Survival') && <button className={styles.btn}>Survival</button>}
          </div>

          <div className={styles.abilitybox}>
            <h2>Cha</h2>
            <button className={styles.btn}
              onClick={() => {
                window.alert(diceRoll(1, 20, abilityModifier(combatant.cha))[2]);
              }}
            >
              {combatant.cha}
            </button>
            <button className={styles.btn}>Save</button>
            {combatant.skills && combatant.skills.includes('Deception') && <button className={styles.btn}>Deception</button>}
            {combatant.skills && combatant.skills.includes('Intimidation') && <button className={styles.btn}>Intimidation</button>}
            {combatant.skills && combatant.skills.includes('Performance') && <button className={styles.btn}>Performance</button>}
            {combatant.skills && combatant.skills.includes('Persuasion') && <button className={styles.btn}>Persuasion</button>}
          </div>
        </div>

        {combatant.traits &&
          <div className={styles.traits}>
            <h2>Actions</h2>
            {combatant.traits && combatant.traits.map((trait) => (
              <div className={styles.trait}>
                <h2>{trait.name}</h2>
                <p>{trait.description}</p>
              </div>
            ))}
          </div>}
        
        {combatant.actions &&
        <div className={styles.actions}>
          {combatant.actions && combatant.actions.map((action) => (

              <div key={action.name} className={styles.action}>
                <h2>{action.name}</h2>
                <p>{action.description}</p>
                {action.attack && action.attack > 0 ? (
                  <button className={styles.btn}
                    onClick={() => {
                      doDamage({_id: combatant._id, name: combatant.name, enemy: combatant.enemy}, action)
                    }}
                  >
                    +{action.attack}
                  </button>
                ): <></>}
                {action.damage && (
                  <button
                    onClick={() => {
                      window.alert(
                        diceRoll(
                          action.damage.dice,
                          action.damage.sides,
                          action.damage.bonus
                        )[2]
                      );
                    }}
                  >
                    damage: {action.damage.dice}d{action.damage.sides}+
                    {action.damage.bonus}
                  </button>
                )}
              </div>

            ))}

        </div>}
      </div>
    </>
  );
};

const DamageCalculator = ({characters, monsters, tempCombatant, editEncounter, setCampaign}) => {
  const [ combatant, setCombatant ] = useState()
  const [ damage, setDamage ] = useState(0)

  useEffect(() => {
    if (tempCombatant && characters && monsters) {
      console.log(tempCombatant)
      switch (tempCombatant.enemy) {
        case 'pc':
          console.log('pc')
          setCombatant(characters.filter(character => character._id === tempCombatant._id)[0])
          break
        case 'monster':
          console.log('monster')
          setCombatant(monsters.filter(monster => monster._id === tempCombatant._id)[0])
          break

      }
    }
  
    return () => {}
  }, [tempCombatant, characters, monsters])

  const applyDamage = (addRremove, amount) => {
    switch (addRremove) {
      case 'damage':
        const damageTotal = combatant.currentHp - amount
        damageTotal < 0 
          ? setCombatant({...combatant, currentHp: 0}) 
          : setCombatant({...combatant, currentHp: damageTotal})
          break
      case 'heal':
        const healTotal = combatant.currentHp + amount
        healTotal > combatant.maxHp 
          ? setCombatant({...combatant, currentHp: combatant.maxHp}) 
          : setCombatant({...combatant, currentHp: healTotal})
    }
  }
  
  return (
    <div id='damage-calculator'>
      <h2>Damage Calculator</h2>

      {combatant && 
      <div>
        <h2>{combatant.name}</h2>
        <div className='flex-row'>
          <input 
            type='number' 
            max={combatant.maxHP} 
            min='0' 
            value={combatant.currentHp} 
            onChange={(e) => setCombatant({...combatant, currentHp: parseInt(e.target.value)})}>
          </input>
        </div>

        <form className='flex-row'>
          <button onClick={(e) => {e.preventDefault(); damage > 0 && setDamage(damage - 1)}}>{"<"}</button>
          <input
            type='number'
            value={damage}
            onChange={(e) => {setDamage(parseInt(e.target.value))}}
            ></input>
          <button onClick={(e) => {e.preventDefault(); setDamage(damage + 1)}}>{">"}</button>
          <button onClick={(e) => {e.preventDefault(); applyDamage('heal', damage)}}>Heal</button>
          <button onClick={(e) => {e.preventDefault(); applyDamage('damage', damage)}}>Damage</button>
        </form>
      </div>}
    </div>
  );
}

const DoAttack = ({tempCombatant, encounter, characters}) => {
  const [ toHitRoll, setToHitRoll ] = useState();
  const [ targets, setTargets ] = useState([]);
  const [ combatants, setCombatants ] = useState();
  const [ combatantsHit, setCombatantsHit ] = useState([]);
  const [ criticalHit, setCriticalHit ] = useState(false);
  const [ criticalMiss, setCriticalMiss ] = useState(false);

  useEffect(() => {
    const combatList = []
    if (encounter && characters) {
      console.log(encounter.initiative)
      console.log(encounter.monsters)
      console.log(characters)

      encounter.initiative.forEach(combatant => {
        switch (combatant.enemy) {
          case 'monster':
            combatList.push( encounter.monsters.filter( monster => monster._id === combatant._id )[0] )
            break
          case 'pc':
            combatList.push( characters.filter( pc => pc._id === combatant._id)[0])
        }
      })
    }
    setCombatants(combatList)
  
    return () => {}
  }, [tempCombatant, encounter, characters])

  useEffect(() => {
    console.log(targets)
    if ( targets && targets.length > 0 && toHitRoll ) {
      targets.forEach(target => {
        const combatant = combatants.filter(c => c._id === target)[0]
        if (parseInt(toHitRoll[0]) == 20) {
          console.log(`critical hit, hits all`);
          setCombatantsHit([...combatantsHit, combatant])
          setCriticalHit(true)
        }
        else if (parseInt(toHitRoll[0]) == 1) {
          console.log("critical miss, misses all")
        }
        else if (toHitRoll[2] >= parseInt(combatant.ac)) {
          console.log(`hit ${combatant.name}`);
          setCombatantsHit([...combatantsHit, combatant])
        } 
        else console.log(`didn't hit ${combatant.name}`)
      })
    }
  
    return () => {}
  }, [toHitRoll, targets])
  
  
  return (
    <>
      <h2>{`${tempCombatant.attacker.name} uses ${tempCombatant.attack.name}`}</h2>
      <p>{tempCombatant.attack.description}</p>
      <hr></hr>
      {/* <p>The to hit is {tempCombatant.attack.attack}</p> */}

      <h2>Targets</h2>
      {encounter &&
        <div>
          {encounter.initiative.map(target => (
            <div key={target._id} className={styles.targets}>
              <input type='checkbox' 
                checked={targets.includes(target._id)} 
                onChange={(e) => {targets.includes(target._id) 
                  ? setTargets([...targets.filter(t => t._id !== e.target.value._id)]) 
                  : setTargets([...targets, target._id])}}></input>
              
              <p>{target.name}</p>
              <p>{target.enemy}: </p>
            </div>
          ))}
        </div>
      
      }
      
      <button onClick={() => {setToHitRoll(diceRoll(1,20,tempCombatant.attack.attack))}}>{tempCombatant.attack.attack}</button>
      {toHitRoll &&
      <>
      
      <p>{`You rolled ${toHitRoll[0]} with a bonus ${toHitRoll[1]}. Your total is ${toHitRoll[2]}`}</p>
      </>
      }
    </>
  );
}

export async function getServerSideProps(context) {
    const {db} = await connectToDatabase()
    const id = new ObjectId(context.params.id)
    let response = await db.collection("encounters").find({_id: id}).toArray()
    const encounter = await JSON.parse(JSON.stringify(response))

    return {
        props: {initialEncounter: encounter[0]}
    }
}