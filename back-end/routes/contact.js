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
  const { name, email, number, instructor } = req.body
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
    number,
    instructor
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

module.exports = router