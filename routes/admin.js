const router = require('express').Router()
const { json } = require('body-parser')
const path = require('path')
const fs = require('fs')



router.route('/').get((req, res, err) => {
    if(err) {
        console.log(err)
    }
    res.render(path.join('/var/app/current/views/admin.ejs'))
})



module.exports = router