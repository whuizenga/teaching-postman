const mongoose = require('mongoose');

const PizzaSchema = mongoose.Schema({
    name: String,
    toppings: [String],
    price: Number
});

var PizzaModel = mongoose.model("Pizza", PizzaSchema);


module.exports = {Pizza: PizzaModel};

