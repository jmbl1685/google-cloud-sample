'use strict'

import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

require('./routes/movie.routes')(app)

module.exports = app

