import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';
import Modal from './components/Modal.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentModal: 'login',
      isOpen: false
    }

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal () {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">

        <Header 
          toggleModal={this.toggleModal}
        />

        <Body />

        <Footer />

        <Modal 
          show={this.state.isOpen}
          onClose={this.toggleModal}
        />
        
      </div>
    );
  }
}

export default App;