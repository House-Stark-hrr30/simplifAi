// import node modules
import { Router } from 'express';

// import local files


// initialize express router
const data = Router();

// Gets data from Google spreadsheets
// Note the response is passed in as an argument in googleHelpers.getSpreadsheetData
data.get('/getGSheet', (req, res) => {
  console.log('Entered getSpreadsheetData get req ....');
  console.log(req.query.googleSheetID);
  googleHelpers.getSpreadsheetData(res, req.query.googleSheetID);
});

export default data;