import React, {Component} from 'react';
import './AddRow.css';

class AddRow extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleAddRowClick() {
    console.log('Entered handleAddRowClick....');

    var inputValue = document.getElementById('add-row').value;
    this.props.handleAddRowClick(inputValue);

    document.getElementById('add-row').value = '';

  }

  componentDidMount(){
    document.getElementById('add-row').focus();
  }

  render() {
    return(
      <div>
        <h2>Add Row</h2>
        <span>Enter data is this format:</span><br/>
        <span>data1, data2, data3...</span>
        <input id="add-row" className="spreadsheet-input" type="text" placeholder="Enter Row Data"></input>
        <button onClick={this.handleAddRowClick.bind(this)}>Add Row</button>
      </div>
      )
  }


}

export default AddRow;