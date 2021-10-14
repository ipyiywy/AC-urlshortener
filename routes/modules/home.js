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
    //let randomid = randomCode()
    let randomid = 'IPIM7'
    urlShortener.find()
        .lean()
        .then(results => {
            //check random code if already existed
            while(results.find(e => e.randomCode == randomid)){
                randomid = randomCode()
            }
            
            //check URL if already existed
            const existURL = results.find(e => e.inputURL==inputURL)
            if(existURL){
                randomid = existURL.randomCode}
            else {
                urlShortener.create({ inputURL, randomCode: randomid})
            }

            res.render('success', { inputURL, randomCode: randomid })
        })
        .catch((error) => {

        })
})

module.exports = router
