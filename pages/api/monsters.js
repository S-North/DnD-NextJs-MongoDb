import { connectToDatabase } from '../../utils/mongodb'
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const {db} = await connectToDatabase();
  const method = req.method
  const body = req.body
  const sort = req.body.sort

  let sortCriteria
  if (sort && sort.name && sort.cr) {
    switch (true) {
      case sort.name === 'desc': {sortCriteria = {name: -1}; break}
      case sort.cr === 'asc': {sortCriteria = {cr: 1}; break}
      case sort.cr === 'desc': {sortCriteria = {cr: -1}; break}
      default: {sortCriteria = {name: 1}; break}
    }
  }
  else {sortCriteria = {name: 1}}

  let query = {
    cr: {$gte: body.data.minCr, $lte: body.data.maxCr},
    name: {$regex: `[\w*]?${body.data.search}[\w*]?`, $options: "i"}
  }

  console.log(body.data.type)
  console.log(body.data)
  if (body.data.type && body.data.type !== 'none') query = {...query, type: body.data.type}
  console.log(query)

  
  let response = {}

  if (method === 'POST' && body.action === 'query') {
    console.log('get queried adventures')
    if (body.data && body.data._id) body.data = {...body.data, _id: new ObjectId(body.data._id)}
    response = await db.collection("monsters").find(body.data).toArray()
  }

  if (method === 'POST' && body.action === 'minilist') {
    // returns all monsters from the collection but with selected fields #projection
    console.log('get mini list of monsters')
    if (body.data && body.data._id) body.data = {...body.data, _id: new ObjectId(body.data._id)}
    response = await db.collection("monsters").find(query, 
      { projection: 
        { 
          _id: 1, 
          name: 1, 
          cr: 1,
          type: 1,
          size: 1
        } }
      ).sort(sortCriteria)
      .toArray()
  }

  if (method == 'POST' && body.action === 'addone') {
    console.log('add 1 monster')
    response = await db.collection("monsters").insertOne(body.data);
  }

  if (method === 'POST' && body.action === 'addmany') {
    // returns all monsters from the collection but with selected fields #projection
    console.log('insert array of monsters')
    // console.log(body.data)
    // if (body.data._id) body.data = {...body.data, _id: new ObjectId(body.data._id)}
    response = await db.collection("monsters").insertMany(body.data)
  }

  // method to edit an existing document
  if (method === 'POST' && body.action === 'editone') {
    console.log('edit a monster')
    const id = new ObjectId(body.data._id)
    response = await db.collection("monsters").updateOne({_id: id}, {$set: {...body.data, _id: id}});
  }

  if (method === 'POST' && body.action === 'deleteone') {
    console.log('delete monster')
    const id = new ObjectId(body.data._id)
    console.log(id)
    response = await db.collection('monsters').deleteOne({_id: id});
  }

  console.log(response)
  res.json(response)
}