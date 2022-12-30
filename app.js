const mongoose= require("mongoose")
const express = require('express')
const app = express()

const port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/mong')

const userSchema= mongoose.Schema({
    name:String ,
    email:String,
    password:String
})

mongoose.model('user',userSchema)


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))