const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const googleHelpers = require('./googleHelpers.js');
// const bcrypt = require('bcrypt-nodejs');
// const auth = require('./helpers.js');
// const session = require('express-session');
// const db = require('../database/index.js');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//Initializes json bodyparser
app.use(bodyParser.json());

//app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  res.send('Welcome to House Stark server.')
});

// Gets data from Google spreadsheets
// Note the response is passed in as an argument in googleHelpers.getSpreadsheetData
app.get('/getSpreadsheetData', (req, res) => {
  console.log('Entered getSpreadsheetData get req ....');
  googleHelpers.getSpreadsheetData(res);
});

module.exports = app;
