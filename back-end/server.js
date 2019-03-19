const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const logger = require('./routes/logger')
const events = require('./routes/events')
const dancerInfo = require('./routes/dancers')
const contactForm = require('./routes/contact')
const PORT = process.argv[2] || 8080

app.use(bodyParser.json())

app.use('/', logger)
app.use('/events', events)
app.use('/dancers', dancerInfo)
app.use('/contact', contactForm)
app.use('/confirm', contactForm)

app.listen(PORT, () => {
  console.log(`Server running and listening on port ${PORT}...`)
})