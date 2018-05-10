import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header.jsx';
import Upload from './components/Upload.jsx';
// import LoginModal from './components/LoginModal.jsx';
// import SignupModal from '/components/SignupModal.jsx';
import Modal from './components/Modal.jsx';

// const ModalConductor = currentModal => {
//   switch (currentModal) {
//     case 'login':
//       return <LoginModal {...props}/>;

//     case 'signup':
//       return <SignupModal {...props}/>;

//     default:
//       return null;
//   }
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentModal: 'login',
      isOpen: false
    }
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // handleLogoClick() {
    // this.setState({
      
    // });
    // ModalConductor(currentModal);
  // }

  render() {
    return (
      <div className="App">

        <Header 
          toggleModal={this.toggleModal.bind(this)}
        />

        <Switch>
          <Route
            exact path='/'
            render={() => 
              <p className="App-intro">
                Welcome to simplifAi
              </p>            
            }
          />

          <Route
            path='/upload'
            component={ Upload }
          />

          <Route path='/about'
            render={() => 
              <p> In about us page </p>
            }
          />
        </Switch>

        <footer className="App-footer">
          Copyright 2018 simplifAi
        </footer>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal.bind(this)}>
          {/* `Here's some content for the modal` */}
        </Modal>
        
      </div>

    );
  }
}

export default App;