import React, { Component } from 'react';
import './About.css';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
            <div className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Meet the team behind simplifAi
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">We are dedicated to your success</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                            ducimus quam nisi exercitationem omnis earum qui.
                        </p>

                        <h3 className="heading-tertiary u-margin-bottom-small">We value your data and privacy</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
                        </p>

                        
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">

                            <img srcSet="img/Leo_3.jpg 80w, img/Leo_3.jpg 100w"
                                 sizes="(max-width: 30em) 10vw, (max-width: 15em) 30vw, 200px"
                                 alt="Photo 1"
                                 className="composition__photo composition__photo--p1"
                                 src="img/Leo_3.jpg"/>

                            <img srcSet="img/Felipe_2.jpeg 300w, img/Felipe_2.jpeg 1000w"
                                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt="Photo 2"
                                 className="composition__photo composition__photo--p2"
                                 src="img/Felipe_2.jpeg"/>

                            <img srcSet="img/Tanner.png 300w, img/Tanner.png 1000w"
                                 sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt="Photo 3"
                                 className="composition__photo composition__photo--p3"
                                 src="img/Tanner.png"/>
                            
                        </div>
                    </div>
                </div>
            </div>

            

            
        </div>

        


    );
  }
}

export default About;