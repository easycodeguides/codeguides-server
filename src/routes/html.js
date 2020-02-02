const express = require('express')

const router = express.Router()
const documentation = require('../controllers/documentation')
const home = require('../controllers/home')

router.get('*', (req, res) => {
  const params = req.originalUrl.split('?')[0].split('/')
  switch (params[1]) {
  case '':
    res.send(home())
    break
  case 'health':
  case 'healthcheck':
    res.send('')
    break
  case 'doc':
    res.send(documentation())
    break
  default:
    res.status(404).send('Not found')
  }
})

module.exports = router
