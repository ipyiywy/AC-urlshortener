const express = require('express')
const router = express.Router()

const urlShortener = require('../../models/urlShortener')
const randomCode = require('../../randomCode')


//index page
router.get('/', (req, res) => {
    return res.render('index')
})

//create data
router.post('/', (req, res) => {
    const inputURL = req.body.inputURL
    let randomid = ''
    urlShortener.find()
        .lean()
        .then(results => {
            const existURL = results.find(e => e.inputURL==inputURL)
            const existRandomCode = results.find(e => randomid == e.randomCode)

           if(existRandomCode) {
               randomid = randomCode()
           }

            if(existURL){
                randomid = existURL.randomCode}
            else {
                urlShortener.create({ inputURL, randomCode: randomid})
            }

            res.render('success', { inputURL, randomCode: randomid })
        })
        .catch((error) => console.log(error))
})

module.exports = router
