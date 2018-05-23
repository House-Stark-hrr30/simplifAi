import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

import './Upload.css';

import SpreadsheetTable from './SpreadsheetTable.jsx';
import Modal from './Modal.jsx';
import Login from './Login.jsx';
import AddColumn from './AddColumn.jsx';
import AddRow from './AddRow.jsx';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spreadSheetData: [],
      optimizedSpreadSheetData: [],
      googleSheetID: '',
      modalOpen: false,
      currentModal: 'login',
      chartType: 'line'
    }
  }

  //Toggles what component to show in the modal
  toggleModal() {
    let ctx = this;
    return view => {
      if (view === null) {
        ctx.setState({
          modalOpen: false
        });
      }
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

        ctx.setState({
          modalOpen: !ctx.state.modalOpen,
          currentModal: views[view]
        });
      }
    };
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
    let charttype = this.state.chartType;
    this.props.updateData(data, charttype, () => {
      this.props.history.push('/chart');
    });
  }

  changeChart(e) {
    console.log('Entered changeChart...');
    console.log(e.target.value);
    this.setState({
      chartType: e.target.value
    });
  }

  render() {
    return (
      <div className="Upload">

        <div className="grid__item">
          <div className="content">
            <div className="content-inside">
              <h2 className="heading-main">Machine Learning</h2>
              <p className="heading-sub">Submit beta to get started!</p>
            </div>
          </div>
        </div>

        <div className="grid__item table-section">
          <div className="content">
            <div className="content-inside">
              <div>
                <SpreadsheetTable spreadSheetData={this.state.spreadSheetData} toggleModal={this.toggleModal()} handleGoogleSheetIDChange={this.handleGoogleSheetIDChange.bind(this)} handleImportClick={this.handleImportClick.bind(this)} />
              </div>
              <div style={{ 'margin': '2% 520px 0 0', 'display': 'inline-block'}}>
                <label style={{'font-size': '12px', 'margin-right': '5px'}}>Chart Type:</label>
                <select style={{'font-size': '12px', 'background-color': 'white'}} id="charts" onChange={this.changeChart.bind(this)}>
                  <option value="line">Line</option>
                  <option value="bar">Bar</option>
                  <option value="pie">Pie</option>
                  <option value="radar">Radar</option>
                  <option value="doughnut">Doughnut</option>
                  <option value="polar">Polar</option>
                </select>
              </div>
              <button type="button" className="submit" disabled={this.state.spreadSheetData.length === 0} onClick={this.sendDataToChart.bind(this)}>Submit</button>
              <form>
              </form>
            </div>
          </div>
        </div>

        <Modal
          show={this.state.modalOpen}
          onClose={this.toggleModal()}
          component={this.state.currentModal}
        >
        </Modal>

      </div>
    );
  }
};

export default withRouter(Upload);