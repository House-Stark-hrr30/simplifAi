/* eslint-disable no-console,func-names,react/no-multi-comp */
import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import Table from 'rc-table';
import 'rc-table/assets/index.css';
import './SpreadsheetTable.css';

class SpreadsheetTable extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  getSpreadsheetHeaderData() {
    var headerArray = this.props.spreadSheetData.slice(0, 1)[0];
    var headerArrayTable = [];
    if(headerArray) {
      for(var i = 0; i < headerArray.length; i++) {
        headerArrayTable.push({ title: headerArray[i], dataIndex:headerArray[i], key: headerArray[i], width: 100});
      }
    }

    return(headerArrayTable);
  }

  getSpreadsheetBodyData() {
    var headerArray = this.props.spreadSheetData.slice(0, 1)[0];
    var bodyArray = this.props.spreadSheetData.slice(1);
    var bodyArrayTable = [];
    if(bodyArray) {
      for(var i = 0; i < bodyArray.length; i++) {
        var obj = {};
        for(var j = 0; j < headerArray.length; j++) {
          obj[headerArray[j]] = bodyArray[i][j];
        }
        bodyArrayTable.push(obj);
      }
    }

    return(bodyArrayTable);

  }

  render() {
    return (
      <div>
        <Table columns={this.getSpreadsheetHeaderData()} scroll={{ x: 650, y: 200 }} data={this.getSpreadsheetBodyData()} style={{ width: 725 }} />
      </div>

    );
  }
};

export default SpreadsheetTable;