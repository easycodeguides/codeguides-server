const express = require('express')
const app = express()
const port = 3000

app.get('/health-check', (req, res) => res.send('I\'m alive!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))