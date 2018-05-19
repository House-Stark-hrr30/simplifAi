import React, { Component } from 'react';
import './Dashboard.css';
import Upload from './Upload.jsx';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="section-features">

            <div className="section-features__bg">

                <img className="section-features__bg__pic" src="img/abstract.jpg" alt="abstract">
                </img>
            </div>

            <div className="center-text margin-bottom-big">
                <h2 className="heading-main">
                    Dashboard
                </h2>
            </div>

            <Link to="/upload">
                <div className="button">
                    <button type="button" className="upload-btn"> Upload </button>
                </div>
            </Link>

            <div className="grid">
                <div className="col">
                    <div className="feature-box">
                        <h3 className="heading-tertiary margin-bottom-small">Explore your data</h3>
                        <p className="feature-box__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                        </p>
                    </div>
                </div>

                <div className="col">
                    <div className="feature-box">
                        <h3 className="heading-tertiary margin-bottom-small">Save time</h3>
                        <p className="feature-box__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                        </p>
                    </div>
                </div>

                <div className="col">
                    <div className="feature-box">
                        <h3 className="heading-tertiary margin-bottom-small">Combine your data</h3>
                            <p className="feature-box__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                        </p>
                    </div>
                </div>

                <div className="col">
                    <div className="feature-box">
                        <h3 className="heading-tertiary margin-bottom-small">Versatile support</h3>
                        <p className="feature-box__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                        </p>
                    </div>
                </div>

                <div className="col">
                    <div className="feature-box">
                        <h3 className="heading-tertiary margin-bottom-small">test</h3>
                        <p className="feature-box__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                        </p>
                    </div>
                </div>

                <div className="col">
                    <div className="feature-box">
                        <h3 className="heading-tertiary margin-bottom-small">Versatile support</h3>
                        <p className="feature-box__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>

    );
  }
}

export default Dashboard;