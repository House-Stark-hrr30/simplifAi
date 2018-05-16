import React, {Component} from 'react';

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

  render() {
    return(
      <div>
        <h2>Add Row</h2>
        <input id="add-row" className="spreadsheet-input" type="text" placeholder="Enter Row Data"></input>
        <button onClick={this.handleAddRowClick.bind(this)}>Row</button>
      </div>
      )
  }


}

export default AddRow;