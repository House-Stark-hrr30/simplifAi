// import node modules
import { Router } from 'express';

// import local files
import { authRequired } from '../helpers/authHelpers';
import googleHelpers from '../helpers/googleHelpers.js';
import passport from '../middleware/passport/passport';

// initialize express router
const data = Router();

//use passport authentication for this route
// data.use(passport.authenticate("local"));

// Gets data from Google spreadsheets
// Note the response is passed in as an argument in googleHelpers.getSpreadsheetData
data.get('/getGSheet', (req, res) => {
  console.log('Entered getSpreadsheetData get req ....');
  console.log(req.query.googleSheetID);
  console.log(`U S E R === ${req.user}`);
  googleHelpers.getSpreadsheetData(res, req.query.googleSheetID);
});

data.post('/saveDataStore', (req, res) => {
  // todo: make a helper function for this that can be called in the getGSheet route
  res.status(404).end("this route isn't set up yet");
});



export default data;