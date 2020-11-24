const router = require('express').Router()
const path = require('path')
const fs = require('fs')

router.route('/').get((req, res, err)=>{
    if(err){
        console.log(err)
    }

    // var content = fs.readFileSync('./database/collection0.json')
    // var jsonContent = JSON.parse(content)

    res.render(path.join('/var/app/current/views/articles.ejs'))
})

module.exports = router