// if(process.env.NODE_ENV !== 'production'){
//     require('dotenv').config()
// }


const express = require('express')
const path = require('path')
var bodyParser = require('body-parser')
// const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const app = express()



var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// You wouldn't usually store this here, but as it is just for one admin user and this ...
// ... project is in a rush, it will have to do.
const users = [
    {
        "id": 1,
        "email": "rogtarheel@gmail.com",
        "password": "tarheels"
    }
]

// This is for setting up the login functionality
const initializePassport = require('./passport-config')
initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)

app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())



app.set('viewengine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.use(methodOverride('_method'))

app.use('/static', express.static('public'));

app.use(require('./routes'))

const port = process.env.port || 3000





app.listen(port, (err)=>{
    if(err){
        console.log(err)
    }

    console.log("Server is live")
})



app.get('/admin', checkNotAuthenticated, (req, res) => {
    res.render(path.join('/var/app/current/views/admin.ejs'))
})
  
app.post('/admin', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/controlpanel',
    failureRedirect: '/admin',
    failureFlash: true
}))

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
  
    res.redirect('/admin')
}
  
function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/controlpanel')
    }
    next()
}