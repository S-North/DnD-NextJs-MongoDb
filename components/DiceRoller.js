import { useState, useEffect } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import styles from './DiceRoller.module.css'
import { diceRoll } from '../utils/utils';

export default function DiceRoller() {

    useEffect(() => {
      
    
      return () => {}
    }, [])
    
    const [ d, setD ] = useState([
        {name: "d20", code: 20},
        {name: "d12", code: 12},
        {name: "d10", code: 10},
        {name: "d8", code: 8},
        {name: "d6", code: 6},
        {name: "d4", code: 4}
    ])
    const [ DiceNumber, setDiceNumber ] = useState(1)
    const [ DiceSides, setDiceSides ] = useState({name: 'd4', code: 4})
    const [ DiceBonus, setDiceBonus ] = useState(0)
    const [ Result, setResult ] = useState(0)


    return (
        <>
        <div className={styles.card}>
            <InputNumber
                className={styles.spinner}
                style={{width: '4rem', "margin": "0"}}
                inputId="horizontal" 
                value={DiceNumber}
                min={1}
                onValueChange={(e) => setDiceNumber(e.value)} 
                showButtons 
                buttonLayout="vertical"
                decrementButtonClassName="p-button-secondary" 
                incrementButtonClassName="p-button-secondary" 
                incrementButtonIcon="pi pi-plus" 
                decrementButtonIcon="pi pi-minus"
                />
            <Dropdown optionLabel="name" value={DiceSides} options={d} onChange={(e) => setDiceSides(e.value)} placeholder="Select a City"/>
            {/* <Dropdown optionLabel={DiceSides.name} value={DiceSides} options={d} onChange={(e) => setDiceSides(e.value)}/> */}

            <InputNumber
                className={styles.spinner}
                style={{width: '4rem', "margin": "0"}}
                inputId="horizontal" 
                value={DiceBonus}
                min={0}
                onValueChange={(e) => setDiceBonus(e.value)} 
                showButtons 
                buttonLayout="vertical"
                decrementButtonClassName="p-button-secondary" 
                incrementButtonClassName="p-button-secondary" 
                incrementButtonIcon="pi pi-plus" 
                decrementButtonIcon="pi pi-minus"
                />

            <Button className='p-button-success' label='Roll' onClick={() => setResult(diceRoll(DiceNumber, DiceSides.code, DiceBonus))} />
        </div>
        <div className={styles.result}>
            {Result && <h2>{Result[0].join(', ')}</h2>}
            <h3>{Result[2]}</h3>
        </div>
        </>
    )
}