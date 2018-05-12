import React, {Component} from 'react';
import './Upload.css';
import axios from 'axios';
import SpreadsheetTable from './SpreadsheetTable';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spreadSheetData: [],
      googleSheetID: ''
    }
  }

  handleGoogleSheetIDChange(e) {
    console.log(this.state.googleSheetID);
    this.setState({
      googleSheetID: e.target.value
    });
  }

  handleImportClick() {
    console.log('Entered handleImportClick....');
    axios.get('http://localhost:3000/getSpreadsheetData', {
      params: {
        googleSheetID: this.state.googleSheetID
      }
      })

      .then((res) => {
        console.log(res.data);
        this.setState({
          spreadSheetData: res.data
        });
      })
      .catch(() => {
        console.log("Error!!!");
      });
  }

  handleSubmitClick() {
    console.log('Entered handleSubmitClick....');
  }

  render() {

    return (
      <div className="Upload">

        <div className="grid__item">
          <div className="content">
            <div className="content-inside">
              <h2>Machine Learning</h2>
              <p>Submit data to get started!</p>
            </div>
          </div>
        </div>

        <div className="grid__item">
          <div className="content">
            <div className="content-inside">
            <div>
              <input className="spreadsheet-input" type="text" onChange={this.handleGoogleSheetIDChange.bind(this)} placeholder="Enter your google sheet key" />
              <button type="button" className="import" onClick={this.handleImportClick.bind(this)}>Import</button>
              <button type="button" className="submit" onClick={this.handleSubmitClick.bind(this)}>Submit</button>
              </div>
              <div>
                <SpreadsheetTable spreadSheetData={this.state.spreadSheetData} />
              </div>
              <form>
              </form>
            </div>
          </div>
        </div>

      </div>
    );
  }
};

export default Upload;