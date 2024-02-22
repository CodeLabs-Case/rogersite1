const router = require('express').Router()
const path = require('path')
const fs = require('fs')
require('dotenv').config()

const basePath = process.env.BASE_PATH

router.route('/').get((req, res, err)=>{
    if(err) {
        console.log(err)
    }
    const host = req.headers.host
    if(host === 'localhost:3000') {
         // Get the data for the page
        var podcasts = fs.readFileSync(basePath + 'rogersite1/database/collection0.json')
        var jsonPodcasts = JSON.parse(podcasts)

        var articles = fs.readFileSync(basePath + 'rogersite1/database/collection1.json')
        var jsonArticles = JSON.parse(articles)

        var home = fs.readFileSync(basePath + 'rogersite1/database/collection2.json')
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

    if(host === 'localhost:3000') {
        res.render(basePath + 'rogersite1/views/home.ejs', {p: jsonPodcasts, a: jsonArticles, h: jsonHome})
    }
    else {
        res.render(path.join('/var/app/current/views/home.ejs'), {p: jsonPodcasts, a: jsonArticles, h: jsonHome})
    }
})



module.exports = router