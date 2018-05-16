import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <div>
      //   <p className="Home-intro">
      //     Welcome to simplifAi!
      //   </p>
      // </div>
      <div>
      <div className="section-about">
          <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                  Welcome to simplifAi
                  <p> Your data's important to us -- find out what it has to say </p>
              </h2>
          </div>

          <div className="row">
              <div className="col-1-of-2">
                  <h3 className="heading-tertiary u-margin-bottom-small">Use simplifAi to simplify your life</h3>
                  <p className="paragraph">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                      ducimus quam nisi exercitationem omnis earum qui.
                  </p>

                  <h3 className="heading-tertiary u-margin-bottom-small">Discover new things about your data</h3>
                  <p className="paragraph">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                  </p>

                  
              </div>
              <div>
                  <div className="home-composition">

                      <img srcSet="img/office_2.jpeg 80w, img/office_2.jpeg 100w"
                           sizes="(max-width: 30em) 10vw, (max-width: 15em) 30vw, 200px"
                           alt="Photo 1"
                           className="home-composition__photo home-composition__photo--p1"
                           src="img/office_2.jpeg"/>


                      
                  </div>
              </div>
          </div>
      </div>

      <div className="section-features">

          <div className="section-features__bg">
              
              <img className="section-features__bg__pic" src="img/data.jpg" alt="data">
              </img>
          </div>
          
          <div className="row">
              <div className="col-1-of-4">
                  <div className="feature-box">
                      <h3 className="heading-tertiary u-margin-bottom-small">Explore your data</h3>
                      <p className="feature-box__text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                      </p>
                  </div>
              </div>

              <div className="col-1-of-4">
                  <div className="feature-box">
                      <h3 className="heading-tertiary u-margin-bottom-small">Save time</h3>
                      <p className="feature-box__text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                      </p>
                  </div>
              </div>

              <div className="col-1-of-4">
                  <div className="feature-box">
                      <h3 className="heading-tertiary u-margin-bottom-small">Combine your data</h3>
                          <p className="feature-box__text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                      </p>
                  </div>
              </div>

              <div className="col-1-of-4">
                  <div className="feature-box">
                      <h3 className="heading-tertiary u-margin-bottom-small">Versatile support</h3>
                      <p className="feature-box__text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                      </p>
                  </div>
              </div>
          </div>
      </div>

      

      <section className="section-stories">
          <div className="section-stories__bg">
              
              <img className="section-stories__bg__pic" src="img/abstract_ai.jpg" alt="bulb">
              </img>
          </div>

          <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                  See what people are saying about simplifAi
              </h2>
          </div>

          <div className="row">
              <div className="story">
                  <figure className="story__shape">
                      <img src="img/Cody.png" alt="Person on a tour" className="story__img"/>
                      <figcaption className="story__caption">Cody Daig</figcaption>
                  </figure>
                  <div className="story__text">
                      <h3 className="heading-tertiary u-margin-bottom-small">I had the best time working with simplifAi</h3>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                          ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                          repellat quis consequatur ducimus quam nisi exercitationem omnis.
                      </p>
                  </div>
              </div>
          </div>

          <div className="row">
              <div className="story">
                  <figure className="story__shape">
                      <img src="img/Ralph.png" alt="Person on a tour" className="story__img"/>
                      <figcaption className="story__caption">Ralph Plumley</figcaption>
                  </figure>
                  <div className="story__text">
                      <h3 className="heading-tertiary u-margin-bottom-small">simplifAi completely changed my life</h3>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                          ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                          repellat quis consequatur ducimus quam nisi exercitationem omnis.
                      </p>
                  </div>
              </div>
          </div>

      </section>

      
  </div>
    );
  }
}

export default Home;