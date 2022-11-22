import { useState, useContext } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { Dialog } from 'primereact/dialog';
import EquipmentView from '../equipment/EquipmentView';
import styles from './Encounter_CombatantDetails_Equipment.module.css'
import { EncounterContext } from '../../pages/encounter/[id]';

export default function Encounter_CombatantDetails_Equipment ({ combatant, tab }) {
    const context = useContext(EncounterContext)
    const [ modal, setModal ] = useState({ on: false, view: "" })
    const [ equipmentDetail, setEquipmentDetail ] = useState()
    const setItem = (update) => {
        const target = combatant
        if (target.enemy === 'pc') context.editCharacter(target, update)
        if (target.enemy === 'monster') context.editMonster(target, update)
    }

    return (
        <>
        <Dialog visible={modal.on} onHide={() => setModal({on: false, type: ''})} header={modal.view} style={{width: "100%", maxWidth: "45rem"}} position={'top'}>
            {modal.view === "equipment" && (
                <EquipmentList clickFunction={addEquipment} modalFunction={setModal} />
            )}
            {modal.view === "Equipment Detail" && (
                <EquipmentView equipment={equipmentDetail} />
            )}
        </Dialog>
        <div 
            className={styles.equipmentContainer}
            style={
                tab === "equipment"
                    ? { display: "flex" }
                    : { display: "none" }
            }>
            {false && <button onClick={e => {e.preventDefault(); setModal({ on: true, view: "equipment" })}}>Add Equipment</button>}
            {combatant?.equipment && <div className={styles.equipmentList}>
                {combatant.equipment.sort((a,b) => {return a.name > b.name}).map(equipment => (
                    <div key={equipment._id} className={styles.equipmentLine}>
                        <strong style={{width: "100%"}} onClick={() => {setEquipmentDetail(equipment); setModal({on: true, view:'Equipment Detail'})}}>{equipment.name}</strong>

                        {equipment.attunement && 
                            <input 
                                id='attune' 
                                type="checkbox" 
                                style={{maxWidth: "max-content"}} 
                                checked={equipment.attuned} 
                                onChange={
                                    e => setItem(
                                        {equipment: [
                                            ...combatant.equipment.filter(eq => eq._id !== equipment._id), 
                                            {...equipment, attuned: e.target.checked}]})} />}
                        {equipment.attunement && <label label htmlFor="attune" style={{maxWidth: "max-content"}}>Attune</label>}

                        <input 
                            id='equiped' 
                            type="checkbox" 
                            style={{maxWidth: "max-content"}} 
                            checked={equipment.equiped} 
                            onChange={
                                e => setItem(
                                    {equipment: 
                                        [...combatant.equipment.filter(eq => eq._id !== equipment._id), 
                                        {...equipment, equiped: e.target.checked}]})} />
                        <label htmlFor="equiped" style={{maxWidth: "max-content"}}>Equip</label>
                        <FaWindowClose
                            title="Delete"
                            style={{"cursor": "pointer"}} 
                            color="red"
                            size={'1.5rem'}
                            onClick={() => {deleteEquipment(equipment)}} />
                    </div>
                ))}

            </div>}
        </div>
        </>
    )
}
