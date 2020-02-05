const express = require('express')
const htmlRouter = require('./routes/html')
const apiRouter = require('./routes/api')

const app = express()
const port = 3007

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// public folder
app.use(express.static('src/public'))
app.use('/api', apiRouter)

app.use('*', htmlRouter)

// eslint-disable-next-line
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
