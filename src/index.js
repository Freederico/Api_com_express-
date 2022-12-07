const express = require('express') 
const morgan = require('morgan') 
const  cors = require('cors') 
const bP = require('body-parser') 
const rota = require('./routes/rota')

const server = express()


server.use(morgan('dev'))
server.use(bP.urlencoded({extended:false}))
server.use(express.json())
server.use(cors())

server.use('/api' , rota)




server.listen(2000 , ()=>{
    console.log("express started at http://localhost:2000")
})