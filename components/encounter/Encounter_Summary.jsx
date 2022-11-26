import { useState, useContext } from 'react'
import { EncounterContext } from '../../pages/encounter/[id]'
import { Dialog } from 'primereact/dialog'
import EquipmentView from '../equipment/EquipmentView'
import styles from  './Encounter_Summary.module.css'

export default function Encounter_Summary ({}) {
    const context = useContext(EncounterContext)
    const [ modal, setModal ] = useState({on: false, view: ''})
    const [loot, setLoot] = useState({})
    const numberOfPCs = context?.encounter?.initiative?.filter(i => {return i.enemy === 'pc'})?.length || 1

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
            <h2>Loot</h2>
            {context?.encounter?.monsters?.map(monster => (
                <>
                {monster.equipment?.length > 0 && <details>
                    <summary>{monster.name}{monster.equipment?.length > 0 ? ` - (${monster.equipment.length} Items)`: ' - (0 Items)'}</summary>
                    <div>
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
