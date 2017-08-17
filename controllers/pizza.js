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
router.post('/new', (req, res) => {
  const newPizza = new Pizza()
  newPizza.name = req.body.name
  newPizza.toppings = req.body.toppings
  newPizza.price = req.body.price
  console.log('hello')
  newPizza.save()
  .then((newPizza)=> {
    res.json(newPizza)
  })
})
//put route

//delete route

module.exports = router
