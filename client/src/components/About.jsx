import React from 'react';
import './About.css';

const About = (props) => {
  return (
    <div>
      <div className="section-about">
        <div className="center-text margin-bottom-big">
          <h1 className="heading-main">
            Meet the team behind SimplifAi
        </h1>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary margin-bottom-small">We are dedicated to your success</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
              ducimus quam nisi exercitationem omnis earum qui.
          </p>

            <h3 className="heading-tertiary margin-bottom-small">We value your data and privacy</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
          </p>

          </div>

          <div className="col-1-of-2">
            <div className="composition">

              <img
                alt=""
                className="composition__photo composition__photo--p1"
                src="img/Leo_3.jpg" />

              <img
                alt=""
                className="composition__photo composition__photo--p2"
                src="img/Felipe_2.jpeg" />

              <img
                alt=""
                className="composition__photo composition__photo--p3"
                src="img/Tanner.png" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;