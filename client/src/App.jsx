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
      isOpen: false,
      user: {}
    }
  }

  toggleModal () {
    const ctx = this;
    return (view, callback) => {
      callback = callback ? callback : () => {};
      if(view != null) {
        const views = {
          'login': <Login
            toggleModal={ctx.toggleModal()}
            setUser={ctx.setUser.bind(this)}
          />
        };
        
        ctx.setState({
          isOpen: !ctx.state.isOpen,
          currentModal: views[view]
        });
      } else if (view === null) {
        ctx.setState({isOpen: false}, callback());
      }
    }
  }

  setUser(userObj, callback){
    if (userObj.password) delete userObj.password;
    this.setState({userObj});
  }

  render() {
    return (
      <div className="App">
        <Header
          toggleModal={this.toggleModal()}
        />

        <Body />

        <Footer />

        <Modal
          show={this.state.isOpen}
          closeModal={this.toggleModal()}
          component={this.state.currentModal}
          updateUser={this.setUser.bind(this)}
        />
      </div>
    );
  }
}

export default App;