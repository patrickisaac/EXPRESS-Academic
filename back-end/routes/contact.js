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
    //Use for validation
   // html: `<p><a href="http://localhost:8080/confirm?email=${email}">Confirm Email</a></p>` //
    text: "This is a test"
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
    nexmo.message.sendSms(
      virtualNumber, `1${number}`, "test",
      (err, responseData) => {
        if (err) {
          console.log(err);
        } else {
          console.dir(responseData);
        }
      }
    )
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