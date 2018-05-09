const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const bcrypt = require('bcrypt-nodejs');
// const auth = require('./helpers.js');
// const session = require('express-session');
// const db = require('../database/index.js');

//Initializes json bodyparser
app.use(bodyParser.json());

//app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  res.send('Welcome to House Stark server.')
});


module.exports = app;
