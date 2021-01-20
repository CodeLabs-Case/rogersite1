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

    // Get the data for the page
    var podcasts = fs.readFileSync('/var/app/current/database/collection0.json')
    var jsonPodcasts = JSON.parse(podcasts)

    var articles = fs.readFileSync('/var/app/current/database/collection1.json')
    var jsonArticles = JSON.parse(articles)

    // Send the page
    res.render(path.join('/var/app/current/views/cp.ejs'), {p: jsonPodcasts, a: jsonArticles})
})
// These routes are used as intermediaries to get the the pages where the routes actually perform a change to the database.
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
router.route('/home').get(checkAuthenticated, (req, res, err) => {
    if(err){ 
        console.log(err)
    }

    // This route needs data that will be modified, and here it is!
    var home = fs.readFileSync('/var/app/current/database/collection2.json')
    var jsonHome = JSON.parse(home)

    res.render(path.join('/var/app/current/views/updatehome.ejs'), {h: jsonHome})
})




// ADD
router.route('/addpodcast').post(checkAuthenticated, (req, res) => {

    var text = req.body.text
    var title = req.body.title
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
        "title": title,
        "link": link,
        "text": text,
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
router.route('/addarticle').post(checkAuthenticated, (req, res) => {

    var title = req.body.title
    var text = req.body.text

    // Get the date for the article
    var date = new Date()

    let intlDateObj = new Intl.DateTimeFormat('en-US', { 
        timeZone: "America/New_York" 
    });

    let usaTime = intlDateObj.format(date);

    // var year = (usaTime.getFullYear()).toString()
    // var month = (usaTime.getMonth() + 1).toString()
    // var day = (usaTime.getDate()).toString()
    // var formatedDate = month + " - " + day + " - " + year

    var temp = {
        "title": title,
        "text": text,
        "date": usaTime.toString()
    }

    // Get the data from the file
    var articles = fs.readFileSync('/var/app/current/database/collection1.json')
    var jsonArticles = JSON.parse(articles)



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



// UPDATE
router.route('/updatehome').post(checkAuthenticated, (req, res) => {
    // Get the data from the route
    var text = req.body.text

    // Read in the text from the file
    var home = fs.readFileSync('/var/app/current/database/collection2.json')
    var jsonHome = JSON.parse(home)

    // Create a new text JSON object
    var temp = {
        "text": text
    }

    // Replace the last object with the new one
    jsonHome.home[0] = temp

    // Convert the JSON to a String
    var jsonStringHome = JSON.stringify(jsonHome, null, 2)

    // Write the String into the file
    fs.writeFileSync('/var/app/current/database/collection2.json', jsonStringHome)

    // Redirect the user to the control panel, remembering to retrieve the data again.
    // Get the data for the page
    var podcasts = fs.readFileSync('/var/app/current/database/collection0.json')
    var jsonPodcasts = JSON.parse(podcasts)

    var articles = fs.readFileSync('/var/app/current/database/collection1.json')
    var jsonArticles = JSON.parse(articles)

    var home2 = fs.readFileSync('/var/app/current/database/collection2.json') // Just testing
    var jsonHome2 = JSON.parse(home2) // Just testing

    // Send the page
    res.render(path.join('/var/app/current/views/cp.ejs'), {p: jsonPodcasts, a: jsonArticles, h: jsonHome2})
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