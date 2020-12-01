const router = require('express').Router()
const path = require('path')
const fs = require('fs')


router.route('/').get((req, res, err) => {
    if(err){
        console.log(err)
    }

    // Pull the data from the forms
    // Try two ways to get the data from the forms for testing purposes
    // const { email, password } = req.body

    var email = req.body.email
    var password = req.body.password

    // Read in the database file
    var content = fs.readFileSync('/var/app/current/database/signin.json')
    var jsonContent = JSON.parse(content)


    // Compare the data
    if(jsonContent.email == email && jsonContent.password == password){

        // Get the data for the page
        var podcasts = fs.readFileSync('/var/app/current/database/collection0.json')
        var jsonPodcasts = JSON.parse(podcasts)

        var articles = fs.readFileSync('/var/app/current/database/collection1.json')
        var jsonArticles = JSON.parse(articles)

        // Send the page
        res.render(path.join('/var/app/current/views/cp.ejs'), {p: jsonPodcasts, a: jsonArticles})

    } else {

        res.render(path.join('/var/app/current/views/admin.ejs'))

    }    
})



module.exports = router