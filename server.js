// if(process.env.NODE_ENV !== 'production'){
//     require('dotenv').config()
// }

const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
// const bcrypt = require('bcrypt')
// const passport = require('passport')
// const flash = require('express-flash')
// const session = require('express-session')
// const methodOverride = require('method-override')
const app = express()

// Moved this to /admin
// This is for setting up the login functionality
// const initializePassport = require('./passport-config')
// initializePassport(
//     passport,
//     email => users.find(user => user.email === email),
//     id => users.find(user => user.id === id)
// )

app.set('viewengine', 'ejs')

// app.use(flash())
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
// }))
// app.use(passport.initialize())
// app.use(passport.session())

// app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: false }))

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use('/static', express.static('public'));

app.use(require('./routes'))

const port = process.env.port || 3000



app.listen(port, (err)=>{
    if(err){
        console.log(err)
    }

    console.log("Server is live")
})