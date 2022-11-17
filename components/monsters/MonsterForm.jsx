import { useState, useRef, useEffect } from "react";
import { SpellList } from "../../pages/spells";
import { sizes, types, crRange, sensesList, abilityList, languagesList, skillList, damageTypes, conditions, spellSlotLevels } from "../../utils/Forms";
import { abilityModifier, skillToAbility, calculateProficiencyBonus } from "../../utils/utils";
import { SplitButton } from "primereact/splitbutton";
import { TieredMenu } from "primereact/tieredmenu";
import { FaDiceSix, FaWindowClose } from "react-icons/fa";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

import styles from './MonsterForm.module.css'
import { v4 as uuidv4 } from "uuid";

export default function MonsterForm ({ selected, setSelected, update, saveAsNew, setModal: setParentModal=() => console.log('nothing') }) {
    const api = "/api/";
    const [ modal, setModal ] = useState({ on: false, view: "" });
    const [ tabs, setTabs ] = useState("details");
    const [ item, setItem ] = useState();
    const [ trait, setTrait ] = useState();
    const [ action, setAction ] = useState();
    const [ spells, setSpells ] = useState();
    const actionTemplate = {
       name: "",
       description: "",
       attack: 0,
       damage1: { enabled: false },
       damage2: { enabled: false },
       damage3: { enabled: false },
       dc: {},
    };
    const [ legendary, setLegendary ] = useState();
    const [ monsters, setMonsters ] = useState([]);
 
    // new skills button
    const skillsMenu = useRef(null);
    const menuModel = () => {
       const currentSkills = []
       item?.skills.forEach(skill => {
          currentSkills.push(skill.name)
       })
       // console.log(currentSkills)
       const items = skillList.filter(skill => {return !currentSkills.includes(skill)})
       // console.log(items)
       return items.map(s => (
          {
             label: s,
             command: (e) => {
                console.log(item);
                setItem({...item, skills: [...item.skills, {name: s, level: 'none', bonus: abilityModifier(item[skillToAbility(s)])}]}),
                skillsMenu.current.toggle(e)}
 
          }
       ))
    }
 
    useEffect(() => {
       // set item to value of selected
       if (selected) setItem(selected);
       if (selected?.spells) {
          const getSpells = async () => {
             const response = await fetch(`${api}spells`, {
                method: "POST",
                body: JSON.stringify({
                   action: "monster",
                   data: { name: { $in: selected.spells } },
                   sort: {},
                }),
                headers: { "Content-type": "application/json; charset=UTF-8" },
             });
             const spellList = await response.json();
             // setItemOffset(0)
             setSpells(spellList);
          };
          getSpells();
       }
 
       return () => {};
    }, [selected]);
 
    const editTrait = (trait) => {
       console.log(trait);
       trait._id &&
          setItem({
             ...item,
             traits: [...item.traits.filter((f) => f._id !== trait._id), trait],
          });
       !trait._id &&
          setItem({
             ...item,
             traits: [...item.traits, { ...trait, _id: uuidv4() }],
          });
       setModal({ on: false, view: "" }); // close the action form
    };
 
    const deleteTrait = (traitId) => {
       setItem({
          ...item,
          traits: [...item.traits.filter((f) => f._id !== traitId)],
       });
    };
 
    const editAction = async (action) => {
       console.log(action);
       const damages = {};
       // add damages if enabled, otherwise just set to disabled with no keys
       if (action.damage1.enabled) {
          damages.damage1 = action.damage1;
       } else damages.damage1 = { enabled: false };
       if (action.damage2.enabled) {
          damages.damage2 = action.damage2;
       } else damages.damage2 = { enabled: false };
       if (action.damage3.enabled) {
          damages.damage3 = action.damage3;
       } else damages.damage3 = { enabled: false };
 
       console.log(damages);
       // if there's an id then do an edit, otherwise add a new item to actions with new generated id
       action._id &&
          setItem({
             ...item,
             actions: [
                ...item.actions.filter((f) => f._id !== action._id),
                { ...action, ...damages },
             ],
          });
       !action._id &&
          setItem({
             ...item,
             actions: [
                ...item.actions,
                { ...action, _id: uuidv4(), ...damages },
             ],
          });
       setModal({ on: false, view: "" }); // close the action form
    };
 
    const deleteAction = (actionId) => {
       setItem({
          ...item,
          actions: [...item.actions.filter((f) => f._id !== actionId)],
       });
    };
 
    const editLegendary = (legendary) => {
       console.log("edit legendary");
    };
 
    const setSpellslots = (level, value) => {
       let spellslots = item.spellSlots;
       if (spellslots === undefined) spellslots = [];
       spellslots[level] = parseInt(value);
       setItem({ ...item, spellSlots: spellslots });
    };
 
    const addSpell = (spell) => {
       console.log(spell);
       if (item?.spells) {
          setItem({
             ...item,
             spells: [...item.spells, spell.name.toLowerCase()],
          });
          setSpells([...spells, spell]);
       } else {
          setItem({ ...item, spells: [spell.name.toLowerCase()] });
          setSpells([spell]);
       }
    };
 
    const deleteSpell = (spell) => {
       setItem({
          ...item,
          spells: item.spells.filter((f) => {
             return f !== spell.toLowerCase();
          }),
       });
       setSpells([
          ...spells.filter((f) => {
             return f.name !== spell;
          }),
       ]);
    };
 
    const updateSkillLevel = (name, level) => {
       let skill = item.skills.filter(item => {return item.name === name})[0]
       let bonus = abilityModifier(item[skillToAbility(name)])
       switch (level) {
          case 'none':
             break
          case 'proficient':
             bonus += calculateProficiencyBonus(item.cr)
             break
          case 'expert':
             bonus += (calculateProficiencyBonus(item.cr) * 2)
             break
       }
 
       const newSkillList = [...item.skills.filter(item => item.name !== name), {...skill, level, bonus}]
       setItem({...item, skills: newSkillList})
    }
 
    const updateSkillBonus = (skill, value) => {
       setItem({...item, skills: [...item.skills.filter(item => {return skill.name !== item.name}), {...skill, bonus: value}]})
    }
 
    const deleteSkill = (skill) => {
       setItem({...item, skills: [...item.skills.filter(item => {return skill.name !== item.name})]})
    }
 
    return (
    <>
        {/* modal window */}
        {modal.on && (
            <>
            <Dialog visible={modal.on} onHide={() => setModal({on: false, type: ''})} header={modal.view} style={{width: "100%", maxWidth: "45rem"}}>

                {modal.view === "trait" && (
                    <form
                        className={styles.trait_form}
                        id="action-form"
                        onSubmit={(e) => {
                        e.preventDefault();
                        editTrait(trait);
                        }}
                    >
                        <h2>Trait Form</h2>
                        <input
                        type="text"
                        value={trait.name}
                        onChange={(e) =>
                            setTrait({ ...trait, name: e.target.value })
                        }
                        ></input>
                        <textarea
                        rows="10"
                        type="text"
                        value={trait.description}
                        onChange={(e) =>
                            setTrait({
                                ...trait,
                                description: e.target.value,
                            })
                        }
                        ></textarea>
                        <button className={styles.action_save} type="submit">
                        Save
                        </button>
                    </form>
                )}

                {modal.view === "action" && (
                    <>
                        {/* <h2>Action Form</h2> */}
                        <form
                        className={styles.action_form}
                        id="action-form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            editAction(action);
                        }}
                        >
                        <input
                            required
                            className={styles.action_name}
                            type="text"
                            value={action.name}
                            onChange={(e) => {
                                setAction({ ...action, name: e.target.value });
                            }}
                        ></input>
                        <textarea
                            className={styles.action_description}
                            rows="10"
                            value={action.description}
                            onChange={(e) => {
                                setAction({
                                    ...action,
                                    description: e.target.value,
                                });
                            }}
                        ></textarea>
                        {/* <input type='checkbox' checked={action.attackEnabled} onChange={(e) => {setAction({...action, attackEnabled: !attackEnabled})}}></input> */}
                        <label className={styles.action_lblToHit}>
                            To Hit
                        </label>
                        <input
                            className={styles.action_chkToHit}
                            type="checkbox"
                        ></input>
                        <input
                            className={styles.action_toHit}
                            type="number"
                            min="0"
                            id="to-hit"
                            value={action.attack}
                            onChange={(e) => {
                                setAction({
                                    ...action,
                                    attack: e.target.value,
                                });
                            }}
                        ></input>

                        {action.damage1 && (
                            <>
                                <label className={styles.action_dmg1Label}>
                                    Damage 1
                                </label>
                                <input
                                    className={styles.action_dmg1Chk}
                                    type="checkbox"
                                    checked={action.damage1.enabled}
                                    onChange={(e) => {
                                    setAction({
                                        ...action,
                                        damage1: {
                                            ...action.damage1,
                                            enabled: !action.damage1.enabled,
                                        },
                                    });
                                    }}
                                ></input>
                                <input
                                    className={styles.action_dmg1Option1}
                                    disabled={!action.damage1.enabled}
                                    type="number"
                                    min="1"
                                    required
                                    value={action.damage1.hdDice}
                                    onChange={(e) => {
                                    setAction({
                                        ...action,
                                        damage1: {
                                            ...action.damage1,
                                            hdDice: parseInt(e.target.value),
                                        },
                                    });
                                    }}
                                ></input>
                                <input
                                    className={styles.action_dmg1Option2}
                                    disabled={!action.damage1.enabled}
                                    type="number"
                                    min="1"
                                    required
                                    value={action.damage1.hdSides}
                                    onChange={(e) => {
                                    setAction({
                                        ...action,
                                        damage1: {
                                            ...action.damage1,
                                            hdSides: parseInt(e.target.value),
                                        },
                                    });
                                    }}
                                ></input>
                                <input
                                    className={styles.action_dmg1Option3}
                                    disabled={!action.damage1.enabled}
                                    type="number"
                                    min="0"
                                    required
                                    value={action.damage1.hdBonus}
                                    onChange={(e) => {
                                    setAction({
                                        ...action,
                                        damage1: {
                                            ...action.damage1,
                                            hdBonus: parseInt(e.target.value),
                                        },
                                    });
                                    }}
                                ></input>
                                <select
                                    className={styles.action_dmg1Option4}
                                    disabled={!action.damage1.enabled}
                                    value={action.damage1.type}
                                    onChange={(e) => {
                                    setAction({
                                        ...action,
                                        damage1: {
                                            ...action.damage1,
                                            type: e.target.value,
                                        },
                                    });
                                    }}
                                >
                                    {damageTypes.map((type, i) => (
                                    <option key={i} value={type}>
                                        {type}
                                    </option>
                                    ))}
                                </select>
                            </>
                        )}

                        {action.damage2 && (
                            <>
                                <label className={styles.action_dmg2Label}>
                                    Damage 2
                                </label>
                                <input
                                    type="checkbox"
                                    className={styles.action_dmg2Chk}
                                    checked={action.damage2.enabled}
                                    onChange={(e) => {
                                    setAction({
                                        ...action,
                                        damage2: {
                                            ...action.damage2,
                                            enabled: !action.damage2.enabled,
                                        },
                                    });
                                    }}
                                ></input>
                                <input
                                    className={styles.action_dmg2Option1}
                                    disabled={!action.damage2.enabled}
                                    type="number"
                                    min="1"
                                    required
                                    value={action.damage2.hdDice}
                                    onChange={(e) => {
                                    setAction({
                                        ...action,
                                        damage2: {
                                            ...action.damage2,
                                            hdDice: parseInt(e.target.value),
                                        },
                                    });
                                    }}
                                ></input>
                                <input
                                    className={styles.action_dmg2Option2}
                                    disabled={!action.damage2.enabled}
                                    type="number"
                                    min="1"
                                    required
                                    value={action.damage2.hdSides}
                                    onChange={(e) => {
                                    setAction({
                                        ...action,
                                        damage2: {
                                            ...action.damage2,
                                            hdSides: parseInt(e.target.value),
                                        },
                                    });
                                    }}
                                ></input>
                                <input
                                    className={styles.action_dmg2Option3}
                                    disabled={!action.damage2.enabled}
                                    type="number"
                                    min="0"
                                    required
                                    value={action.damage2.hdBonus}
                                    onChange={(e) => {
                                    setAction({
                                        ...action,
                                        damage2: {
                                            ...action.damage2,
                                            hdBonus: parseInt(e.target.value),
                                        },
                                    });
                                    }}
                                ></input>
                                <select
                                    className={styles.action_dmg2Option4}
                                    disabled={!action.damage2.enabled}
                                    value={action.damage2.type}
                                    onChange={(e) => {
                                    setAction({
                                        ...action,
                                        damage2: {
                                            ...action.damage2,
                                            type: e.target.value,
                                        },
                                    });
                                    }}
                                >
                                    {damageTypes.map((type, i) => (
                                    <option key={i} value={type}>
                                        {type}
                                    </option>
                                    ))}
                                </select>
                            </>
                        )}

                        {action.damage3 && (
                            <>
                                <label className={styles.action_dmg3Label}>
                                    Damage 3
                                </label>
                                <input
                                    className={styles.action_dmg3Chk}
                                    type="checkbox"
                                    checked={action.damage3.enabled}
                                ></input>
                                <input
                                    className={styles.action_dmg3Option1}
                                    disabled={!action.damage3.enabled}
                                    type="number"
                                    min="1"
                                    required
                                    value={action.damage3.hdDice}
                                    onChange={(e) => {
                                    setAction({
                                        ...action,
                                        damage3: {
                                            ...action.damage3,
                                            hdDice: parseInt(e.target.value),
                                        },
                                    });
                                    }}
                                ></input>
                                <input
                                    className={styles.action_dmg3Option2}
                                    disabled={!action.damage3.enabled}
                                    type="number"
                                    min="1"
                                    required
                                    value={action.damage3.hdSides}
                                    onChange={(e) => {
                                    setAction({
                                        ...action,
                                        damage3: {
                                            ...action.damage3,
                                            hdSides: parseInt(e.target.value),
                                        },
                                    });
                                    }}
                                ></input>
                                <input
                                    className={styles.action_dmg3Option3}
                                    disabled={!action.damage3.enabled}
                                    type="number"
                                    min="0"
                                    required
                                    value={action.damage3.hdBonus}
                                    onChange={(e) => {
                                    setAction({
                                        ...action,
                                        damage3: {
                                            ...action.damage3,
                                            hdBonus: parseInt(e.target.value),
                                        },
                                    });
                                    }}
                                ></input>
                                <select
                                    className={styles.action_dmg3Option4}
                                    disabled={!action.damage3.enabled}
                                    value={action.damage3.type}
                                    onChange={(e) => {
                                    setAction({
                                        ...action,
                                        damage3: {
                                            ...action.damage3,
                                            type: e.target.value,
                                        },
                                    });
                                    }}
                                >
                                    {damageTypes.map((type, i) => (
                                    <option key={i} value={type}>
                                        {type}
                                    </option>
                                    ))}
                                </select>
                            </>
                        )}

                        <button className={styles.action_save} type="submit">
                            Save
                        </button>
                        </form>
                    </>
                )}
                {modal.view === "spell" && (
                    <SpellList setSelected={addSpell} setModal={setModal} />
                )}
                {modal.view === "legendary" && (
                    <>
                        <h2>Legendary Form</h2>
                        <input type="text" value={item.name}></input>
                        <textarea
                        type="text"
                        rows={10}
                        value={item.text}
                        ></textarea>
                        <input type="number" value={item.cost}></input>
                        <input type="number" value={item.actions}></input>
                    </>
                )}
            {/* </div> */}
            {/* </div> */}
            </Dialog>
            </>
        )}
 
        {item && (
            <form className={styles.form}>
            {/* tabs for sections */}
                <div className={styles.tabs}>
                    <SplitButton 
                        className="p-button-sm mr-2 mb-2"
                        label="Save"
                        model={saveAsNew ? [{
                            label: 'Save as new',
                            // icon: 'pi pi-refresh',
                            command: () => {
                            let newItem = {...item}
                            if (item.name === selected.name) newItem.name = item.name + ' (copy)';
                            saveAsNew({...newItem, _id: undefined}, true)
                            }
                        }]
                    : []}
                        onClick={(e) => {e.preventDefault(); update(item); setParentModal({ on: false, type: "" })}} />
                    <button
                        type="button"
                        className={styles.tab}
                        style={
                            tabs === "details" ? { backgroundColor: "var(---paper)" } : {}
                        } onClick={() => {
                            setTabs("details");
                        }}
                    > Details
                    </button>
                    <button
                        type="button"
                        className={styles.tab}
                        style={
                            tabs === "skills" ? { backgroundColor: "var(---paper)" } : {}
                        }
                        onClick={() => {
                            setTabs("skills");
                        }}
                    >
                        skills
                    </button>
                    <button
                        type="button"
                        className={styles.tab}
                        style={
                            tabs === "resist" ? { backgroundColor: "var(---paper)" } : {}
                        }
                        onClick={() => {
                            setTabs("resist");
                        }}
                    >
                        resistance
                    </button>
                    <button
                        type="button"
                        className={styles.tab}
                        style={
                            tabs === "traits" ? { backgroundColor: "var(---paper)" } : {}
                        }
                        onClick={() => {
                            setTabs("traits");
                        }}
                    >
                        traits
                    </button>
                    <button
                        type="button"
                        className={styles.tab}
                        style={
                            tabs === "actions" ? { backgroundColor: "var(---paper)" } : {}
                        }
                        onClick={() => {
                            setTabs("actions");
                        }}
                    >
                        actions
                    </button>
                    <button
                        type="button"
                        className={styles.tab}
                        style={
                            tabs === "legend" ? { backgroundColor: "var(---paper)" } : {}
                        }
                        onClick={() => {
                            setTabs("legend");
                        }}
                    >
                        legendary
                    </button>
                    <button
                        type="button"
                        className={styles.tab}
                        style={
                            tabs === "spells" ? { backgroundColor: "var(---paper)" } : {}
                        }
                        onClick={() => {
                            setTabs("spells");
                        }}
                    >
                        spells
                    </button>
                </div>

                <div
                    className={styles.details}
                    style={
                        tabs === "details"
                            ? { display: "flex" }
                            : { display: "none" }
                    }
                >
                    <div className={styles.detailsRow}>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        required
                        placeholder="name"
                        value={item.name}
                        onChange={(e) => {
                            setItem({ ...item, name: e.target.value });
                        }}
                    />
                    </div>
                    <div className={styles.detailsRow}>
                    <label htmlFor="picture">Picture:</label>
                    <input
                        id="picture"
                        type="text"
                        placeholder="picture url"
                        value={item.picture_url}
                        onChange={(e) => {
                            setItem({
                            ...item,
                            picture_url: e.target.value,
                            });
                        }}
                    />
                    </div>

                    <div className={styles.detailsRow}>
                        <label htmlFor="type">Size:</label>
                        <select
                            name="size"
                            id="size"
                            value={item.size}
                            onChange={(e) => {
                            setItem({ ...item, size: e.target.value });
                            }}
                        >
                            {sizes.map((o) => (
                            <option key={o} value={o}>
                                {o}
                            </option>
                            ))}
                        </select>

                        <label htmlFor="type">Type:</label>
                        <select
                            name="type"
                            id=""
                            value={item.type}
                            onChange={(e) => {
                            setItem({ ...item, type: e.target.value });
                            }}
                        >
                            {types.map((o) => (
                            <option key={o} value={o}>
                                {o}
                            </option>
                            ))}
                        </select>

                        <label htmlFor="ac">AC:</label>
                        <input
                            id="ac"
                            type="number"
                            placeholder="ac"
                            required
                            value={item.ac}
                            onChange={(e) => {
                            setItem({ ...item, ac: e.target.value });
                            }}
                        />
                    </div>

                    <div className={styles.detailsRow}>
                    {/* <label htmlFor="descr">Description: </label> */}
                    <textarea
                        id="descr"
                        rows="10"
                        type="text"
                        placeholder="description"
                        value={item.description}
                        onChange={(e) => {
                            setItem({
                            ...item,
                            description: e.target.value,
                            });
                        }}
                    />
                    </div>

                    {item && item.hitDice && (
                        <div className={styles.detailsRow}>
                            <label htmlFor="dice">Hit Dice:</label>
                            <input
                            id="dice"
                            type="number"
                            placeholder="dice"
                            required
                            value={item.hitDice.hdDice}
                            onChange={(e) => {
                                setItem({
                                    ...item,
                                    hitDice: {
                                        ...item.hitDice,
                                        hdDice: e.target.value,
                                    },
                                });
                            }}
                            />

                            <label htmlFor="sides"> d </label>
                            <input
                            id="sides"
                            type="number"
                            placeholder="sides"
                            required
                            value={item.hitDice.hdSides}
                            onChange={(e) => {
                                setItem({
                                    ...item,
                                    hitDice: {
                                        ...item.hitDice,
                                        hdSides: e.target.value,
                                    },
                                });
                            }}
                            />

                            <label htmlFor="bonus"> + </label>
                            <input
                            id="bonus"
                            type="number"
                            placeholder="bonus"
                            required
                            value={item.hitDice.hdBonus}
                            onChange={(e) => {
                                setItem({
                                    ...item,
                                    hitDice: {
                                        ...item.hitDice,
                                        hdBonus: e.target.value,
                                    },
                                });
                            }}
                            />

                            <FaDiceSix
                            className="tooltip"
                            title="Roll hitpoints"
                            color="green"
                            style={{ width: "20ch", height: "30px" }}
                            onClick={() => {
                                setItem({
                                    ...item,
                                    maxHp: diceRoll(
                                        item.hitDice.hdDice,
                                        item.hitDice.hdSides,
                                        item.hitDice.hdBonus
                                    )[2],
                                });
                            }}
                            ></FaDiceSix>
                            <label htmlFor="hp">HP:</label>
                            <input
                            id="maxHp"
                            type="number"
                            placeholder="HP"
                            required
                            value={item.maxHp}
                            onChange={(e) => {
                                setItem({
                                    ...item,
                                    maxHp: parseInt(e.target.value),
                                });
                            }}
                            />
                        </div>
                    )}

                    <div className={styles.detailsRow}>
                        <label htmlFor="walking">Speed:</label>
                        {item?.speed?.map((speed, index) => (
                            <input key={index} type="text" value={speed} onChange={(e) => {
                                const el = item.speed;
                                el[index] = e.target.value;
                                setItem({...item, speed: el})}}></input>
                        ))}
                        <button onClick={(e) => {e.preventDefault(), setItem({...item, speed: [...item.speed, ""]})}}>+</button>
                    </div>

                    <div className={styles.detailsRow}>
                        <label htmlFor="cr">Challenge:</label>
                        <select
                            name="cr"
                            id=""
                            value={item.cr}
                            onChange={(e) => {
                            setItem({
                                ...item,
                                cr: parseFloat(e.target.value),
                                xp: crToXp(e.target.value),
                            });
                            }}
                        >
                            {crRange.map((o) => (
                            <option key={o} value={o}>
                                {o}
                            </option>
                            ))}
                        </select>

                        <label htmlFor="xp">XP:</label>
                        <input
                            id="xp"
                            type="number"
                            placeholder="xp"
                            required
                            value={item.xp}
                            onChange={(e) => {
                            setItem({
                                ...item,
                                xp: parseInt(e.target.value),
                            });
                            }}
                        />
                    </div>

                    <fieldset>
                        <legend>Senses</legend>
                        <div className="flex-checkboxes">
                            {sensesList.map((c) => (
                                <div key={c} className="checkboxs">
                                <label>
                                <input
                                    title={c}
                                    style={{ cursor: "pointer" }}
                                    type="checkbox"
                                    name={c}
                                    checked={item.senses.includes(c)}
                                    value={c}
                                    onChange={(e) => {
                                        item.senses.includes(e.target.value)
                                            ? setItem({
                                                ...item,
                                                senses: [
                                                    ...item.senses.filter((f) => {
                                                    return f !== e.target.value;
                                                    }),
                                                ],
                                            })
                                            : setItem({
                                                ...item,
                                                senses: [
                                                    ...item.senses,
                                                    e.target.value,
                                                ],
                                            });
                                    }}
                                />
                                {c}</label>
                                </div>
                            ))}
                        </div>
                    </fieldset>

                    <div className={styles.detailsRow}>
                        <div className={styles.abilityBox}>
                            <label>Str</label>
                            <input
                            placeholder="str"
                            type="number"
                            required
                            value={item.str}
                            onChange={(e) => {
                                setItem({
                                    ...item,
                                    str: parseInt(e.target.value),
                                });
                            }}
                            />
                            <p>
                            {item.str > 11
                                ? `+ ${abilityModifier(item.str)}`
                                : abilityModifier(item.str)}
                            </p>
                        </div>

                        <div className={styles.abilityBox}>
                            <label>Dex</label>
                            <input
                            placeholder="dex"
                            type="number"
                            required
                            value={item.dex}
                            onChange={(e) => {
                                setItem({
                                    ...item,
                                    dex: parseInt(e.target.value),
                                });
                            }}
                            />
                            <p>
                            {item.dex > 11
                                ? `+ ${abilityModifier(item.dex)}`
                                : abilityModifier(item.dex)}
                            </p>
                        </div>

                        <div className={styles.abilityBox}>
                            <label>Con</label>
                            <input
                            placeholder="con"
                            type="number"
                            required
                            value={item.con}
                            onChange={(e) => {
                                setItem({
                                    ...item,
                                    con: parseInt(e.target.value),
                                });
                            }}
                            />
                            <p>
                            {item.con > 11
                                ? `+ ${abilityModifier(item.con)}`
                                : abilityModifier(item.con)}
                            </p>
                        </div>

                        <div className={styles.abilityBox}>
                            <label>Int</label>
                            <input
                            placeholder="int"
                            type="number"
                            required
                            value={item.int}
                            onChange={(e) => {
                                setItem({
                                    ...item,
                                    int: parseInt(e.target.value),
                                });
                            }}
                            />
                            <p>
                            {item.int > 11
                                ? `+ ${abilityModifier(item.int)}`
                                : abilityModifier(item.int)}
                            </p>
                        </div>

                        <div className={styles.abilityBox}>
                            <label>Wis</label>
                            <input
                            placeholder="wis"
                            type="number"
                            required
                            value={item.wis}
                            onChange={(e) => {
                                setItem({
                                    ...item,
                                    wis: parseInt(e.target.value),
                                });
                            }}
                            />
                            <p>
                            {item.wis > 11
                                ? `+ ${abilityModifier(item.wis)}`
                                : abilityModifier(item.wis)}
                            </p>
                        </div>

                        <div className={styles.abilityBox}>
                            <label>Cha</label>
                            <input
                            placeholder="cha"
                            type="number"
                            required
                            value={item.cha}
                            onChange={(e) => {
                                setItem({
                                    ...item,
                                    cha: parseInt(e.target.value),
                                });
                            }}
                            />
                            <p>
                            {item.cha > 11
                                ? `+ ${abilityModifier(item.cha)}`
                                : abilityModifier(item.cha)}
                            </p>
                        </div>
                    </div>

                    <fieldset>
                        <legend>Saves</legend>
                        <div className="flex-checkboxes">
                            {abilityList.map((c) => (
                                <div key={c} className="checkboxs">
                                <label>
                                <input
                                    title={c}
                                    style={{ cursor: "pointer" }}
                                    type="checkbox"
                                    name={c}
                                    checked={item.saves.includes(c)}
                                    value={c}
                                    onChange={(e) => {
                                        item.saves.includes(e.target.value)
                                            ? setItem({
                                                ...item,
                                                saves: [
                                                    ...item.saves.filter((f) => {
                                                    return f !== e.target.value;
                                                    }),
                                                ],
                                            })
                                            : setItem({
                                                ...item,
                                                saves: [
                                                    ...item.saves,
                                                    e.target.value,
                                                ],
                                            });
                                    }}
                                />
                                {c}</label>
                                </div>
                            ))}
                        </div>
                    </fieldset>
                </div>

                <div
                    className={styles.skills}
                    style={
                        tabs === "skills"
                            ? { display: "flex" }
                            : { display: "none" }
                    }
                >
                    <fieldset>
                        <legend>Languages</legend>
                        <div className="flex-checkboxes">
                            {languagesList.map((c) => (
                                <div key={c} className="checkboxs">
                                    <label>
                                    <input
                                    title={c}
                                    style={{ cursor: "pointer" }}
                                    type="checkbox"
                                    name={c}
                                    checked={item.languages.includes(c)}
                                    value={c}
                                    onChange={(e) => {
                                        item.languages.includes(e.target.value)
                                            ? setItem({
                                                ...item,
                                                languages: [
                                                    ...item.languages.filter(
                                                        (f) => {
                                                        return f !== e.target.value;
                                                        }
                                                    ),
                                                ],
                                            })
                                            : setItem({
                                                ...item,
                                                languages: [
                                                    ...item.languages,
                                                    e.target.value,
                                                ],
                                            });
                                    }}
                                    />
                                    {c}</label>
                                </div>
                            ))}
                        </div>
                    </fieldset>
                    <div className={styles.skillsEdit}>
                        {/* add new skill menu button */}
                        <TieredMenu model={menuModel()} popup ref={skillsMenu} id="overlay_tmenu" />
                        <Button label="New Skill" icon="pi pi-bars" onClick={(event) => {event.preventDefault(); skillsMenu.current.toggle(event)}} aria-haspopup aria-controls="overlay_tmenu" className="p-button-sm"/>
                        
                        {/* list of skills */}
                        <div className={styles.skillList}>
                            {item.skills.sort((a,b) => (a.name > b.name)).map((skill) => (
                            <div key={skill.name} className={styles.skillRow}>
                                <div style={{"minWidth": "8rem"}}><strong>{skill.name}</strong></div>

                                <label>
                                    <input type='radio' name={skill.name} id='none' checked={skill.level === 'none'} onChange={(e) => updateSkillLevel(skill.name, e.target.id)}></input>
                                none</label>

                                <label>
                                    <input type='radio' name={skill.name} id='proficient' checked={skill.level === 'proficient'} onChange={(e) => updateSkillLevel(skill.name, e.target.id)}></input>
                                proficient</label>

                                <label>
                                    <input type='radio' name={skill.name} id='expert' checked={skill.level === 'expert'} onChange={(e) => updateSkillLevel(skill.name, e.target.id)}></input>
                                expert</label>

                                <label>
                                    <input type='radio' name={skill.name} id='other' checked={skill.level === 'other'} onChange={(e) => updateSkillLevel(skill.name, e.target.id)}></input>
                                other</label>

                                <input type='number' value={skill.bonus} disabled={skill.level !== 'other'} onChange={(e) => updateSkillBonus(skill, e.target.value)} style={{maxWidth: "3rem"}}></input>
                                <Button className="p-button-sm" icon='pi pi-trash' onClick={(e) => {e.preventDefault(); deleteSkill(skill)}}></Button>

                            </div>
                            ))}
                        </div>

                    </div>
                </div>

                <div
                    className={styles.resistance}
                    style={
                        tabs === "resist"
                            ? { display: "flex" }
                            : { display: "none" }
                    }
                >
                    
                    <fieldset>
                            <legend>Vulnerabilities</legend>
                            <div className="flex-checkboxes">
                            {damageTypes.map((c) => (
                                <div key={c} className="checkboxs">
                                    <label>
                                    <input
                                        title={c}
                                        style={{ cursor: "pointer" }}
                                        type="checkbox"
                                        name={c}
                                        checked={item.vulnerabilities.includes(
                                        c
                                        )}
                                        value={c}
                                        onChange={(e) => {
                                        item.vulnerabilities.includes(
                                            e.target.value
                                        )
                                            ? setItem({
                                                ...item,
                                                vulnerabilities: [
                                                    ...item.vulnerabilities.filter(
                                                        (f) => {
                                                            return (
                                                            f !== e.target.value
                                                            );
                                                        }
                                                    ),
                                                ],
                                                })
                                            : setItem({
                                                ...item,
                                                vulnerabilities: [
                                                    ...item.vulnerabilities,
                                                    e.target.value,
                                                ],
                                                });
                                        }}
                                    />
                                    {c}</label>
                                </div>
                            ))}
                            </div>
                    </fieldset>

                    <fieldset>
                        <legend>Resistances</legend>
                        <div className="flex-checkboxes">
                        {damageTypes.map((c) => (
                            <div key={c} className="checkboxs">
                                <label>
                                <input
                                    title={c}
                                    style={{ cursor: "pointer" }}
                                    type="checkbox"
                                    name={c}
                                    checked={item.resistances.includes(c)}
                                    value={c}
                                    onChange={(e) => {
                                    item.resistances.includes(
                                        e.target.value
                                    )
                                        ? setItem({
                                            ...item,
                                            resistances: [
                                                ...item.resistances.filter(
                                                    (f) => {
                                                        return (
                                                        f !== e.target.value
                                                        );
                                                    }
                                                ),
                                            ],
                                            })
                                        : setItem({
                                            ...item,
                                            resistances: [
                                                ...item.resistances,
                                                e.target.value,
                                            ],
                                            });
                                    }}
                                />
                                {c}</label>
                            </div>
                        ))}
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Immuities</legend>
                        <div className="flex-checkboxes">
                        {damageTypes.map((c) => (
                            <div key={c} className="checkboxs">
                                <label>
                                <input
                                    title={c}
                                    style={{ cursor: "pointer" }}
                                    type="checkbox"
                                    name={c}
                                    checked={item.damageImmunity.includes(
                                    c
                                    )}
                                    value={c}
                                    onChange={(e) => {
                                    item.damageImmunity.includes(
                                        e.target.value
                                    )
                                        ? setItem({
                                            ...item,
                                            damageImmunity: [
                                                ...item.damageImmunity.filter(
                                                    (f) => {
                                                        return (
                                                        f !== e.target.value
                                                        );
                                                    }
                                                ),
                                            ],
                                            })
                                        : setItem({
                                            ...item,
                                            damageImmunity: [
                                                ...item.damageImmunity,
                                                e.target.value,
                                            ],
                                            });
                                    }}
                                />
                                {c}</label>
                            </div>
                        ))}
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Condition Immunity</legend>
                        <div className="flex-checkboxes">
                        {conditions.map((c) => (
                            <div key={c} className="checkboxs">
                                <label>
                                <input
                                    title={c}
                                    style={{ cursor: "pointer" }}
                                    type="checkbox"
                                    name={c}
                                    checked={item.conditionImmunity.includes(
                                    c
                                    )}
                                    value={c}
                                    onChange={(e) => {
                                    item.conditionImmunity.includes(
                                        e.target.value
                                    )
                                        ? setItem({
                                            ...item,
                                            conditionImmunity: [
                                                ...item.conditionImmunity.filter(
                                                    (f) => {
                                                        return (
                                                        f !== e.target.value
                                                        );
                                                    }
                                                ),
                                            ],
                                            })
                                        : setItem({
                                            ...item,
                                            conditionImmunity: [
                                                ...item.conditionImmunity,
                                                e.target.value,
                                            ],
                                            });
                                    }}
                                />
                                {c}</label>
                            </div>
                        ))}
                        </div>
                    </fieldset>
                    
                </div>

                <div
                    style={
                        tabs === "traits"
                            ? { display: "block" }
                            : { display: "none" }
                    }
                >
                    {/* traits */}
                    {item && item.traits && (
                        <div id="traits" className={styles.spaceColumns}>
                            {item.traits.map((trait, i) => (
                            <div className="flex-row" key={trait._id}>
                                <div
                                    className={styles.rowItem}
                                    style={{ textAlign: "left", width: "100%" }}
                                >
                                    <div
                                        className="flex-row"
                                        style={{ cursor: "pointer", width: "100%" }}
                                        onClick={() => {
                                        setTrait(trait);
                                        setModal({ on: true, view: "trait" });
                                        }}
                                    >
                                        {trait.name && (
                                        <h2
                                            style={{
                                                display: "inline-block",
                                                paddingRight: "1ch",
                                                width: "15ch",
                                                textAlign: "left",
                                            }}
                                        >
                                            {trait.name}:{" "}
                                        </h2>
                                        )}
                                        {trait.description && (
                                        <p
                                            style={{
                                                display: "inline-block",
                                                textAlign: "left",
                                                width: "100%",
                                            }}
                                        >
                                            {trait.description}
                                        </p>
                                        )}
                                    </div>
                                    <FaWindowClose
                                        size="20px"
                                        color="red"
                                        style={{
                                        cursor: "pointer",
                                        float: "right",
                                        }}
                                        onClick={() => deleteTrait(trait._id)}
                                    ></FaWindowClose>
                                </div>
                            </div>
                            ))}
                            <br />
                            <button
                            type="button"
                            className="btn blue"
                            style={{ float: "right" }}
                            onClick={() => {
                                setTrait({ name: "", description: "" });
                                setModal({ on: true, view: "trait" });
                            }}
                            >
                            New Trait
                            </button>
                        </div>
                    )}
                </div>

                <div
                    style={
                        tabs === "actions"
                            ? { display: "block" }
                            : { display: "none" }
                    }
                >
                    {/* actions */}
                    {item && item.actions && (
                        <div id="actions" className={styles.spaceColumns}>
                            {item.actions.map((action, i) => (
                            <div className="flex-row" key={i}>
                                <div
                                    className={styles.rowItem}
                                    style={{ textAlign: "left", width: "100%" }}
                                >
                                    <div
                                        className="flex-row"
                                        style={{ cursor: "pointer", width: "100%" }}
                                        onClick={() => {
                                        setAction(action);
                                        setModal({ on: true, view: "action" });
                                        }}
                                    >
                                        {action.name && (
                                        <h2
                                            style={{
                                                display: "inline-block",
                                                paddingRight: "1ch",
                                                width: "15ch",
                                                textAlign: "left",
                                            }}
                                        >
                                            {action.name}:{" "}
                                        </h2>
                                        )}
                                        {action.description && (
                                        <p
                                            style={{
                                                display: "inline-block",
                                                textAlign: "left",
                                                width: "100%",
                                            }}
                                        >
                                            {action.description}
                                        </p>
                                        )}
                                    </div>
                                    <FaWindowClose
                                        size="20px"
                                        color="red"
                                        style={{
                                        cursor: "pointer",
                                        float: "right",
                                        }}
                                        onClick={() => {
                                        deleteAction(action._id);
                                        }}
                                    ></FaWindowClose>
                                </div>
                            </div>
                            ))}
                        </div>
                    )}
                    <br />
                    <button
                        type="button"
                        className="btn blue"
                        style={{ float: "right" }}
                        onClick={() => {
                            setAction(actionTemplate);
                            setModal({ on: true, view: "action" });
                        }}
                    >
                        New Action
                    </button>
                </div>

                <div
                    style={
                        tabs === "legend"
                            ? { display: "block" }
                            : { display: "none" }
                    }
                >
                    {/* legendary */}
                    {item.legendary && (
                        <div id="legendary" className="list-columns">
                            {item.legendary.map((action, i) => (
                            <div className="flex-row" key={i}>
                                <div
                                    className="list-item"
                                    style={{ textAlign: "left", width: "100%" }}
                                >
                                    <div
                                        className="flex-row"
                                        style={{ cursor: "pointer", width: "100%" }}
                                        onClick={() => {
                                        setItem(action);
                                        setModal({
                                            on: true,
                                            view: "legendary",
                                        });
                                        }}
                                    >
                                        {action.name && (
                                        <h2
                                            style={{
                                                display: "inline-block",
                                                paddingRight: "1ch",
                                                width: "15ch",
                                                textAlign: "left",
                                            }}
                                        >
                                            {action.name}:{" "}
                                        </h2>
                                        )}
                                        {action.text && (
                                        <p
                                            style={{
                                                display: "inline-block",
                                                textAlign: "left",
                                                width: "100%",
                                            }}
                                        >
                                            {truncate(action.text, 70)}
                                        </p>
                                        )}
                                    </div>
                                    <FaWindowClose
                                        size="20px"
                                        color="red"
                                        style={{
                                        cursor: "pointer",
                                        float: "right",
                                        }}
                                        onClick={() => {
                                        window.alert("delete");
                                        }}
                                    ></FaWindowClose>
                                </div>
                            </div>
                            ))}
                        </div>
                    )}
                </div>

                <div
                    className={styles.spellsContainer}
                    style={
                        tabs === "spells"
                            ? { display: "flex" }
                            : { display: "none" }
                    }
                >
                    {/* spell slots */}
                    <form className={styles.spellsContainer}>
                        <div className={styles.spellSlotsContainer}>
                        {spellSlotLevels.map((level, index) => (
                            <label htmlFor={level}>
                            {level}
                            <input
                                id={level}
                                type="number"
                                value={
                                    item?.spellSlots && item?.spellSlots[index]
                                }
                                onChange={(e) =>
                                    setSpellslots(index, e.target.value)
                                }
                            ></input>
                            </label>
                        ))}
                        <button
                            onClick={(e) => {
                            e.preventDefault(),
                                setModal({ on: true, view: "spell" });
                            }}
                        >
                            New Spell
                        </button>
                        </div>
                    </form>

                    {/* spells */}
                    {spells && (
                        <div id="spells" className={styles.spellList}>
                            {spells
                            .sort((a, b) => {
                                return a.level - b.level;
                            })
                            .map((spell, i) => (
                                <div key={i._id} className={styles.spell_line}>
                                    <div
                                        className={styles.delete_button}
                                        onClick={() => deleteSpell(spell.name)}
                                    >
                                        <FaWindowClose color="red" size="1.5em" />
                                    </div>
                                    <div title={spell.description}>
                                        <strong>{spell.name}:</strong> Level{" "}
                                        <strong>{spell.level}</strong>{" "}
                                        {spell.school}
                                    </div>
                                </div>
                            ))}

                            <br></br>
                        </div>
                    )}
                </div>
            </form>
        )}
    </>
    );
 };