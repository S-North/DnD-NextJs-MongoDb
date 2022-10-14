import connectToDatabase from '../../utils/mongodb'
import { ObjectId } from 'mongodb'

export default async function handler(req, res) {
  const {db} = await connectToDatabase();
  const method = req.method
  const body = req.body
  // const request = req.query;
  let response = null

  // method to return filtered results from the collection
  if (method === 'POST' && body.action === 'query') {
    console.log('get filtered campaigns')
    console.log(body.data)
    if (body.data._id) body.data = {...body.data, _id: new ObjectId(body.data._id)}
    console.log(body.data)
    response = await db.collection("campaigns").find(body.data).toArray()
  }

  // method to add a new document
  if (method === 'POST' && body.action === 'addone') {
    console.log('insert one campaign')
    console.log(body.data)
    response = await db.collection("campaigns").insertOne(body.data);
  }

  // method to edit an existing document
  if (method === 'POST' && body.action === 'editone') {
    console.log('edit one campaign')
    console.log(body.data)
    const id = new ObjectId(body.data._id)
    response = await db.collection("campaigns").updateOne({_id: id}, {$set: {...body.data, _id: id}});
  }

  if (method === 'POST' && body.action === 'deleteone') {
    console.log('delete campaign')
    const id = new ObjectId(body.data._id)
    console.log(id)
    response = await db.collection('campaigns').deleteOne({_id: id});
  }

  // handle the camapign monsters
  if (method === 'POST' && body.action === 'append monster') {
    console.log('append custom monster to campaign monsters')
    const campaignId = new ObjectId(body.data.campaignId)
    const NEWMONSTERID = new ObjectId()
    const confirm = await db.collection('campaigns').updateOne(
      { _id: campaignId },
      { $push: { monsters: {...body.data.monster, _id: NEWMONSTERID} } }
   )
   response = {
    initialData: body.data,
    confirm,
    monster: {...body.data.monster, _id: NEWMONSTERID}
   }
   console.log(response)
  }

  if (method === 'POST' && body.action === 'edit monster') {
    console.log(body.data)
    const CAMPAIGNID = new ObjectId(body.data.campaignId)
    const MONSTERID = new ObjectId(body.data.monster._id)
    console.log(CAMPAIGNID)
    console.log(MONSTERID)

    const RESULT = await db.collection('campaigns').updateOne(
      { _id: CAMPAIGNID },
      { $pull: { monsters: { _id: MONSTERID } } }
    )
      console.log(RESULT)
    response = RESULT
  }

  // console.log(`response is ${response}`)
  console.log(response)

  res.json(response)
}
