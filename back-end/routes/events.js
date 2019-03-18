const express = require('express')
const router = express.Router()
require('dotenv').config()
const axios = require('axios')
const apiKey = process.env.EB_API_KEY

const danceURL = `https://www.eventbriteapi.com/v3/events/search/?location.address=vancouver&location.within=20km&categories=105&subcategories=5004&search_type=dance&token=${apiKey}`

router.get('/', (req, res) => {
  axios.get(danceURL).then(response => {
    res.json(response.data.events)
  })
})

module.exports = router