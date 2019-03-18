const express = require('express')
const router = express.Router()
const fs = require('fs')
const dancers = require('./databases/dancers')
const dancerDetails = require('./databases/dancerDetails')

router.get('/', (req, res) => {
 res.json(dancers)
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  const selectDancer = dancerDetails.find(dancer => {
    return id === dancer.id
  })
  res.json(selectDancer)
})

module.exports = router