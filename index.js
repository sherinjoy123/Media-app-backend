// step:1 import json server
const jsonServer = require('json-server')

//step:2 create server application using json server
const mediaAppServer = jsonServer.create()

// step:3 create a middleware used by json server
const middleware = jsonServer.defaults()

// step:4 create router : set up router for db.json file
const router = jsonServer.router('db.json')

//step:5 applying middleware to server
mediaAppServer.use(middleware)

//step:6 applying router to server
mediaAppServer.use(router)

//step:7 define port
const PORT =3000

//step:8 start the server
mediaAppServer.listen(PORT,()=>{
    console.log("Media app Server started on PORT"+PORT);
})