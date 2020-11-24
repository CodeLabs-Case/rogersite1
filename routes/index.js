const router = require('express').Router()



router.use('/', require('./podcasts.js'))
router.use('/articles', require('./articles.js'))



module.exports = router