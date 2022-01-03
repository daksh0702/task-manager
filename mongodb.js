// CRUD with mongodb
// mongoose - model ,validation, authentication 
const {MongoClient,ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{ useUrlParser:true},(error,client)=>{
    if(error){
        return console.log(error)
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name:'Daksh',
    //     age: 24
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops) 
    // }) 

    // db.collection('users').insertMany([{
    //     name:'Jen',
    //     age: 28
    // },
    // {  
    //     name:'Gunther',
    //     age:27
    // }
    // ],(err,result)=>{
    //     if(error){
    //         return console.log('Unable to insert documents')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: "Task one",
    //         completed: false
    //     },
    //     {
    //         description: "Task two",
    //         completed: true
    //     },
    //     {
    //         description: "Task three",
    //         completed: true
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert tasks')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').findOne({_id: new ObjectID("61d0295509da95c98d0f42d6")},(error,task)=>{
    //     if(error){
    //         return console.log("Couldn't fetch task with given id")
    //     }
    //     console.log(task)
    // })

    // db.collection('tasks').find({completed:false}).toArray((error,tasks)=>{
    //     if(error){
    //         return console.log("Couldn't fetch uncomplete tasks")
    //     }
    //     console.log(tasks)
    // })

    // const updatePromise = db.collection('users').updateOne({
    //     _id:new ObjectID("61d027143a1b23c8a256e57e")
    // },{
    //     $set:{
    //         name: 'Mike'
    //     }
    // })

    // updatePromise.then((result)=>{
    //     console.log(result)
    // }).catch(error => console.log(error))

    // db.collection('tasks').updateMany({
    //     completed: false
    // },
    // {
    //     $set:{
    //         completed: true
    //     }
    // })
    // .then(result => console.log(result))
    // .catch(error => console.log(error))

    db.collection('tasks').deleteMany({
        completed: true
    }).then(result => console.log(result))
    .catch(error => console.log(error))

    db.collection('tasks').deleteOne({
        description: 'Task one'
    }).then(result => console.log(result))
    .catch(error => console.log(error))

}) 