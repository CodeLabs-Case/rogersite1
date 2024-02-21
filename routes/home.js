const router = require('express').Router()
const path = require('path')
const fs = require('fs')



router.route('/').get((req, res, err)=>{
    if(err) {
        console.log(err)
    }
    const host = req.headers.host
    if(host === 'localhost:3000') {
         // Get the data for the page
        var podcasts = fs.readFileSync('C:/Users/davis/OneDrive/Documents/Development/Freelance/rogersite1/database/collection0.json')
        var jsonPodcasts = JSON.parse(podcasts)

        var articles = fs.readFileSync('C:/Users/davis/OneDrive/Documents/Development/Freelance/rogersite1/database/collection1.json')
        var jsonArticles = JSON.parse(articles)

        var home = fs.readFileSync('C:/Users/davis/OneDrive/Documents/Development/Freelance/rogersite1/database/collection2.json')
        var jsonHome = JSON.parse(home)
    }
    else {
            // Get the data for the page
        var podcasts = fs.readFileSync('/var/app/current/database/collection0.json')
        var jsonPodcasts = JSON.parse(podcasts)

        var articles = fs.readFileSync('/var/app/current/database/collection1.json')
        var jsonArticles = JSON.parse(articles)

        var home = fs.readFileSync('/var/app/current/database/collection2.json')
        var jsonHome = JSON.parse(home)
    }

    // Get the data for the page
    /*
    var podcasts = fs.readFileSync('/var/app/current/database/collection0.json')
    var jsonPodcasts = JSON.parse(podcasts)

    var articles = fs.readFileSync('/var/app/current/database/collection1.json')
    var jsonArticles = JSON.parse(articles)

    var home = fs.readFileSync('/var/app/current/database/collection2.json')
    var jsonHome = JSON.parse(home)
    */

    // Send the page
    //res.render(path.join('/var/app/current/views/home.ejs'), {p: jsonPodcasts, a: jsonArticles, h: jsonHome})

    if(host === 'localhost:3000') {
        res.render('C:/Users/davis/OneDrive/Documents/Development/Freelance/rogersite1/views/home.ejs', {p: jsonPodcasts, a: jsonArticles, h: jsonHome})
    }
    else {
        res.render(path.join('/var/app/current/views/home.ejs'), {p: jsonPodcasts, a: jsonArticles, h: jsonHome})
    }
})



module.exports = router