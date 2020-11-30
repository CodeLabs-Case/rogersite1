const router = require('express').Router()
const { json } = require('body-parser')
const path = require('path')



router.route('/').get((req, res, err) => {
    if(err) {
        throw err
    }
    res.render(path.join('/var/app/current/views/admin.ejs'))
})
router.route('/signin').get((req, res, err) => {
    // Pull the data from the forms
    // Try two ways to get the data from the forms for testing purposes
    const { data } = req.body

    var email = req.body.email
    var password = req.body.password

    // Read in the database file
    var content = fs.readFileSync('./database/signin.json')
    var jsonContent = JSON.parse(content)

    // Compare the data
    if(jsonContent.credentials.email == email && jsonContent.credentials.password == password){
        // Send the page
        res.render(path.join('/var/app/current/views/cp.ejs'))
    }
})



module.exports = router