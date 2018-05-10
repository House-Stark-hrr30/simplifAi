import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    
    super(props);
    
    this.state = {
      username: '',
      password: '',
      failedLogin: ''
    };
  }

  updateInfo(e) {
    this.setState({
      [e.target.name]: e.target.value,
      failedLogin: ''
    });
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
    <div>


    </div>
  }
}

export default Login;