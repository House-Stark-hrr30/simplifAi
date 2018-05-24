/***************** Handles Google Requests *****************/

let client_credentials = {};
let credentials = {};

if(process.env.NODE_ENV === 'production') {
  client_credentials['client_secret'] = process.env.GOOGLE_CLIENT_SECRET;
  client_credentials['client_id'] = process.env.GOOGLE_CLIENT_ID;
  client_credentials['redirect_uris'] = [process.env.GOOGLE_CLIENT_URI];

  credentials['access_token']= process.env.CRED_ACCESS_TOKEN;
  credentials['token_type']= process.env.CRED_TOKEN_TYPE;
  credentials['refresh_token'] = process.env.CRED_REFRESH_TOKEN;
  credentials['expiry_date'] = process.env.CRED_EXPIRY_DATE;

  //client_credentials = process.env.client_credentials;
  //credentials = process.env.credentials;
} else {
  client_credentials = require('../../../config').client_credentials;
  credentials = require('../../../config').credentials;
}

// import client secret from config
//const client_secret = process.env.client_secret || require('../../../config').client_secret;
//const credentials = process.env.credentials || require('../../../config').credentials;

const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const OAuth2Client = google.auth.OAuth2;
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const TOKEN_PATH = '../../../.json';
const path = require('path');

function getSpreadsheetData(res, googleSheetID) {
    authorize(client_credentials, pullSpreadsheetData, res, googleSheetID);
};

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {callback} callback The callback to call with the authorized client.
 */
function authorize(client_credentials, callback, res, googleSheetID) {
  console.log('Entered authorize....');

  const {client_secret, client_id, redirect_uris} = client_credentials.installed;
  const oAuth2Client = new OAuth2Client(client_id, client_secret, redirect_uris[0]);
  oAuth2Client.setCredentials(credentials);
  callback(oAuth2Client, res, googleSheetID);
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {OAuth2Client} auth The authenticated Google OAuth client.
 */
function pullSpreadsheetData(auth, res, googleSheetID) {
  console.log('Entered pullSpreadsheetData....');
  console.log(googleSheetID);
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.get({
    spreadsheetId: googleSheetID,
    range: 'Sheet1',
  }, (err, {data}) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = data.values;
    if (rows.length) {
      console.log(data.values);
      res.end(JSON.stringify(data.values));
    } else {
      console.log('No data found.');
    }
  });
}

module.exports.getSpreadsheetData = getSpreadsheetData;