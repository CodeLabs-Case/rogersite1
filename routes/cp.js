const router = require('express').Router()
const path = require('path')



router.route('/').get((req, res, err) => {
    if(err){
        console.log(err)
    }

    var podcast = fs.readFileSync('/var/app/current/database/collection0.json')
    var jsonPodcasts = JSON.parse(podcast)


    var article = fs.readFileSync('/var/app/current/database/collection1.json')
    var jsonArticles = JSON.parse(article)




    res.render(path.join('/var/app/current/views/cp.ejs'), { 
        podcasts: jsonPodcasts,
        articles: jsonArticles
    })
})



module.exports = router