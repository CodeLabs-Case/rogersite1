const router = require('express').Router()
const path = require('path')
const fs = require('fs')

router.route('/').get((req, res)=>{
    var content = fs.readFileSync('./database/collection0.json')
    var jsonContent = JSON.parse(content)

    res.render(path.join('/var/app/current/views/podcasts.ejs'))
})

// router.route('/delete/:id').get((req, res)=>{
//     var param = req.query.id
//     var paramInt = parseInt(param)

//     var content = fs.readFileSync('./collection0.json')
//     var jsonContent = JSON.parse(content)

//     jsonContent.podcasts.splice(paramInt, 1)

//     // The null, 2 in the parameter list of stringify makes the JSON more readable by adding indents and 2 spaces
//     var jsonString = JSON.stringify(jsonContent, null, 2)
//     fs.writeFileSync('./collection0.json', jsonString)

//     var content = fs.readFileSync('./collection0.json')
//     var jsonContent = JSON.parse(content)

//     res.render('./home.ejs', { output: jsonContent })
// })

// router.route('/modify/:id').get((req, res)=>{
//     // Read database version
//     var param = req.query.id
//     var paramInt = parseInt(param)

//     var content = fs.readFileSync('./collection0.json')
//     var jsonContent = JSON.parse(content)

//     // Try to pull out a single entry and it doesnt work

//     // Read element version
//     // ...

//     var val = toString(jsonContent.podcasts[paramInt].link)

//     res.render('./modifypodcast.ejs', { output: val } )
// })


module.exports = router