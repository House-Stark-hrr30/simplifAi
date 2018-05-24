import React, { Component } from 'react';
import './Dashboard.css';
import Upload from './Upload.jsx';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  createCard() {
    return (
        <div className="col">
            <div className="feature-box">
                <h3 className="heading-tertiary margin-bottom-small">Versatile support</h3>
                <p className="feature-box__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                </p>
            </div>
        </div>
    );
  }

  render() {
    return (
      <div>
        <div className="features">

            <div className="features__bg">

                <img className="features__bg__pic" src="img/abstract.jpg" alt="abstract">
                </img>
            </div>

            <div className="center-text margin-bottom-big">
                <h2 className="heading-main">
                    Dashboard
                </h2>
            </div>

            <div className="grid">
                <Link to="/upload">
                    <div className="col">
                        <div className="feature-box">
                            <h3 className="heading-tertiary margin-bottom-small">Upload</h3>
                            <p className="feature-box__text">
                                Add data from Google Sheets or create your own!
                            </p>
                        </div>
                    </div>
                </Link>

                <Link to="/machinelearning">
                    <div className="col">
                        <div className="feature-box">
                            <h3 className="heading-tertiary margin-bottom-small">Machine Learning</h3>
                            <p className="feature-box__text">
                                Discover more about machine learning and how it's useful!
                            </p>
                        </div>
                    </div>
                </Link>

                <Link to="/datatypes">
                    <div className="col">
                        <div className="feature-box">
                            <h3 className="heading-tertiary margin-bottom-small">Data Types</h3>
                                <p className="feature-box__text">
                                Certain algorithms work best for certain types of data - find out more!
                            </p>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
      </div>

    );
  }
}

export default Dashboard;
