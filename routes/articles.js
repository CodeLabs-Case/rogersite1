const router = require('express').Router()
const path = require('path')
const fs = require('fs')



router.route('/').get((req, res, err)=>{
    if(err){
        console.log(err)
    }

    var content = fs.readFileSync('./database/collection1.json')
    var jsonContent = JSON.parse(content)

    // Production
    res.render(path.join('/var/app/current/views/articles.ejs'), {data: jsonContent})
    // Development
    // res.render(path.join('C:/Users/davis/OneDrive/Documents/Development/Freelance/rogersite1/routes/articles.js'))
    
})

module.exports = router