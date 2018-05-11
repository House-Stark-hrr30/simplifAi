// import node modules
import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv';

// import local files
import routes from './routes.js';
import googleHelpers from './googleHelpers.js';

// initialize express
const app = express();
// const bcrypt = require('bcrypt-nodejs');
// const auth = require('./helpers.js');
// const session = require('express-session');
// const db = require('../database/index.js');

// run dotenv to configure environment variables for this project
dotenv.config();


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//Initializes json bodyparser
app.use(bodyParser.json());

// serve up static files
app.use(express.static(__dirname, '../client/public'));

// direct app to use routes from line 8
app.use(routes);


// Gets data from Google spreadsheets
// Note the response is passed in as an argument in googleHelpers.getSpreadsheetData
app.get('/getSpreadsheetData', (req, res) => {
  console.log('Entered getSpreadsheetData get req ....');
  console.log(req.query.googleSheetID);
  googleHelpers.getSpreadsheetData(res, req.query.googleSheetID);
});

// set the port based on environment or use default if not set
const PORT = process.env.PORT || 3000;

// start the server
app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}!`)
});

// export the running server
export default app;
