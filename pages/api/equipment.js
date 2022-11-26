import connectToDatabase from '../../utils/mongodb'
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const {db} = await connectToDatabase();
  const method = req.method
  const body = req.body
  const sort = req.body.sort

  const query = req.body.query
  console.log(query)

  let sortCriteria
  let filterQuery = {}
  if (query?._id) filterQuery = {...filterQuery, _id: ObjectId(query._id)}

  if (query?.search) filterQuery = {...filterQuery, name: {$regex: `[\w*]?${query.search}[\w*]?`, $options: "i"}}
  if (query?.type && query.type !== 'Any') filterQuery = {...filterQuery, type: query.type}
  if (query?.rarity && query.rarity !== 'Any') filterQuery = {...filterQuery, rarity: query.rarity}
  switch (query?.magic) {
    case 'Magic': filterQuery = {...filterQuery, magic: true}; break
    case 'Ordinary': filterQuery = {...filterQuery, magic: false}; break
  }
  switch (query?.attunement) {
    case 'Required': filterQuery = {...filterQuery, attunement: true}; break
    // case 'Ordinary': filterQuery = {...filterQuery, magic: false}; break
  }
  
  let projection = {}
  if (req.body.projection) projection = req.body.projection
  
  console.log(filterQuery)

  if (sort && sort.name && sort.cr) {
    switch (true) {
      case sort.name === 'desc': {sortCriteria = {name: -1}; break}
      case sort.cr === 'asc': {sortCriteria = {cr: 1}; break}
      case sort.cr === 'desc': {sortCriteria = {cr: -1}; break}
      default: {sortCriteria = {name: 1}; break}
    }
  }
  else {sortCriteria = {name: 1}}

  let response = {}

  if (method === 'GET') {
    response = await db.collection("equipment").find({}).toArray()
  }

  if (method === 'POST' && body.action === 'query') {
    console.log('get queried equipment')
    if (body.data && body.data._id) body.data = {...body.data, _id: new ObjectId(body.data._id)}
    console.log(query.search)
    response = await db.collection("equipment").find(filterQuery, 
      { projection: projection })
        .toArray()
  }

  if (method === 'POST' && body.action === 'minilist') {
    // returns all monsters from the collection but with selected fields #projection
    console.log('get mini list of equipment')
    response = await db.collection("equipment").find({}, 
      { projection: 
        { 
          _id: 1, 
          name: 1, 
          cr: 1,
          type: 1,
          size: 1,
          sourceBook: 1,
          campaignMonster: 1
        } }
      ).sort(sortCriteria)
      .toArray()
  }

  

  if (method === 'POST' && body.action === 'fulllist') {
    // returns queried monsters from the collection with all fields returned
    console.log('get mini list of monsters')
    if (body.data && body.data._id) body.data = {...body.data, _id: new ObjectId(body.data._id)}
    response = await db.collection("equipment").find(query)
      .sort(sortCriteria)
      .toArray()
  }

  if (method == 'POST' && body.action === 'addone') {
    console.log('add 1 equipment')
    response = await db.collection("equipment").insertOne(body.data);
  }

  if (method === 'POST' && body.action === 'addmany') {
    // returns all monsters from the collection but with selected fields #projection
    console.log('insert array of equipment')
    // console.log(body.data)
    // if (body.data._id) body.data = {...body.data, _id: new ObjectId(body.data._id)}
    response = await db.collection("equipment").insertMany(body.data)
  }

  // method to edit an existing document
  if (method === 'POST' && body.action === 'editone') {
    console.log('edit a equipment')
    const id = new ObjectId(body.data._id)
    response = await db.collection("equipment").updateOne({_id: id}, {$set: {...body.data, _id: id}});
  }

  if (method === 'POST' && body.action === 'deleteone') {
    console.log('delete equipment')
    const id = new ObjectId(body.data._id)
    console.log(id)
    response = await db.collection('equipment').deleteOne({_id: id});
  }

  // console.log(response)
  res.json(response)
}