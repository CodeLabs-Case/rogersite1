const router = require('express').Router()



router.route('/').get((req, res, err)=>{
    if(err) {
        console.log(err)
    }

    // Get the data for the page
    var podcasts = fs.readFileSync('/var/app/current/database/collection0.json')
    var jsonPodcasts = JSON.parse(podcasts)

    var articles = fs.readFileSync('/var/app/current/database/collection1.json')
    var jsonArticles = JSON.parse(articles)

    // Send the page
    res.render(path.join('/var/app/current/views/home.ejs'), {p: jsonPodcasts, a: jsonArticles})
})



module.exports = router