import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'

import Signup from './Signup.jsx';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      // failedLogin: '',
      signupClick: false
    };
    this.signupToggle = this.signupToggle.bind(this);
  }

  updateInfo(e) {
    this.setState({
      [e.target.name]: e.target.value,
      // failedLogin: ''
    });
  }

  signupToggle() {
    this.setState({
      signupClick: !this.state.signupClick
    })
  }

  sendLogin(e) {
    axios.post('/user/login', this.state)
      .then(user => {
        // this.props.history.push('/aboutUs'); //! uncomment this when request is verified
        console.log(user)
      })
      .catch((err) => {
        this.setState({
          failedLogin: 'Incorrect username or password.'
        })
        console.log(err); 
      });
  }

  render() {
    if (this.state.signupClick) {
      return (
        <Signup />
      );
    }

    return (
      <div className="Login">
        <form>
          <div>
            <label>Username:</label>
            <input
              type="text"
              id="login_username"
              name="login_user_username"
            />
          </div>

          <div>
            <label>Password:</label>
            <input 
              type="password" 
              id="login_password" 
              name="login_user_password" 
            />
          </div>
         
          <button
            type="button"
            className="login-btn"
            onClick={this.sendLogin.bind(this)}
          >
            Login
          </button>

          <button 
            className="signup-btn" 
            onClick={this.signupToggle}
          >
            Sign Up
          </button>

        </form>

      </div>
    );
  }
}

export default withRouter(Login);