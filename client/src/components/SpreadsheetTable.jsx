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
    console.log('getSpreadsheetHeaderData....');
    console.log(this.props.spreadSheetData.slice(0, 1)[0]);
    var headerArray = this.props.spreadSheetData.slice(0, 1)[0];
    var headerArrayTable = [];
    if(headerArray) {
      for(var i = 0; i < headerArray.length; i++) {
        headerArrayTable.push({
          title: headerArray[i],
          dataIndex:headerArray[i],
          key: i,
          width: 100,
          onCell: record => ({
            onClick(e) {
              console.log('Click cell', record);
            },
          })

        });
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
          // obj.key = `${i}${j} Brandon smells`;
          obj[headerArray[j]] = bodyArray[i][j];
        }
        bodyArrayTable.push(obj);
      }
    }

    return(bodyArrayTable);

  }

  //triggers modal for adding a column
  addColumn(record, index) {
    console.log('Entered addColumn....');
    console.log(record);
    console.log(index);
    this.props.toggleModal('addColumn');
  }

  //triggers modal for adding a row
  addRow(record, index) {
    console.log('Entered addRow....');
    console.log(record);
    console.log(index);
    this.props.toggleModal('addRow');
  }

  render() {
    return (
      <div className="table-area">
        <input style={{
  'width': '200px',
  'height': '18px',
  'margin-right': '10px',
  'font-size': '12px',
  'font-family': 'Raleway',
  'border-radius': '5px'
}}
        className="" type="text" placeholder="Enter your google sheet key" />
        <button type="button" className="">Import</button>
        <button style={{'margin-left': '290px'}} className="add-col-btn" onClick={this.addColumn.bind(this)}>Add Column</button>
        <button className="add-row-btn" onClick={this.addRow.bind(this)}>Add Row</button>
        <Table
          rowKey={(() => {
            let x = 0;
            return () => {
              x++;
              return x - 1;
            }
          })()}
          columns={this.getSpreadsheetHeaderData()}
          scroll={{ x: 650, y: 200 }}
          data={this.getSpreadsheetBodyData()}
          style={{ width: 725 }}
          onHeaderRow={(record, index) => ({
            onClick: this.addColumn.bind(this, record, index)
          })}
          onRow={(record, index) => ({
            onClick: this.addRow.bind(this, record, index)
          })}
        />
      </div>

    );
  }
};

export default SpreadsheetTable;