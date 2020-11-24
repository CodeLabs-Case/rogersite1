const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const app = express()



app.set('viewengine', 'ejs')

app.use(bodyParser.json())

app.use('/static', express.static('public'));

app.use(require('./routes'))

const port = process.env.port || 3000



app.listen(port, (err)=>{
    if(err){
        console.log(err)
    }

    console.log("Server is live.")
})