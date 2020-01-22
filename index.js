const express = require('express')
const app = express()
const port = 3000

app.get('/healthcheck', (req, res) => res.send('<h3>I\'m alive!</h3>'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))