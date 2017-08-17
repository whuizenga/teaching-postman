require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var Pizza = require('../models/pizza');

mongoose.Promise = global.Promise;

Pizza.remove({}, (err) => console.log(err));

const pizza1 = new Pizza({
    name: "Pepporoni"
})