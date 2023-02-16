// hola
const readline = require('readline');

const router = require('./routes/main.js');

const express = require('express');
const mongo = require('mongo');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express(router);

app.use(cors);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

mongoose
  .connect(
    'mongodb+srv://spektree1:BegginingMeepCityDos2@cluster0.tpyi0wq.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((res) => app.listen(3001))
  .catch((err) => console.log(err));

//rl.question('smdn \n', (response) => {
// console.log(`smdn ${response}`);
//});
