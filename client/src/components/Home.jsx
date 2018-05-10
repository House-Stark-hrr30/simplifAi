import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p className="Home-intro">
          Welcome to simplifAi!
        </p>
      </div>
    );
  }
}

export default Home;