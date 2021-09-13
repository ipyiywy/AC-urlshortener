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
     let randomid = randomCode()
 urlShortener.find()
 .lean()
 .then(results => {
     const existURL = results.find(e => e.inputURL==inputURL)
     existURL ?
     randomid = existURL.randomCode
     : urlShortener.create({ inputURL, randomCode: randomid})
    
   res.render('success', { inputURL, randomCode: randomid })
 })
 .catch((error) => console.log(error))
 })

module.exports = router
