import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import './Signup.css';

class Signup extends Component {
  constructor(props) {
    super(props);   
    this.state = {
      credentials: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
        status: undefined
    };
  }

  updateInfo(key) {
    const ctx = this;
    return (e) => {
      const creds = Object.assign({}, ctx.state.credentials);
      creds[key] = e.target.value;
      ctx.setState({
        credentials: creds
      });
    }
  }

  sendInfo() { 
    axios.post('/user/signup', this.state)
      .then(user => {
        console.log(user);
        this.props.toggleModal(null, () => this.props.history.push('/about'));
      })
      .catch((err) => {
        console.log(err);
        this.setState({status: false});
      });
  }

  renderStatus() {
    if (this.state.status !== undefined) {
      if (this.state.status) {
        return <span style={{color: `#27AE60`}}>
          Your account was successfully created!
        </span>
      
      } else {
        return <span style={{color: `#E74C3C`}}>
          Username already exists.
        </span>
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
              onChange={this.updateInfo("firstName")}
            />
          </div>

          <div>
            <label>Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              onChange={this.updateInfo("lastName")}
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="text"
              id="signup_username"
              name="email"
              onChange={this.updateInfo("email")}
            />
          </div>

          <div>
            <label>Password:</label>
            <input 
              type="password" 
              id="signup_password" 
              name="password"
              onChange={this.updateInfo("password")} 
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