require('dotenv').config()

const express = require('express')
const htmlRouter = require('./routes/html')
const apiRouter = require('./routes/api')

const app = express()
const port = 3007

// public folder
app.use(express.static('src/public'))
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRouter)
app.use('*', htmlRouter)

// eslint-disable-next-line
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
