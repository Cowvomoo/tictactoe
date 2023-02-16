// hola
const readline = require('readline');

const router = require('./routes/main.js');

const express = require('express');
const mongo = require('mongo');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log('test test test');

mongoose.set('strictQuery', true);

mongoose
  .connect(
    'mongodb+srv://spektree1:BegginingMoogCityDos2@cluster0.tpyi0wq.mongodb.net/Tictactoe?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(app.listen(3001))
  .catch((err) => console.error(err));

console.log('test again');
//rl.question('smdn \n', (response) => {
// console.log(`smdn ${response}`);
//});
