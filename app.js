const express = require ("express")
const cors = require ("cors")
const bodyParser = require ("body-parser")
require('dotenv').config()

const app =express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.urlencoded({extended:false}))
app.use(express.json())


const  PORT = process.env.PORT

 //importando rutas 
 app.use(require('./routes/email'))

 app.listen( PORT, () =>{
    console.log ('escuchando por el puerto http://localhost:'+PORT)
 })
