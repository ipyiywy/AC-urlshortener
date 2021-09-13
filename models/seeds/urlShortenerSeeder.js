const urlShortener = require('../urlShortener')
const urlShortenerSeed = require('../../urlShorteners.json')

const db = require('../../config/mongoose')

db.once('open', () => {
  urlShortenerSeed.results.forEach(item => {
    urlShortener.create({
      inputURL: item.inputURL,
      randomCode: item.randomCode
    })
  })
})
