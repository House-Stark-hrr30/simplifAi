// run dotenv to configure environment variables for this project
import dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') {
  console.log('loading dev environments');
	dotenv.config({path: '../.env'});
}
// import node modules
import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import session from 'express-session';
// const auth = require('./helpers.js');
// const db = require('../database/index.js');

// import local files
import routes from './routes.js';
import googleHelpers from './helpers/googleHelpers.js';
import morganConfig from './middleware/morgan';
import sessionConfig from './middleware/sessions';
import passport from './middleware/passport/passport';

// initialize express
const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//Initialize configurations
app.use(morgan(morganConfig));
app.use(bodyParser.json());
app.use(expressValidator); //figure out config for validator

// serve up static files
app.use(express.static(__dirname + '/../client/build'));

//initialize sessions and authentication
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

// direct app to use routes from line 8
app.use(routes);

// Gets data from Google spreadsheets
// Note the response is passed in as an argument in googleHelpers.getSpreadsheetData
app.get('/getSpreadsheetData', (req, res) => {
  console.log('Entered getSpreadsheetData get req ....');
  console.log(req.query.googleSheetID);
  googleHelpers.getSpreadsheetData(res, req.query.googleSheetID);
});

// export the running server
export default app;