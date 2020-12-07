const router = require('express').Router()



router.use('/', require('./home.js'))
router.use('/controlpanel', require('./cp.js'))



module.exports = router