const express = require('express');
const Pizza = require('../models/pizza');
const router = express.Router()

//get route
router.get('/', (req, res) => {
  Pizza.find()
    .then((pizzas) => {
      res.json(pizzas)
    })
})
//post route

//put route

//delete route

module.exports = router
