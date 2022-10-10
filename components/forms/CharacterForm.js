import { useState, useEffect, useContext } from "react";
import { races, classes } from '../../utils/Forms'

const CharacterForm = ({data, updateFnc}) => {
    // console.log(updateFnc)
    const [ character, setCharacter ] = useState({
        name: "",
        description: "",
        class: classes[0],
        race: races[0],
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        cha: 10,
        ac: 0,
        maxHp: 0,
        currentHP: 0,
        conditions: [],
        picture_url: ''
    });

    useEffect(() => {
        if (data && data._id) {
            setCharacter({...data})
        } 
    
      return () => {}
    }, [data])    

    return (
        <>
        {character && <form onSubmit={(e) => {e.preventDefault(); updateFnc(character)}} className="form">
                    <input
                        className="input-text"
                        name='Name' 
                        type='text'
                        required
                        placeholder="name"
                        value={ character.name }
                        onChange={e => setCharacter({...character, "name": e.target.value})}
                    />
                    <input 
                        type='text'
                        placeholder="picture URL"
                        value={ character.picture_url }
                        onChange={e => setCharacter({...character, picture_url: e.target.value})}
                    />
                    <div className="flex-row">
                        {races && <select value={character.race} onChange={e => setCharacter({...character, "race": e.target.value})}>
                            {races && races.map((race) => (
                                <option value={ race } key={ race }>{ race } </option>
                                ))}
                        </select>}

                        <select value={character.class} onChange={e => setCharacter({...character, "class": e.target.value})}>
                            {classes && classes.map((clss) => (
                                <option value={ clss } key={ clss }>{ clss } </option>
                                ))}
                        </select>
                    </div>
                    <div className="flex-row">
                        <input
                            name='str' 
                            type='number'
                            required
                            placeholder="str"
                            value={ character.str }
                            onChange={e => setCharacter({...character, "str": parseInt(e.target.value)})}
                        />
                        <input
                            name='dex' 
                            type='number'
                            required
                            placeholder={character.dex}
                            value={character.dex}
                            onChange={e => setCharacter({...character, "dex": parseInt(e.target.value)})}
                        />
                        <input
                            name='con' 
                            type='number'
                            required
                            placeholder={character.con}
                            value={character.con}
                            onChange={e => setCharacter({...character, "con": parseInt(e.target.value)})}
                        />
                        <input
                            name='int' 
                            type='number'
                            required
                            placeholder={character.int}
                            value={character.int}
                            onChange={e => setCharacter({...character, "int": parseInt(e.target.value)})}
                        />
                        <input
                            name='wis' 
                            type='number'
                            required
                            placeholder={character.wis}
                            value={character.wis}
                            onChange={e => setCharacter({...character, "wis": parseInt(e.target.value)})}
                        />
                        <input
                            name='cha' 
                            type='number'
                            required
                            placeholder={character.cha}
                            value={character.cha}
                            onChange={e => setCharacter({...character, "cha": parseInt(e.target.value)})}
                        />
                    </div>
                    <div className="flex-row">
                        <input
                            name='maxhp' 
                            type='number'
                            required
                            placeholder={character.maxHp}
                            value={character.maxHp}
                            onChange={e => setCharacter({...character, "maxHp": parseInt(e.target.value)})}
                        />
                        <input
                            name='ac' 
                            type='number'
                            required
                            placeholder={character.ac}
                            value={character.ac}
                            onChange={e => setCharacter({...character, "ac": parseInt(e.target.value)})}
                        />
                        <input
                            name='xp' 
                            type='number'
                            required
                            placeholder={character.xp}
                            value={character.xp}
                            onChange={e => setCharacter({...character, "xp": parseInt(e.target.value)})}
                        />
                    </div>
                    <textarea
                        className="input-text"
                        name='Description'
                        required
                        placeholder="description"
                        value={character.description}
                        onChange={e => setCharacter({...character, "description": e.target.value})}
                    />
                    <input
                        className='btn green'
                        type='submit' 
                        value='Save Character'
                        />
                </form>}
                </>
    );
}

export default CharacterForm