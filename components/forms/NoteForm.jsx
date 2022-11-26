import { useState, useEffect, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './NoteForm.module.css'
import { EncounterContext } from '../../pages/encounter/[id]'

export default function NoteForm({ note, setnote }) {
    const context = useContext(EncounterContext)
    const [ noteData, setNoteData ] = useState()

    useEffect(() => {
        if (!note) {
            // const _id = new ObjectId()
            setNoteData({_id: uuidv4(), title: '', body: ''})
        }
        if (note) setNoteData(note)
    
      return
    }, [])

    const handleSubmit = async (e) => {
      e.preventDefault()
      const notes = context?.encounter?.notes || []
      if (!note?._id) await context.editEncounter({notes: [...notes, noteData]}, context.encounter._id)
      if (note?._id) await context.editEncounter({notes: [...notes.filter(note => {return note._id !== noteData._id}), noteData]}, context.encounter._id)
      if (note?._id) {
        setnote()
        context.setModal({on: true, type: 'View Notes'})
      } else {
        setnote()
        context.setModal({on: true, type: 'View Notes'})

      }
    }
    
  return (
    <>
    {noteData &&<form className={styles.form} onSubmit={e => handleSubmit(e)}>
      <input 
        type="text" 
        id="title" 
        required
        placeholder='Title'
        value={noteData.title} 
        onChange={e => setNoteData({...noteData, title: e.target.value})} />
      
      <textarea 
        name="" 
        id="body" 
        cols="30" 
        rows="10" 
        required
        placeholder='Write your note here...'
        value={noteData.body} 
        onChange={e => setNoteData({...noteData, body: e.target.value})}></textarea>
      
      <button type="submit">Save</button>
    </form>}
    </>
  );
}