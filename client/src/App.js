import React, { Component } from 'react';
import './App.css';
import wolf from './wolf.png';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Upload from './components/Upload.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">

          <div className="App-header-content">

              <ul className="App-header-menu">
                <li className="App-header-menu-home"><a href="/"> Home </a></li>
                <li className="App-header-menu-upload"><a href="/upload"> Upload </a></li>
                <li className="App-header-menu-about"><a href="/about"> About Us </a></li>
              </ul>

            <div className="App-title">
              <div className="App-title-text">
                simplifAi
              </div>
            </div>

            <div className="App-logo">
              <a><img src={wolf} className="App-logo-pic" alt="logo" /></a>
            </div>

          </div>

        </header>

        <BrowserRouter>
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
        </BrowserRouter>

        <footer className="App-footer">
          Copyright 2018 simplifAi
        </footer>

      </div>
    );
  }
}

export default App;