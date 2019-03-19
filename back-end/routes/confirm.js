const {
  NX_API_KEY,
  NX_API_SECRET,
  NX_NUMBER
} = process.env
const express = require('express')
const router = express.Router()
const { Client } = require('../models')
const Nexmo = require('nexmo')
const nexmo = new Nexmo({
  apiKey: NX_API_KEY,
  apiSecret: NX_API_SECRET
})
const virtualNumber = NX_NUMBER


router.get('/', (req, res) => {
  const { email } = req.query
  Client.findOne({
    where: { email: email }
  }).then(result => {
    const updateData = {
      validated: true
    }
    Client.update(updateData, {
          where: { email: email }
    })
    Client.findOne({
      where: { email: email}
    })
    .then(client => {
      nexmo.message.sendSms(
        virtualNumber, `1${client.number}`,
        `Hello ${client.name}! ${client.instructor} will be contacting you shortly!`,
        (err, responseData) => {
          if (err) {
            console.log(err);
          } else {
            console.dir(responseData);
          }
        }
      )
      res.json({
        validated: true
      })
    })
  })
})

module.exports = router