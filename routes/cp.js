const router = require('express').Router()
const path = require('path')
const fs = require('fs')


// GET
router.get('/', checkAuthenticated, (req, res, err) => {
    if(err){
        console.log(err)
    }

    // Pull the data from the forms
    // Try two ways to get the data from the forms for testing purposes
    // const { email, password } = req.body

    // Read in the database file
    var content = fs.readFileSync('/var/app/current/database/signin.json')
    var jsonContent = JSON.parse(content)

    // Get the data for the page
    var podcasts = fs.readFileSync('/var/app/current/database/collection0.json')
    var jsonPodcasts = JSON.parse(podcasts)

    var articles = fs.readFileSync('/var/app/current/database/collection1.json')
    var jsonArticles = JSON.parse(articles)

    // Send the page
    res.render(path.join('/var/app/current/views/cp.ejs'), {p: jsonPodcasts, a: jsonArticles})
})
router.route('/podcast').get(checkAuthenticated, (req, res, err) => {
    if(err){ 
        console.log(err)
    }

    res.render(path.join('/var/app/current/views/addpodcast.ejs'))
})
router.route('/article').get(checkAuthenticated, (req, res, err) => {
    if(err){ 
        console.log(err)
    }

    res.render(path.join('/var/app/current/views/addarticle.ejs'))
})



// ADD
router.route('/addpodcast').get(checkAuthenticated, (req, res) => {

    // var text = req.body.text
    // var link = req.body.link

    // var textString = JSON.stringify(text)
    // var linkString = JSON.stringify(link)

    var obj = JSON.stringify(req.body)
    

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
        "text": req.body.text,
        "link": obj.link,
        "date": date
    }

    jsonPodcasts.podcasts.unshift(temp)


    var jsonStringPodcasts = JSON.stringify(jsonPodcasts, null, 2)
    fs.writeFileSync('/var/app/current/database/collection0.json', jsonStringPodcasts)








    // Get the data for the page
    var podcasts2 = fs.readFileSync('/var/app/current/database/collection0.json')
    jsonPodcasts2 = JSON.parse(podcasts2)

    var articles2 = fs.readFileSync('/var/app/current/database/collection1.json')
    jsonArticles2 = JSON.parse(articles2)

    // Send the page
    res.render(path.join('/var/app/current/views/cp.ejs'), {p: jsonPodcasts2, a: jsonArticles2})

})
router.route('/addarticle').get(checkAuthenticated, (req, res) => {

    var title = req.body.title
    var body = req.body.body

    var titleString = JSON.stringify(title)
    var bodyString = JSON.stringify(body)

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
        "title": titleString,
        "body": bodyString,
        "date": date
    }

    jsonArticles.articles.unshift(temp)


    var jsonStringArticles = JSON.stringify(jsonArticles, null, 2)
    fs.writeFileSync('/var/app/current/database/collection1.json', jsonStringArticles)








    // Get the data for the page
    var podcasts2 = fs.readFileSync('/var/app/current/database/collection0.json')
    var jsonPodcasts2 = JSON.parse(podcasts2)

    var articles2 = fs.readFileSync('/var/app/current/database/collection1.json')
    jsonArticles2 = JSON.parse(articles2)

    // Send the page
    res.render(path.join('/var/app/current/views/cp.ejs'), {p: jsonPodcasts2, a: jsonArticles2})
})



// DELETE
router.route('/deletePodcast/:id').get(checkAuthenticated, (req, res)=>{
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
router.route('/deleteArticle/:id').get(checkAuthenticated, (req, res)=>{
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
router.delete('/logout', checkAuthenticated, (req, res)=>{
    req.logOut()
    res.redirect('/')
})



function checkAuthenticated(req, res, next){
    if(req.isAuthenticated()) {
        return next()
    }
    res.redirect('/admin')
}
// function checkNotAuthenticated(req, res, next) {
//     if(req.isAuthenticated()) {
//         return res.redirect(path.join('/var/app/current/views/controlpanel.ejs'))  
//     }
//     next() 
// }



module.exports = router