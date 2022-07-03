import { useState, useEffect } from "react"
import styles from './SpellForm.module.css'
import { schools, spellSlotLevels, spellClasses } from "../../utils/Forms"
import { WithContext as ReactTags } from 'react-tag-input';

export default function SpellForm ({selected}) {
    const api = '/api/'
    const [ item, setItem ] = useState({
        name: '',
        level: 0,
        school: 'Abjuration',
        time: "",
        duration: "",
        range: "",
        components: {
            verbal: false,
            somatic: false,
            material: false,
            materials: ""
        },
        concentration: false,
        ritual: false,
        classes: [],
        description: ""
    })
    useEffect(() => {
        if (selected?._id) {
          const getSpell = async () => {
              const response = await fetch(`${api}spells`, {
                method: "POST",
                body: JSON.stringify(
                    {
                    action: 'query',
                    data: {_id: item._id}
                }),
                headers: {"Content-type": "application/json; charset=UTF-8"}
              })
              const spellResponse = await response.json()
  
              if (spellResponse && spellResponse.length > 0 ) setItem(spellResponse[0])
            }
            getSpell()
        }
      
        return () => {}
      }, [selected])

    const editSpell = async (spell) => {
        if (!spell) return

        // editing and adding new spells
        let update = spell
        let operation = "addone"
        if (update._id) operation = "editone"
        if (spell.components.material === false) update.components.materials = ''
        spell.classes = tags.map(tag => {return tag.text})

        const saveSpell = async () => {
            const response = await fetch(`${api}spells`, {
              method: "POST",
              body: JSON.stringify(
                  {
                  action: operation,
                  data: spell
              }),
              headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            const spellResponse = await response.json()
            console.log(spellResponse)
            // if (spellResponse && spellResponse.length > 0 ) setItem(spellResponse[0])
          }
          saveSpell()
    }

    // react tag component state and functions
    const [ tags, setTags ] = useState([])
    const delimiters = [188, 13];
    const suggestions = spellClasses.map(suggestion => {
        return {
          id: suggestion,
          text: suggestion
        };
});

    const handleAddition = tag => {
        setTags([...tags, tag]);
    };
    const handleDelete = i => {
        setTags(tags.filter((tag, index) => index !== i));
      };
    const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        setTags(newTags);
    };
    const handleTagClick = () => {}
    
    

    return(
        <>
        {item && <>
            <h3 className={styles.title}>{item?.name ? item.name : "New Spell"}</h3>
            <form className={styles.form} onSubmit={(e) => {e.preventDefault(), editSpell(item)}}>
                <div className={styles.form_line}>
                    <label className={styles.label} htmlFor="name">Name</label>
                    <input id="0" type='text' required value={item.name} onChange={(e) => setItem({...item, name: e.target.value})}></input>
                </div>
                <div className={styles.form_line}>
                    <label className={styles.label} htmlFor="level">Level</label>
                    <select onChange={(e) => setItem({...item, level: parseInt(e.target.value)})}>
                        {[0, ...spellSlotLevels].map(level => (
                            <option value={level}>{level}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.form_line}>
                    <label className={styles.label} htmlFor="school">School</label>
                    <select id="school" value={item.school} onChange={(e) => setItem({...item, school: e.target.value})}>
                        {schools.map(school => (
                            <option value={school}>{school}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.form_line}>
                    <label className={styles.label} htmlFor="time">Casting Time</label>
                    <input id="time" type='text' required value={item.time} onChange={(e) => setItem({...item, time: e.target.value})}></input>
                </div>
                <div className={styles.form_line}>
                    <label className={styles.label} htmlFor="duration">Duration</label>
                    <input id="duration" type='text' required value={item.duration} onChange={(e) => setItem({...item, duration: e.target.value})}></input>
                </div>
                <div className={styles.form_line}>
                    <label className={styles.label} htmlFor="range">Range (feet)</label>
                    <input id="range" type='text' required value={item.range} onChange={(e) => setItem({...item, range: e.target.value})}></input>
                </div>
                <div className={styles.form_line}>
                    <label className={styles.label} htmlFor="components">Components</label>
                    <fieldset>
                        <input id="verbal" type='checkbox' checked={item.components.verbal} onChange={(e) => setItem({...item, components: {...item.components, verbal: !item.components.verbal}})}></input>
                        <label htmlFor="verbal">Verbal</label>
                        <input id="component" type='checkbox' checked={item.components.somatic} onChange={(e) => setItem({...item, components: {...item.components, somatic: !item.components.somatic}})}></input>
                        <label htmlFor="component">Somatic</label>
                        <input id="component" type='checkbox' checked={item.components.material} onChange={(e) => setItem({...item, components: {...item.components, material: !item.components.material}})}></input>
                        <label htmlFor="component">Material</label>
                    </fieldset>
                </div>
                {item.components.material && <div className={styles.form_line}>
                    <label className={styles.label} htmlFor="material">Material Components</label>
                    <input id="material" type='text' required value={item.components.materials} onChange={(e) => setItem({...item, components: {...item.components, materials: e.target.value}})}></input>
                </div>}
                <div className={styles.form_line}>
                    <label className={styles.label} htmlFor="description">Description</label>
                    <textarea id="description" type='text' required value={item.description} onChange={(e) => setItem({...item, description: e.target.value})}></textarea>
                </div>
                <div className={styles.form_line}>
                    <label className={styles.label} htmlFor="concentration">Concentration</label>
                    <input id="concentration" type="checkbox" value={item.concentration} onChange={(e) => setItem({...item, concentration: !item.concentration})}></input>
                </div>
                <div className={styles.form_line}>
                    <label className={styles.label} htmlFor="ritual">Ritual</label>
                    <input id="ritual" type="checkbox" value={item.ritual} onChange={(e) => setItem({...item, ritual: !item.ritual})}></input>
                </div>
                <div className={styles.form_line}>
                    <ReactTags
                        tags={tags}
                        suggestions={suggestions}
                        delimiters={delimiters}
                        handleDelete={handleDelete}
                        handleAddition={handleAddition}
                        handleDrag={handleDrag}
                        handleTagClick={handleTagClick}
                        inputFieldPosition="bottom"
                        autocomplete
                        autofocus={false}
                        inline={true}
                        clearAll={false}
                        placeholder={"e.g. Wizard, Sorcerer, Cleric, Rogue (Arcane Trickster)"}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </>}
        </>
    )
}