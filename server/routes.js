// import node modules
import { Router } from 'express';
import ReactRouter from 'react-router';

// import local files
import { app } from './index.js';

// initialize express router
Router();

//Initializes json bodyparser
app.use(bodyParser.json());

//app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  res.send('Welcome to House Stark server.')
});