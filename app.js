const express = require('express')
const app = express()
const mongoose = require('mongoose')
const user = require('./models/users')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
mongoose.connect('mongodb+srv://avenger:NWSXWIBX73UHVUoj@cluster0.xja0h.mongodb.net/tutorial?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
)
//get request
app.get('/users', (req,res)=>{
   user.find().then((data) =>{
       res.json(data)
   })
})
//post request
// app.post('/users', jsonParser, (req,res)=>{
//    res.end(res.body.name)
// })

app.get('/search/:name', (req,res)=>{
const regex = new RegExp(req.params.name,'i')
user.find({name: regex}).then((result)=>{
    res.status(200).json(result)
})
})

app.listen(4000)