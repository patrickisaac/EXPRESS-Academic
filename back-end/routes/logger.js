const express = require('express')
const router = express.Router()
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')

var accessLogStream = fs.createWriteStream(path.join(__dirname, './logs/access.log'), { flags: 'a' })

router.use(morgan('combined', { stream: accessLogStream }))

router.get('/', function (req, res) {
  res.send('hello, world!')
})

module.exports = router