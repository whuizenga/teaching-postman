require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var Pizza = require('../models/pizza');

mongoose.Promise = global.Promise;

Pizza.remove({}, (err) => console.log(err));

const pizza1 = new Pizza({
    name: "Pepperoni",
    toppings: ["Cheese", "Pepperoni"],
    price: 8.99
});

const pizza2 = new Pizza({
    name: "Cheese",
    toppings: ["Cheese"],
    price: 7.99
})

const pizza3 = new Pizza({
    name: "Bbq Chicken",
    toppings: ["Cheese", "Bbq Sauce", "Chicken"],
    price: 9.99
})

const pizza4 = new Pizza({
    name: "Meat lovers",
    toppings: ["Cheese", "Sausage", "Pepperoni", "Ham", "Chicken"],
    price: 114.99,
})

const pizza5 = new Pizza({
    name: "Hawaiian",
    toppings: ["Cheese", "Ham", "Pineapple"],
    price: 9.99
})

pizza1.save();
pizza2.save();
pizza3.save();
pizza4.save();
pizza5.save();

mongoose.connection.close();