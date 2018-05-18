import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';
import Modal from './components/Modal.jsx';
import Login from './components/Login.jsx';
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

  toggleModal (view) {
    if(view != null) {
      const views = {
        'login': <Login />
      };

      this.setState({
        isOpen: !this.state.isOpen,
        currentModal: views[view]
      });
    }
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
          component={this.state.currentModal}
        />
      </div>
    );
  }
}

export default App;