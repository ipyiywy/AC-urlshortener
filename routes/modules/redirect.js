const express = require('express')
const router = express.Router()

const urlShortener = require('../../models/urlShortener')
const randomCode = require('../../randomCode')

//redirect page
router.get('/:randomid', (req, res) => {
    const randomid = req.params.randomid
    return urlShortener.findOne({randomCode: randomid})
        .then(link => res.redirect(link.inputURL))
        .catch((error) => console.log(error))
})

module.exports = router

