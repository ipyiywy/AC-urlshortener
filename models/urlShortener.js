const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlShortenerSchema = new Schema({
    inputURL: {
        type: String,
        require: true,
        unique: true
    },
    randomCode: {
        type: String,
        require: true,
        unique: true
    }
   })

module.exports = mongoose.model('urlShortener', urlShortenerSchema)
