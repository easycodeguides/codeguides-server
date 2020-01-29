const express = require('express')
const homeRouter = require('./routes/home')
const apiRouter = require('./routes/api')

const app = express()
const port = 3007

app.use('^/$', homeRouter)
app.use('/api', apiRouter)
app.get('/healthcheck', (req, res) => res.send(''))

// eslint-disable-next-line
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
