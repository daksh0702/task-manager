const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// app.use((req,res,next)=>{
//      res.status(504).send('Site is under maintainance. Please try back  soon')
// })

const multer = require('multer')
const upload = multer({
     dest: 'images'
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

//
// Without middleware: new request -> run route handler
//
// With middleware: new request -> do something -> run route handler

 
app.listen(port,()=>{
     console.log('Server is up on port '+port)
})