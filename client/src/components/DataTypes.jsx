import React, { Component } from 'react';
// import './DataTypes.css';
// import $ from 'jquery';
import Slider from "react-slick";
import "./slick/slick.css";
import "./slick/slick-theme.css";


class DataTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );

    // const settings = {
    //   slidesToShow: 1, // 3
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   autoplaySpeed: 2000,
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   fade: true,
    //   cssEase: 'linear'
    // };

    // return (
    //   <Slider {...settings}>
    //     <div>
    //       <div>1</div>
    //       <div>2</div>
    //       <div>2</div>
    //     </div>
    //   </Slider>
    // );
  }
}

export default DataTypes;