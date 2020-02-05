const express = require('express')
const bodyParser = require('body-parser')
const tutorials = require('../controllers/tutorials')

const router = express.Router()

// for parsing application/json
router.use(bodyParser.json())

// for parsing application/xwww-
router.use(bodyParser.urlencoded({ extended: true }))

router.get('/git/', (req, res) => { // access with api/git
  res.send('Git')
})

router.post('/tutorials/add', (req, res) => {
  res.send(tutorials.add(req, res))
})

router.get('/*', (req, res) => {
  res.send('Api address is not defined')
})

module.exports = router
