import React, {Component} from 'react';

class AddColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleAddHeaderClick() {
    console.log('Entered handleAddHeaderClick....');

    var headerInput = document.getElementById('add-header').value;
    this.props.handleAddHeaderClick(headerInput);

    document.getElementById('add-header').value = '';

  }

  handleAddColumnDataClick() {
    console.log('Entered handleAddColumnDataClick....');

    var columnInput = document.getElementById('add-col-data').value;
    this.props.handleAddColumnDataClick(columnInput);

    document.getElementById('add-col-data').value = '';

  }

  handleSubmitColumn() {
    this.handleAddHeaderClick();
    this.handleAddColumnDataClick();
  }

  render() {
    return(
      <div>

        <h2>Add Column</h2>
        <input id="add-header" className="spreadsheet-input" type="text" placeholder="Enter Header"></input>
        <input id="add-col-data" className="spreadsheet-input" type="text" placeholder="Enter Column Data"></input>
        <button onClick={this.handleSubmitColumn.bind(this)}>Submit</button>

      </div>
      )
  }


}

export default AddColumn;