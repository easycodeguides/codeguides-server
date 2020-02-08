const express = require('express')
const htmlRouter = require('./routes/html')
const apiRouter = require('./routes/api')
const path = require('path')

require('dotenv').config({
  path: path.resolve(__dirname, '/../.env')
})

const app = express()
const port = 3007

// public folder
app.use(express.static('src/public'))
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRouter)
app.use('*', htmlRouter)

// eslint-disable-next-line
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
