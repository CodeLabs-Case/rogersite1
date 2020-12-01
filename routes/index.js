const router = require('express').Router()


router.use('/', require('./home.js'))

// router.use('/', require('./podcasts.js'))
// router.use('/articles', require('./articles.js'))
router.use('/admin', require('./admin.js'))
router.use('/controlpanel', require('./cp.js'))





module.exports = router