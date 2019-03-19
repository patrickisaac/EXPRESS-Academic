const {
  NX_API_KEY,
  NX_API_SECRET,
  NX_NUMBER,
  EMAIL,
  PASSWORD
} = process.env
const express = require('express')
const router = express.Router()
const fs = require('fs')
const { Client } = require('../models')
const nodemailer = require('nodemailer')
const Nexmo = require('nexmo')
const nexmo = new Nexmo({
  apiKey: NX_API_KEY,
  apiSecret: NX_API_SECRET
})
const virtualNumber = NX_NUMBER


router.post('/', (req, res) => {
  const { name, email, number } = req.body
  const emailMessage =
    `<p>You will receive addition information once your email has been verified.</p>
   <p><a href="http://localhost:8080/confirm?email=${email}">Confirm Email</a></p>`

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL,
      pass: PASSWORD
    }
  })

  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: 'Please Validate Email',
    html: emailMessage
  }

  Client.create({
    name,
    email,
    number
  }).then(result => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
    })
  }).then(result => {
    res.json({
      formSent: true
    })
  })
    .catch(err => {
      console.log(err)
      res.json({
        formSent: false
      })
    }).done()
})

// router.get('/', (req, res) => {
//   const { email } = req.query
//   Client.findOne({
//     where: { email: email }
//   }).then(result => {
//     res.json(result.name)
//   })
// })


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
    }).then(client => {
      nexmo.message.sendSms(
        virtualNumber, `1${client.number}`,
        `Hello ${client.name}! The instructor will be contacting you shortly!`,
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