import React, { Component } from 'react';
import axios from 'axios'; // still need to install?
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

  // sendLogin(e) {
  //   axios.post('localhost:3000/api/login', this.state)
  //     .catch((err) => {
  //       this.setState({
  //         failedLogin: 'Incorrect username or password.'
  //       })
  //       throw err; 
  //     });
  // }

  render() {

    if (this.state.signupClick) {
      return (
        <Signup />
      );
    }

    return (
      <div className="Login">
        <form action="localhost:3000/api/login" method="post">
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

        {/*   <div>
            <label for="msg">Message:</label>
            <textarea id="msg" name="user_message"></textarea>
          </div> */}
         
          <div>
            <button type="submit" className="login-btn">
              Login
            </button>
          </div>

          <div>
            <button className="signup-btn" 
              onClick={this.signupToggle.bind(this)}
            >
              Sign Up
            </button>
          </div>

        </form>

      </div>
    );
  }
}

export default Login;