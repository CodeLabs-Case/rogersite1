// if(process.env.NODE_ENV !== 'production'){
//     require('dotenv').config()
// }


const express = require('express')
const path = require('path')
// const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const app = express()

const users = [
    {
        "id": 1,
        "email": "roger@gmail.com",
        "password": "things"
    }
]

// This is for setting up the login functionality
const initializePassport = require('./passport-config')
initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)

// const initializePassport = require('./passport-config')
// initializePassport(
//     passport,
//     email => "roger@gmail.com",
//     id => 1
//     // "roger@gmail.com",
//     // 1
// )

app.set('viewengine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(methodOverride('_method'))

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





// app.get('/admin', (req, res, err) => {
//     if(err) {
//         console.log(err)
//     }
//     res.render(path.join('/var/app/current/views/admin.ejs'))
// })
// app.post('/admin', passport.authenticate('local'), {
//     successRedirect: '/controlpanel',
//     failureRedirect: '/admin',
//     failureFlash: true
// })


app.get('/admin', checkNotAuthenticated, (req, res) => {
    res.render('/admin')
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
      return res.redirect('/')
    }
    next()
}