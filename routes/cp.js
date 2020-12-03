const router = require('express').Router()
const path = require('path')
const fs = require('fs')



// GET
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



// ADD
router.route('/addPodcast').get((req, res) => {

    var text = req.body.text
    var link = req.body.link

    // Get the data
    var podcasts = fs.readFileSync('/var/app/current/database/collection0.json')
    var jsonPodcasts = JSON.parse(podcasts)

    // Get the date for the podcast
    var obj = new Date()
    var year = (obj.getFullYear()).toString()
    var month = (obj.getMonth() + 1).toString()
    var day = (obj.getDate()).toString()
    var date = month + " - " + day + " - " + year

    var temp = {
        "text": text,
        "link": link,
        "date": date
    }

    jsonPodcasts.podcasts.unshift(temp)


    var jsonStringPodcasts = JSON.stringify(jsonPodcasts, null, 2)
    fs.writeFileSync('/var/app/current/database/collection0.json', jsonStringPodcasts)








    // Get the data for the page
    var podcasts = fs.readFileSync('/var/app/current/database/collection0.json')
    jsonPodcasts = JSON.parse(podcasts)

    var articles = fs.readFileSync('/var/app/current/database/collection1.json')
    jsonArticles = JSON.parse(articles)

    // Send the page
    res.render(path.join('/var/app/current/views/cp.ejs'), {p: jsonPodcasts, a: jsonArticles})

})
router.route('/addArticles').get((req, res) => {
    var title = req.body.title
    var body = req.body.body

    // Get the data
    var articles = fs.readFileSync('/var/app/current/database/collection1.json')
    var jsonArticles = JSON.parse(articles)

    // Get the date for the article
    var obj = new Date()
    var year = (obj.getFullYear()).toString()
    var month = (obj.getMonth() + 1).toString()
    var day = (obj.getDate()).toString()
    var date = month + " - " + day + " - " + year

    var temp = {
        "title": title,
        "body": body,
        "date": date
    }

    jsonArticles.articles.unshift(temp)


    var jsonStringArticles = JSON.stringify(jsonArticles, null, 2)
    fs.writeFileSync('/var/app/current/database/collection1.json', jsonStringArticles)








    // Get the data for the page
    var podcasts = fs.readFileSync('/var/app/current/database/collection0.json')
    var jsonPodcasts = JSON.parse(podcasts)

    articles = fs.readFileSync('/var/app/current/database/collection1.json')
    jsonArticles = JSON.parse(articles)

    // Send the page
    res.render(path.join('/var/app/current/views/cp.ejs'), {p: jsonPodcasts, a: jsonArticles})
})



// DELETE
router.route('/deletePodcast/:id').get((req, res)=>{
    var param = req.query.id
    var paramInt = parseInt(param)

    var content = fs.readFileSync('/var/app/current/database/collection0.json')
    var jsonContent = JSON.parse(content)

    jsonContent.podcasts.splice(paramInt, 1)

    // The null, 2 in the parameter list of stringify makes the JSON more readable by adding indents and 2 spaces
    var jsonString = JSON.stringify(jsonContent, null, 2)
    fs.writeFileSync('/var/app/current/database/collection0.json', jsonString)

    // Get the data for the page
    var podcasts = fs.readFileSync('/var/app/current/database/collection0.json')
    var jsonPodcasts = JSON.parse(podcasts)

    var articles = fs.readFileSync('/var/app/current/database/collection1.json')
    var jsonArticles = JSON.parse(articles)

    // Send the page
    res.render(path.join('/var/app/current/views/cp.ejs'), {p: jsonPodcasts, a: jsonArticles})
})
router.route('/deleteArticle/:id').get((req, res)=>{
    var param = req.query.id
    var paramInt = parseInt(param)

    var content = fs.readFileSync('/var/app/current/database/collection1.json')
    var jsonContent = JSON.parse(content)

    jsonContent.articles.splice(paramInt, 1)

    // The null, 2 in the parameter list of stringify makes the JSON more readable by adding indents and 2 spaces
    var jsonString = JSON.stringify(jsonContent, null, 2)
    fs.writeFileSync('/var/app/current/database/collection1.json', jsonString)

    // Get the data for the page
    var podcasts = fs.readFileSync('/var/app/current/database/collection0.json')
    var jsonPodcasts = JSON.parse(podcasts)

    var articles = fs.readFileSync('/var/app/current/database/collection1.json')
    var jsonArticles = JSON.parse(articles)

    // Send the page
    res.render(path.join('/var/app/current/views/cp.ejs'), {p: jsonPodcasts, a: jsonArticles})
})



module.exports = router