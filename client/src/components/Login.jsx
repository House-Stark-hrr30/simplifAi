import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'

import Signup from './Signup.jsx';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      // failedLogin: '',
      signupClick: false
    };
    this.signupToggle = this.signupToggle.bind(this);
  }

  updateInfo(e) {
    this.setState({
      [e.target.name]: e.target.value});
  }

  signupToggle() {
    this.setState({
      signupClick: !this.state.signupClick
    })
  }

  sendLogin(e) {
    axios.post('/user/login', this.state)
      .then(user => {
        this.props.history.push('/'); //! uncomment this when request is verified
        console.log(user);
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
            <label>Email:</label>
            <input
              type="text"
              id="login_username"
              name="email"
              onChange={this.updateInfo.bind(this)}
            />
          </div>

          <div>
            <label>Password:</label>
            <input 
              type="password" 
              id="login_password" 
              name="password"
              onChange={this.updateInfo.bind(this)}
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