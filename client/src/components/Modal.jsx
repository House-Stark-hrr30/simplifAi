import React from 'react';
import PropTypes from 'prop-types';
import Login from './Login.jsx';
import './Modal.css';

class Modal extends React.Component {
  render() {
    // console.log(this);

    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    // const backdropStyle = {
    //   position: 'fixed',
    //   top: 0,
    //   bottom: 0,
    //   left: 0,
    //   right: 0,
    //   backgroundColor: 'rgba(0,0,0,0.3)',
    //   padding: 50
    // };

    // The modal "window"
    // const modalStyle = {
    //   backgroundColor: '#fff',
    //   borderRadius: 5,
    //   maxWidth: 280,
    //   minHeight: 180,
    //   margin: '0 auto',
    //   padding: 30
    // };

    return (
      <div className="backdrop">
        <div className="modal">
          {/* {this.props.children} */}
          <div className="footer">
            <button className="close-btn"
              onClick={this.props.onClose}
            >
              X
            </button>
          </div>

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