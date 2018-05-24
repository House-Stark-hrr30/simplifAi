import React, { Component } from 'react';
// import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }
  }

  render() {
    return (
      <div className="col">
          <div className="feature-box">
              <h3 className="heading-tertiary margin-bottom-small">{this.props.title}</h3>
              <p className="feature-box__text">
                  {this.props.body}
              </p>
          </div>
      </div>
    );
  }
}

export default Card;