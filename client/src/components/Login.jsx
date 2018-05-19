import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'

import Signup from './Signup.jsx';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        email: '',
        password: ''
      },
      failedLogin: '',
      signupClick: false
    };
    this.signupToggle = this.signupToggle.bind(this);
  }

  updateUserInfo(key) {
    return (e) => {
      const creds = Object.assign({}, this.state.credentials);
      creds[key] = e.target.value;
      this.setState({
        credentials: creds
      });
    }
  }

  signupToggle() {
    this.setState({
      signupClick: !this.state.signupClick
    })
  }

  sendLogin(e) {
    axios.post('/user/login', this.state.credentials)
      .then(user => {
        console.log(user);
        this.props.toggleModal(null, () => this.props.history.push('/about'));
      })
      .catch((err) => {
        this.setState({
          failedLogin: 'Incorrect username or password.'
        })
        console.log(err);
      });
  }

  renderFailedAttempt() {
    return this.state.failedLogin === ''
      ? null
      : (
        <div>
          <p>{this.state.failedLogin}</p>
        </div>
      );
  }

  render() {
    if (this.state.signupClick) {
      return (
        <Signup toggleModal={this.props.toggleModal} />
      );
    }

    return (
      <div className="Login">
        {this.renderFailedAttempt()}
        <form>
          <div>
            <label>Email:</label>
            <input
              type="text"
              id="login_username"
              name="email"
              onChange={this.updateUserInfo("email")}
            />
          </div>

          <div>
            <label>Password:</label>
            <input 
              type="password" 
              id="login_password" 
              name="password"
              onChange={this.updateUserInfo("password")}
            />
          </div>
         <br />
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