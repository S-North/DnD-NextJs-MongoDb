import connectToDatabase from '../../utils/mongodb'
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const {db} = await connectToDatabase();
  const method = req.method
  const body = req.body
  const sort = req.body.sort

  let sortCriteria
  if (sort && sort.name && sort.level) {
    switch (true) {
      case sort.name === 'desc': {sortCriteria = {name: -1}; break}
      case sort.level === 'asc': {sortCriteria = {level: 1}; break}
      case sort.level === 'desc': {sortCriteria = {level: -1}; break}
      default: {sortCriteria = {name: 1}; break}
    }
  }
  else {sortCriteria = {name: 1}}

  let query = {
    level: {$gte: body.data.minLevel, $lte: body.data.maxLevel},
    name: {$regex: `[\w*]?${body.data.search}[\w*]?`, $options: "i"}
  }

  console.log(body.data.type)
  console.log(body.data)
  if (body.data.school && body.data.school !== 'none') query = {...query, school: body.data.school}
  console.log(query)

  
  let response = {}

  if (method === 'POST' && body.action === 'query') {
    console.log('get queried adventures')
    if (body.data && body.data._id) body.data = {...body.data, _id: new ObjectId(body.data._id)}
    response = await db.collection("spells").find(body.data).toArray()
  }

  if (method === 'POST' && body.action === 'minilist') {
    // returns all monsters from the collection but with selected fields #projection
    console.log('get mini list of all spells')
    if (body.data && body.data._id) body.data = {...body.data, _id: new ObjectId(body.data._id)}
    response = await db.collection("spells").find(query, 
      { projection: 
        { 
          _id: 1, 
          name: 1, 
          level: 1,
          school: 1,
          components: 1,
          classes: 1,
          ritual: 1
        } }
      ).sort(sortCriteria)
      .toArray()
  }

  if (method == 'POST' && body.action === 'addone') {
    console.log('add 1 monster')
    response = await db.collection("spells").insertOne(body.data);
  }

  if (method === 'POST' && body.action === 'addmany') {
    // returns all monsters from the collection but with selected fields #projection
    console.log('insert array of spells')
    console.log(body.data)
    if (body.data._id) body.data = {...body.data, _id: new ObjectId(body.data._id)}
    response = await db.collection("spells").insertMany(body.data)
  }

  // method to edit an existing document
  if (method === 'POST' && body.action === 'editone') {
    console.log('edit a monster')
    const id = new ObjectId(body.data._id)
    response = await db.collection("spells").updateOne({_id: id}, {$set: {...body.data, _id: id}});
  }

  if (method === 'POST' && body.action === 'deleteone') {
    console.log('delete monster')
    const id = new ObjectId(body.data._id)
    console.log(id)
    response = await db.collection('spells').deleteOne({_id: id});
  }

  console.log(response)
  res.json(response)
}