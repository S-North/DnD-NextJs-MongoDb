import styles from './Encounter_ViewNotes.module.css'
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import { useContext } from 'react';
import { EncounterContext } from '../../pages/encounter/[id]';

export default function ViewNotes({ setnote }) {
    const context = useContext(EncounterContext)
    const handleDelete = (e, _id) => {
        e.preventDefault()
        console.log(_id)
        console.log([...context.encounter.notes.filter(note => {return note._id !== _id})])
        context.editEncounter({notes: [...context.encounter.notes.filter(note => {return note._id !== _id})]}, context.encounter._id)
    }

    const handleEdit = (e, note) => {
        e.preventDefault()
        setnote(note)
        context.setModal({on: true, type: 'Add Note'})
    }

    return (
        <div className={styles.notesContainer}>
            <Accordion>
                {context?.encounter?.notes?.map(note => (
                    <AccordionTab 
                        key={note._id}
                        header={note.title} 
                        className={styles.header} 
                        headerTemplate={
                            <div
                                style={{display: "flex", gap: "1rem", alignItems: "center", justifyContent: "space-between", width: "100%"}}>
                                <h2>{note.title}</h2>
                                <div style={{display: "flex", gap: "0.5rem"}}>
                                    <Button 
                                        icon='pi pi-file-edit' 
                                        style={{width: "0", minWidth: "fit-content", padding: "0.3rem" }} 
                                        className="p-button-info"
                                        onClick={e => handleEdit(e, note)} />
                                    <Button 
                                        icon='pi pi-trash' 
                                        style={{width: "0", minWidth: "fit-content", padding: "0.3rem" }} 
                                        className="p-button-danger"
                                        onClick={e => handleDelete(e, note._id)} />
                                    
                                </div>
                            </div>}>
                        <p>{`${note.body}`}</p>                
                    </AccordionTab>
                ))}
            </Accordion>
        </div>
    )
}