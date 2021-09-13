const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const redirect = require('./modules/redirect')
    
router.use('/', home)
router.use('/', redirect)

module.exports = router

