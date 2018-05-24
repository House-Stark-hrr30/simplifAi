import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


const Home = (props) => {
  return (
    <div>
      <div className="section-about">
          <div className="center-text margin-bottom-big">
              <h2 className="heading-main">
                  Welcome to SimplifAi
                  <p> Your data's important -- find out what it has to say </p>
              </h2>
          </div>
          <div className="row">
              <div className="col-1-of-2">
                  <h3 className="heading-tertiary margin-bottom-small">Use SimplifAi to simplify your life</h3>
                  <p className="paragraph">
                      Find trends within any data that you might have - predict business metrics, discover commonalities between your favorite beverages, or even identify your historical purchasing trends!
                  </p>
                  <h3 className="heading-tertiary margin-bottom-small">Discover new things about your data</h3>
                  <p className="paragraph">
                      <Link className="link" to='/machinelearning'>Machine learning</Link> enables software to learn about your data, ultimately deciphering trends and making predictions in a number of ways!  Check some of them out <Link className="link" to="/datatypes">here!</Link>
                  </p>
              </div>
              <div>
                  <div className="home-composition">
                      <img alt="office"
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
                      <h3 className="heading-tertiary margin-bottom-small">Explore your data</h3>
                      <p className="feature-box__text">
                        See your data in a different light with our attractive graphs and easy-to-read charts!
                      </p>
                  </div>
              </div>
              <div className="col-1-of-4">
                  <div className="feature-box">
                      <h3 className="heading-tertiary margin-bottom-small">Save time</h3>
                      <p className="feature-box__text">
                        By importing your data from Google Sheets, you can get more out of the data that you already have.
                      </p>
                  </div>
              </div>
              <div className="col-1-of-4">
                  <div className="feature-box">
                      <h3 className="heading-tertiary margin-bottom-small">Combine your data</h3>
                      <p className="feature-box__text">
                        Is your data stored across multiple sheets?  Import them one after the other to gain an insight on all of them at once!
                      </p>
                  </div>
              </div>
              <div className="col-1-of-4">
                  <div className="feature-box">
                      <h3 className="heading-tertiary margin-bottom-small">Versatile support</h3>
                      <p className="feature-box__text">
                        Our variety of machine learning methods give you the power to decide how your data is analyzed!
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
          <div className="center-text margin-bottom-big">
              <h2 className="heading-secondary">
                  See what people are saying about SimplifAi
              </h2>
          </div>
          <div className="row">
              <div className="story">
                  <figure className="story__shape">
                      <img src="img/Cody.png" alt="Cody" className="story__img"/>
                      <figcaption className="story__caption">Cody Daig</figcaption>
                  </figure>
                  <div className="story__text">
                      <h3 className="heading-tertiary margin-bottom-small">I had a great time using SimplifAi</h3>
                      <p>
                          SimplifAi made analyzing the data from all of my students easy!  Of course, the creators were my favorite students, but now I can truly measure how much better I liked them than any others!
                      </p>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="story">
                  <figure className="story__shape">
                      <img src="img/Ralph.png" alt="Ralph" className="story__img"/>
                      <figcaption className="story__caption">Ralph Plumley</figcaption>
                  </figure>
                  <div className="story__text">
                      <h3 className="heading-tertiary margin-bottom-small">SimplifAi really changed my life</h3>
                      <p>
                          Grumble grumble.  I need to find a job.  How can I find a job when I have to compete with this?!
                      </p>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
}

export default Home;