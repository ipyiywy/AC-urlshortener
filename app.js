const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const Str = require('@supercharge/strings')

const routes = require('./routes')

const port = process.env.PORT || 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

require('./config/mongoose')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)
app.use(express.static('public'))


app.listen(port, () => {
    console.log(`Express is running on http://localhost:${port}`)
})
