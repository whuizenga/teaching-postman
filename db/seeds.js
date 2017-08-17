require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

//make 5 pizzas
//1 that is terribly overpriced