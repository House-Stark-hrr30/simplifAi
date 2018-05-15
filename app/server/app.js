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
import morgan from 'morgan'

// import local files
import googleHelpers from './helpers/googleHelpers.js';
import morganConfig from './middleware/morgan';
import sessionConfig from './middleware/sessions';
import passport from './middleware/passport/passport';
import db from '../database/models/index';

// import routes
import user from './routes/user.js';
import data from './routes/data.js';

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
app.use(bodyParser.urlencoded({extended: true}));
// todo: figure out config for validator and apply to individual post methods in routes
  // @see https://github.com/express-validator/express-validator
  // app.use(expressValidator);

// serve up static files
// app.use(express.static(__dirname + '/../client/public'));
app.use(express.static(__dirname + '/../client/build/'));

// initialize sessions and authentication
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

// direct app to use routes set in routes folder
app.use('/user', user);
app.use('/data', data);

// export the running server
export default app;