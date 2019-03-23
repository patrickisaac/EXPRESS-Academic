const { MYEMAIL, MYPASSWORD, BACKEND_SERVER } = process.env
const express = require('express')
const router = express.Router()
const { Client } = require('../models')
const nodemailer = require('nodemailer')

router.post('/', (req, res) => {
  const { name, email, number, instructor } = req.body
  const emailMessage = `<p>You will receive addition information once your email has been verified.</p>
   <p><a href="${BACKEND_SERVER}/confirm?email=${email}">Confirm Email</a></p>`

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: MYEMAIL,
      pass: MYPASSWORD
    }
  })

  const mailOptions = {
    from: MYEMAIL,
    to: email,
    subject: 'EXPRESS - Please Validate Email',
    html: emailMessage
  }

  Client.create({
    name,
    email,
    number,
    instructor
  })
    .then(result => {
      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error)
        } else {
          console.log('Email sent: ' + info.response)
        }
      })
    })
    .then(result => {
      res.json({ formSent: true })
    })
    .catch(err => {
      console.log(err)
      res.json({ formSent: false })
    })
    .done()
})

module.exports = router
