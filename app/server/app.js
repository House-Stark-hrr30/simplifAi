// === run dotenv to configure environment variables for this project
import dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') {
  console.log('loading dev environments');
	dotenv.config({path: '../.env'});
}

// === import node modules
import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import session from 'express-session';
import morgan from 'morgan';

// === import local files
import googleHelpers from './helpers/googleHelpers.js';
import morganConfig from './middleware/morgan';
import sessionConfig from './middleware/sessions';
import passport from './middleware/passport/passport';

// === import routes
import user from './routes/user.js';
import data from './routes/data.js';

// === initialize express
const app = express();

// === Initialize configurations
app.use(morgan(morganConfig));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// === serve up static files
app.use(express.static(__dirname + '../../build'));

// === set headers
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// app.use('/*', (req, res) => {
//   res.status(302).sendFile(__dirname + '../../client/build/index.html'); 
//   //res.status(400).end('Endpoint does not exist');
// });

// === initialize sessions and authentication
app.use(session(sessionConfig));
// app.use(passport.initialize());
// app.use(passport.session());


// === direct app to use routes set in routes folder
// app.get('/', (req, res) => res.status(200).end('THIS SUCKS!!!!'));
// app.use('/user', user);
// app.use('/data', data);
// if (process.env.NODE_ENV === 'dev') {
// }

// export the running server
export default app;