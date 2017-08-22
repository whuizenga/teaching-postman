const express = require('express');
const Pizza = require('../models/pizza');
const router = express.Router();

//get route
router.get('/', (req, res) => {
  Pizza.find()
    .then((pizzas) => {
      res.json(pizzas);
    });
});
//post route
router.post('/new', (req, res) => {
  const newPizza = new Pizza();
  newPizza.name = req.body.name;
  newPizza.toppings = req.body.toppings;
  newPizza.price = req.body.price;
  console.log(newPizza);
  newPizza.save()
  .then((newPizza)=> {
    res.json(newPizza);
  });
});
//put route
router.put('/:id/edit', (req, res) => {
  const id = req.params.id;
  Pizza.findByIdAndUpdate(id, {
    name: req.body.name,
    toppings: req.body.toppings,
    price: req.body.price
    })
    .then((pizza) => {
      res.json(pizza);
    });
});
//delete route
router.delete('/:id/delete', (req, res) => {
console.log("delete route git for req.params.id" + req.params.id)
  const id = req.params.id;
  Pizza.findByIdAndRemove(id)
    .then(() => {res.send("Pizza removed")})
});

module.exports = router
