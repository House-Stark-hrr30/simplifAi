/***************** Handles Google Requests *****************/
// import client secret from config
import { client_secret, credentials } from "../../../config";


const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const OAuth2Client = google.auth.OAuth2;
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const TOKEN_PATH = '../../../.json';
const path = require('path');

function getSpreadsheetData(res, googleSheetID) {
    authorize(JSON.parse(client_secret), pullSpreadsheetData, res, googleSheetID);
};

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {callback} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback, res, googleSheetID) {
  console.log('Entered authorize....');

  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new OAuth2Client(client_id, client_secret, redirect_uris[0]);

  oAuth2Client.setCredentials(JSON.parse(credentials));
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