const mongoose = require('mongoose');

const PizzaSchema = mongoose.Schema({
    name: String,
    toppings: [Strings],
    price: Number
});

var PizzaModel = mongoose.model("Pizza", PizzaSchema);


module.exports = PizzaModel;

