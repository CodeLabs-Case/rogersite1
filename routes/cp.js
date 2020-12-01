const router = require('express').Router()
const path = require('path')



router.route('/').get((req, res, err) => {
    if(err){
        console.log(err)
    }

    var podcasts = fs.readFileSync('/var/app/current/database/collection0.json')
    var jsonPodcasts = JSON.parse(podcasts)


    var articles = fs.readFileSync('/var/app/current/database/collection1.json')
    var jsonArticles = JSON.parse(articles)




    res.render(path.join('/var/app/current/views/cp.ejs'), { 
        podcasts: jsonPodcasts,
        articles: jsonArticles
    })
})



module.exports = router