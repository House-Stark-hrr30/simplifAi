// import node modules
import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv';

// import local files
import routes from './routes.js';

// initialize express
const app = express();

// run dotenv to configure environment variables for this project
dotenv.config();

// serve up static files
app.use(express.static(__dirname, '../client/public'));

// direct app to use routes from line 8
app.use(routes);



// set the port based on environment or use default if not set
const PORT = process.env.PORT || 3000;

// start the server
app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}!`)
});

// export the running server
export default app;
