const e = require('express')
const express = require('express')

const rota = express.Router()


let db = [
    {'1':{Nome:'Cliente 1' , age:20}},
    {'2':{Nome:'Cliente 2' , age:35}},
    {'3':{Nome:'Cliente 3' , age:28}}
]


rota.get('/'  , (req , res) => {
   return res.json({db})
})

rota.post('/add' , (req , res)=>{
    const body = req.body

   if(!body){
    return res.status(400).end() 
   }
   db.push(body)
   return res.json(body) 
})

rota.delete('/:id' , (req , res)=>{
    const id = req.params.id

 

    let newDB = db.filter(item =>{
        if(!item[id]){
            return  item 
        }
    })
    
    db = newDB

    return res.send(newDB)
})


module.exports = rota