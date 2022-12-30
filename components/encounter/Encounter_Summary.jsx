import { useState, useContext, useEffect } from 'react'
import { EncounterContext } from '../../pages/encounter/[id]'
import { Dialog } from 'primereact/dialog'
import EquipmentView from '../equipment/EquipmentView'
import styles from  './Encounter_Summary.module.css'

export default function Encounter_Summary ({}) {
    const context = useContext(EncounterContext)
    const [ modal, setModal ] = useState({on: false, view: ''})
    const [loot, setLoot] = useState({})
    const [ encounterMoney, setEncounterMoney ] = useState({cp: 0, ep: 0, sp: 0, gp: 0, pp: 0})
    const numberOfPCs = context?.encounter?.initiative?.filter(i => {return i.enemy === 'pc'})?.length || 1

    useEffect(() => {
        const money = {cp: 0, ep: 0, sp: 0, gp: 0, pp: 0}
        context?.encounter?.monsters?.forEach(monster => {
            if (monster.money) {
                Object.keys(money).forEach(coin => {
                    money[coin] += monster.money[coin] || 0
                })
            }            
        })
        setEncounterMoney(money)
    
        return
    }, [context.encounter.monsters])
    

  return (
    <div className={styles.summaryContainer}>
        <Dialog visible={modal.on} onHide={() => setModal({on: false, view: ''})} header={modal.view} style={{"width": "100vw", "maxWidth": "45rem"}} position='top'>
            <EquipmentView equipment={loot} />
        </Dialog>
        <div className={styles.section}>
            <h2>Experience Points</h2>
            <div>
                <p>Total XP: <strong>{context?.encounter?.monsters?.reduce((total, monster) => {return total + monster.xp}, 0)}</strong></p>
                <p>XP per Character: <strong>{context?.encounter?.monsters?.reduce((total, monster) => {return total + monster.xp}, 0) / numberOfPCs}</strong></p>
            </div>
        </div>
        <div className={styles.section}>
            <div className={styles.moneyContainer}>
                <h2>Loot</h2>
                {/* <strong><p>Total money: </p></strong> */}
                {Object.keys(encounterMoney).map(coin => (<p>{coin.toUpperCase()}: <strong>{encounterMoney[coin]}</strong></p>))}
            </div>
            {context?.encounter?.monsters?.map(monster => (
                <>
                {(monster.equipment?.length > 0 || monster.money) && <details>
                    <summary>{monster.name}{monster.equipment?.length > 0 ? ` - (${monster.equipment.length} Items)`: ' - (0 Items)'}</summary>
                    <div>
                        <div className={styles.moneyContainer}>
                        {monster.money && Object.keys(monster.money)?.map(coin => (
                            <>
                            <p><strong>Coins: </strong></p>
                                <p>{coin.toUpperCase()}: <strong>{monster.money[coin]}</strong></p>                            
                            </>
                        ))}
                        </div>
                        {monster.equipment?.map(eq => (
                            <p onClick={() => {setLoot(eq); setModal({on: true, view: 'Loot'})}}>{eq.name}</p>
                        ))}
                    </div>
                </details>}
                </>
            ))}
        </div>
    </div>
  )
}
