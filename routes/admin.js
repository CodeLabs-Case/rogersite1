const router = require('express').Router()
const { json } = require('body-parser')
const path = require('path')
const fs = require('fs')



router.get('/', (req, res, err) => {
    if(err) {
        console.log(err)
    }
    res.render(path.join('/var/app/current/views/admin.ejs'))
})
router.post('/', passport.authenticate('local'), {
    successRedirect: '/controlpanel',
    failureRedirect: '/admin',
    failureFlash: true
})



// function checkAuthenticated(req, res, next){
//     if(req.isAuthenticated()) {
//         return next()
//     }
//     res.redirect('/var/app/current/views/admin.ejs')
// }
// function checkNotAuthenticated(req, res, next) {
//     if(req.isAuthenticated()) {
//         return res.redirect('/var/app/current/views/controlpanel.ejs')  
//     }
//     next() 
// }



module.exports = router