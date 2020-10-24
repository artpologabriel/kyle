const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

//useNewUrlParser: true

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

const db = client.db(databaseName)
   
db.collection('users').insertOne({
    name: 'Andrew',
    age: 27 ,
    date:  2020-22-10,
    level: 1
})


db.collection('users').findOne({ name: 'Andrew' }, (error , user)=>{
    if (error){
        return console.log('unable to fetch')
    }
    console.log(user)
})
   
    
// module.exports = db

   
})

