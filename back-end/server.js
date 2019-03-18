const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dancerInfo = require('./routes/dancers')
const PORT = process.argv[2] || 8080

app.use(bodyParser.json())

app.use('/dancers', dancerInfo)

app.listen(PORT, () => {
  console.log(`Server running and listening on port ${PORT}...`)
})