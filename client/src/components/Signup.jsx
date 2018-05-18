import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import './Signup.css';

class Signup extends Component {
  constructor(props) {
    super(props);   
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
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
    axios.post('/user/signup', this.state)
      .then((res) => {
        console.log(res)
        this.setState({status: true});
        this.props.history.push('/aboutUs'); //! uncomment this when request is verified
      })
      .catch((err) => {
        console.log(err);
        this.setState({status: false});
      });
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
        <form>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={this.updateInfo.bind(this)}
            />
          </div>

          <div>
            <label>Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              onChange={this.updateInfo.bind(this)}
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="text"
              id="signup_username"
              name="email"
              onChange={this.updateInfo.bind(this)}
            />
          </div>

          <div>
            <label>Password:</label>
            <input 
              type="password" 
              id="signup_password" 
              name="password"
              onChange={this.updateInfo.bind(this)} 
            />
          </div>
         
          <button
            type="button"
            className="signup-btn"
            onClick={this.sendInfo.bind(this)} 
          >
            Sign Up
          </button>
          
        </form>

      </div>
    );
  }
}

export default withRouter(Signup);