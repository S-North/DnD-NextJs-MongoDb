import connectToDatabase from '../../../utils/mongodb'
import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0';

import { useState, useEffect } from 'react'
import { truncate } from '../../../utils/utils'
import Link from 'next/link'
import { FaEdit, FaWindowClose } from 'react-icons/fa'
import BasicForm from '../../../components/forms/BasicForm'
import { ObjectId } from 'mongodb'
import Nav from '../../../components/Nav';


const Adventure = ({adventure}) => {
    const api = '/api/'
    const { user, error, isLoading } = useUser();
    const [ encounters, setEncounters ] = useState([])
    const [ campaign, setCampaign ] = useState()
    const [ selected, setSelected ] = useState();
    const [ modal, setModal ] = useState({"type": "none", "on": false})

    
    useEffect(() => {
        const getEncounters = async () => {
            const response = await fetch(`${api}encounters`, {
                method: "POST",
                body: JSON.stringify(
                    {
                    action: 'query',
                    data: {adventureId: adventure._id, userId: user.id}
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
              }
              })
              const allencounters = await response.json(response)
              setEncounters(allencounters)
        }
        getEncounters()

        const getCampaign = async () => {
            const response = await fetch(`${api}campaigns`, {
                method: "POST",
                body: JSON.stringify(
                    {
                    action: 'query',
                    data: {_id: adventure.campaignId}
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
              }
              })
              const campaign = await response.json(response)
              setCampaign(campaign[0])
        }
        getCampaign()
  
      return () => {}
    }, [adventure])
    
    const updateEncounters = async (mongoCollection, item) => {
        const newEncounters = null
    
    // if no _id, its a new item
    if (!item._id) {
        console.log('its a new item')
        const response = await fetch(`${api}encounters`, {
            method: "POST",
            body: JSON.stringify(
                {
                action: 'addone',
                data: {
                    ...item,
                    mode: 'editing',
                    initiative: [],
                    monsters: [],
                    campaignId: adventure.campaignId, 
                    adventureId: adventure._id,
                    userId: user.sub
                }
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })        
        newEncounters = await response.json()
        console.log(newEncounters)

        if (newEncounters.acknowledged && newEncounters.insertedId) {
            setEncounters([...encounters, {...item, _id: newEncounters.insertedId}])
            setModal({on: false, type: ""})
          }
    }
    // if theres an _id, then its an edit
    else if (item._id) {
        console.log('edit this item')
        const response = await fetch(`${api}encounters`, {
            method: "POST",
            body: JSON.stringify(
                {
                action: 'editone',
                data: item
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })        
        newEncounters = await response.json()
        console.log(newEncounters)

        if (newEncounters.acknowledged && newEncounters.modifiedCount === 1) {
            setEncounters([...encounters.filter(a => {return a._id !== item._id}), item])
            setModal({on: false, type: ""})
          }
    }
}

  const deleteEncounter = async (mongoCollection, id) => {

    console.log(id)
    console.log(mongoCollection)
    const response = await fetch(`${api}delete`, {
        method: "POST",
            body: JSON.stringify(
                {
                action: 'deleteone',
                collection: mongoCollection,
                data: {_id: id}
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
    })

    const acknowledgement = await response.json()
    if (acknowledgement.acknowledged && acknowledgement.deletedCount === 1) {
        setEncounters([...encounters.filter(encounter => { return encounter._id !== id})])
    }
  } 
    
    return (
       <>
       <Nav location='adventure' campaign={campaign} adventure={adventure} user={user}></Nav>
       {/* modal window */}
       {modal.on && <div id="modal-window" className="modal">
            {/* Modal content */}
                <div className="modal-content">
                    <span className="close" onClick={() => {setModal({"on": false, "type": "none"})}}>&times;</span>
                    {modal.type === "encounters" &&
                    <>
                        <h3>Edit Encounter</h3>
                        <BasicForm data={selected} updateFnc={updateEncounters} mongoCollection={modal.type}></BasicForm>
                    </>}
                </div>
        </div>}

        <section>
            <div className="one-column">
                <h2>Encounters</h2>
                    <button className="green" onClick={() => {setSelected({"name": "", "description": ""}, setModal({"on": true, "type": "encounters"}))}}>New</button>

                    {encounters.map(encounter => (
                        <div key={encounter._id} className="list-item">
                            <Link href={`/encounter/${encounter._id}`}>
                                <div className="link">
                                        <h2>{encounter.name}</h2>
                                        <em>{truncate(encounter.description, 50)}</em>
                                </div>
                            </Link>

                            <div>
                              <FaWindowClose style={{"cursor": "pointer"}} color="red"
                                onClick={() => {deleteEncounter("encounters", encounter._id)}} />

                              <FaEdit style={{"cursor": "pointer"}} color="grey"
                                onClick={() => {setSelected(encounter); setModal({"on": true, "type": "encounters"})}} />
                            </div>
                        </div>
                    ))}
            </div>

            <div className="one-column">
                <h2>Running Encounters</h2>
                {encounters && campaign && encounters
                    .filter(e => { return e.mode === "running"})
                    .map(encounter => (
                        <div key={encounter._id} className="list-item">
                            <Link href={`/encounter/${encounter._id}`}>
                                <div className="link">
                                <h2>{encounter.name}</h2>
                                <p>{`In ${campaign.name} > ${adventure.name}`}</p>
                                </div>
                            </Link>
                        </div>))}
            </div>
        </section>
       </>
    );
}

export default withPageAuthRequired(Adventure)

export async function getServerSideProps(context) {
    const {db} = await connectToDatabase()
    const id = new ObjectId(context.params.id)
    let response = await db.collection("adventures").find({_id: id}).toArray()
    const adventures = await JSON.parse(JSON.stringify(response))

    return {
        props: {adventure: adventures[0]}
    }
}