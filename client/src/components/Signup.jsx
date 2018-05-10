import React, { Component } from 'react';
import axios from 'axios';
import './Signup.css';

class Signup extends Component {
  constructor(props) {
    
    super(props);
    
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      status: undefined
    };
  }

  updateInfo(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  sendInfo() { 
    axios.post('localhost:3000/api/signup', this.state)
      .then((data) => {
        this.setState({
          status: true
        });
      })
      
      .catch(() => {
        this.setState({
          status: false
        })
      })
  }

  renderStatus() {
    if (this.state.status !== undefined) {
      if (this.state.status) {
        return <span style={{color: `#27AE60`}}>Your account was successfully created!</span>
      
      } else {
        return <span style={{color: `#E74C3C`}}>Username already exists.</span>
      }
    }
  }

  render() {
    return (
      <div className="Signup">
        <form action="localhost:3000/api/signup" method="post">
          <div>
            <label>First Name:</label>
            <input
              type="text"
              id="firstName"
              name="user_firstName"
            />
          </div>

          <div>
            <label>Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="user_lastName"
            />
          </div>

          <div>
            <label>Username:</label>
            <input
              type="text"
              id="signup_username"
              name="signu_user_username"
            />
          </div>

          <div>
            <label>Password:</label>
            <input 
              type="password" 
              id="signup_password" 
              name="signup_user_password" 
            />
          </div>
         
          <div>
            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </div>
        </form>

      </div>
    );
  }
}

export default Signup;