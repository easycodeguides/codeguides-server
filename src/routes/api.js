const express = require('express')
const tutorials = require('../controllers/tutorials')
const repos = require('../controllers/repos')

const router = express.Router()

router.get('/git/', (req, res) => {
  // access with api/git
  res.send('Git')
})

router.get('/tutorials/add', (req, res) => {
  // change to post
  res.send(tutorials.add())
})

router.post('/repos/add', async (req, res) => {
  const url = req.body.url
  await repos.get(url)
  res.send(`added repo:${url}`)
})

router.get('/*', (req, res) => {
  // repos.get()
  res.send('Api address is not defined')
})

module.exports = router
