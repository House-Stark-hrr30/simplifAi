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
      <div className="col col-card">
          <div className="feature-box feature-box-card">
              <h3 className="heading-tertiary margin-bottom-small card-title">{this.props.title}</h3>
              <p className="feature-box__text card-body">
                  {this.props.body}
              </p>
          </div>
      </div>
    );
  }
}

export default Card;