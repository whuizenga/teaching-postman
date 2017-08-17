# teaching-postman

## Learning Objectives

- Learn how to use postman to show data from your api.
- You can also use postman to test your POST and PUT routes.

## What is Postman

Postman is the most complete toolchain for API development. The most-used REST client worldwide. Designed from the ground up to support the API developer. Intuitive user interface to send requests, save responses, add tests, and create workflows Read the docs.

### what does that mean?

It means that when we are building out our backend we can use Postman to test, and see that our server works before we put anything on our front end.  

It makes full-stack development simpler by removing opportunities for more things to go wrong.  Without postman you would have to build your api, and your api requests, and if either of those have an error you would have to fix that error before you could see if the api was giving you the data you want.  Postman allows you to test your expectations that much sooner.

## Code along

We will build a quick express server to show off how you can use postman to test your server. Lets start off by installing the necessary npm packages.

```
npm init -y
npm i -S express dotenv mongoose
touch server.js
```

### Create a quick little express server

Most of this is boiler plate now so we'll just copy this into our server.js

```
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI); //mongodb://localhost/learning-postman

const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
}); 

// If the connection throws an error
connection.on('error', (err) => {  
  console.log('Mongoose default connection error: ' + err);
}); 

app.get('/', (req,res) => {
  res.send('Hello world!')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is up on port: " + PORT);
})
```

Don't forget to make your .env file and add it to your gitignore.

```
