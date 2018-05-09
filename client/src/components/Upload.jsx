import React, {Component} from 'react';
import './Upload.css';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
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
              Data:
              <form>
              </form>
            </div>
          </div>
        </div>

        <div className="grid__item">
          <div className="content">
            <div className="content-inside">
            <button type="button" className="button">Button</button>
            </div>
          </div>
        </div>

        <div className="grid__item">
          <div className="content content-lr">
            <div className="content-inside">
            <button type="submit" className="submit-button">Submit</button>
            </div>
          </div>
        </div>

      </div>
    );
  }
};

export default Upload;