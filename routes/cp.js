const router = require('express').Router()
const path = require('path')



router.route('/').get((req, res, err) => {
    if(err){
        console.log(err)
    }
    res.render(path.join('/var/app/current/views/cp.ejs'))
})



module.exports = router