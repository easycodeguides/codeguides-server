const express = require('express')
const tutorials = require('../controllers/tutorials')

const router = express.Router()

router.get('/git/', (req, res) => { // access with api/git
  res.send('Git')
})

router.get('/tutorials/add', (req, res) => { // change to post
  res.send(tutorials.add())
})

router.get('/*', (req, res) => {
  res.send('Api address is not defined')
})

module.exports = router
