import React from 'react';
import PropTypes from 'prop-types';
import Login from './Login.jsx';
import './Modal.css';

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop">
        <div className="modal">

          <button 
            className="close-btn"
            onClick={this.props.onClose}
          >
            X
          </button>

          <Login />

        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;