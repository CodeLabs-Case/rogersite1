const router = require('express').Router()
const fs = require('fs')

router.route('/').get((req, res)=>{
    var content = fs.readFileSync('./database/collection0.json')
    var jsonContent = JSON.parse(content)

    res.render('/var/app/current/views/articles.ejs')
})

module.exports = router