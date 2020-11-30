const router = require('express').Router()



router.use('/', require('./podcasts.js'))
router.use('/articles', require('./articles.js'))
router.use('/admin', require('./admin.js'))



module.exports = router