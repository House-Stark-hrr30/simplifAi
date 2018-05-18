import React, {Component} from 'react';
import './Upload.css';
import axios from 'axios';
import SpreadsheetTable from './SpreadsheetTable';
import Modal from './Modal';
import Login from './Login';
import AddColumn from './AddColumn';
import AddRow from './AddRow';
import {withRouter} from 'react-router-dom';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spreadSheetData: [],
      optimizedSpreadSheetData: [],
      googleSheetID: '',
      modalOpen: false,
      currentModal: 'login'
    }
  }

  //Toggles what component to show in the modal
  toggleModal = (view) => {
    if(view != null) {
      const views = {
        'login': <Login />,
        'addColumn': <AddColumn
          handleAddHeaderClick={this.handleAddHeaderClick.bind(this)}
          handleAddColumnDataClick={this.handleAddColumnDataClick.bind(this)}
          />,
        'addRow': <AddRow
          handleAddRowClick={this.handleAddRowClick.bind(this)} />
      };

      this.setState({
        modalOpen: !this.state.modalOpen,
        currentModal: views[view]
      });
    }
  }

  //Google Sheets API returns an Array of Arrays
  //For faster searching, we convert it to an Array of Objects
  //and set it to the optimizedSpreadSheetData state
  convertSpreadSheetDataToArrayOfObjects() {
    console.log('Entering convertSpreadSheetDataToArrayOfObjects....');
    var spreadSheetHeaders = this.state.spreadSheetData.slice(0, 1)[0];
    var spreadSheetData = this.state.spreadSheetData;

    var optimizedSpreadSheetData = [];

    for(var i = 0; i < spreadSheetData.length; i++) {
      var obj = {row: i};
      for(var j = 0; j < spreadSheetHeaders.length; j++) {
        obj[spreadSheetHeaders[j]] = spreadSheetData[i][j];
      }
      optimizedSpreadSheetData.push(obj);
    }

    this.setState({
      optimizedSpreadSheetData: optimizedSpreadSheetData
    });
  }

  //sets state of googleSheetID based on user input
  handleGoogleSheetIDChange(e) {
    console.log(this.state.googleSheetID);
    this.setState({
      googleSheetID: e.target.value
    });
  }

  //Imports user's google sheet upon import button click
  handleImportClick() {
    console.log('Entered handleImportClick....');
    axios.get('data/getGSheet', {
      params: {
        googleSheetID: this.state.googleSheetID
      }
      })

      .then((res) => {
        let data = res.data.map((row) => {
          return [...row];
        });
        this.setState({
          spreadSheetData: data
        }, () => { console.log(data)});
        this.convertSpreadSheetDataToArrayOfObjects();
      })
      .catch(() => {
        console.log("Error!!!");
      });
  }

  //Adds data to last column that has a header based on user input
  handleAddColumnDataClick(newColumnData) {
    console.log('Entered handleAddColumnDataClick....');

    var formattedNewColumnData = newColumnData;
    formattedNewColumnData = formattedNewColumnData.trim().split(',').map((element) => {
      return element.trim();
    });

    var spreadSheetData = this.state.spreadSheetData;

    if(spreadSheetData[1]) {
      for(let j = 0; j < formattedNewColumnData.length; j++) {
        for(let i = 1; i < spreadSheetData.length; i++) {
          if(spreadSheetData[i].length < spreadSheetData[i - 1].length) {
            spreadSheetData[i].push(formattedNewColumnData[j]);
            i = spreadSheetData.length;
          }
        }
      }
    } else {
      for(let i = 0; i < formattedNewColumnData.length; i++) {
        spreadSheetData.push([formattedNewColumnData[i]]);
      }
    }

    this.setState({
      spreadSheetData: spreadSheetData
    });

  }

  //Adds a row based on user input
  //If no data, first row will be a header row
  handleAddRowClick(newRowData) {
    console.log('Entered handleAddRowClick.....');

    var formattedNewRowData = newRowData;
    formattedNewRowData = formattedNewRowData.trim().split(',').map((element) => {
      return element.trim();
    });

    var spreadSheetData = this.state.spreadSheetData;
    spreadSheetData.push(formattedNewRowData);
    this.setState({
      spreadSheetData: spreadSheetData
    });

  }

  //Adds a header
  handleAddHeaderClick(newHeaderData) {
    console.log('Entered handleAddHeaderClick....');

    var formattedNewHeaderData = newHeaderData;

    var spreadSheetData = this.state.spreadSheetData;

    if(spreadSheetData.length === 0) {
      spreadSheetData.push([formattedNewHeaderData]);
    } else {
      spreadSheetData[0].push(formattedNewHeaderData);
    }

    this.setState({
      spreadSheetData: spreadSheetData
    });

  }

  sendDataToChart() {
    let data = this.state.spreadSheetData;
    this.props.updateData(data, () => {
      this.props.history.push('/chart');
    });
  }

  render() {
    return (
      <div className="Upload">

        <div className="grid__item">
          <div className="content">
            <div className="content-inside">
              <h2 className="heading-main">Machine Learning</h2>
              <p className="heading-sub">Submit data to get started!</p>
            </div>
          </div>
        </div>

        <div className="grid__item table-section">
          <div className="content">
            <div className="content-inside">
            <div>
              <div className="spreadsheet-input-div">
                <input className="spreadsheet-input" type="text" onChange={this.handleGoogleSheetIDChange.bind(this)} placeholder="Enter your google sheet key" />
              </div>
              <button type="button" className="import" onClick={this.handleImportClick.bind(this)}>Import</button>
              <button type="button" className="submit" disabled={this.state.spreadSheetData.length === 0} onClick={this.sendDataToChart.bind(this)}>Submit</button>
              </div>
              <div>
                <SpreadsheetTable spreadSheetData={this.state.spreadSheetData} toggleModal={this.toggleModal.bind(this)}/>
              </div>
              <form>
              </form>
            </div>
          </div>
        </div>

        <Modal
          show={this.state.modalOpen}
          onClose={this.toggleModal.bind(this)}
          component={this.state.currentModal}
        >
        </Modal>

      </div>
    );
  }
};

export default withRouter(Upload);