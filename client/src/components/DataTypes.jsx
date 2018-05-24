import React, { Component } from 'react';
// import './DataTypes.css';
// import $ from 'jquery';
import Slider from "react-slick";
// import "./slick/slick.css";
// import "./slick/slick-theme.css";
import "./DataTypes.css";
import Card from './Card.jsx';


class DataTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1
    // };
    // return (
    //   <div className="carousel">
    //     <h2 className="dt-heading"> Single Item</h2>
    //     <Slider {...settings}>
    //       <div>
    //         <h3>1</h3>
    //       </div>
    //       <div>
    //         <h3>2</h3>
    //       </div>
    //       <div>
    //         <h3>3</h3>
    //       </div>
    //       <div>
    //         <h3>4</h3>
    //       </div>
    //       <div>
    //         <h3>5</h3>
    //       </div>
    //       <div>
    //         <h3>6</h3>
    //       </div>
    //     </Slider>
    //   </div>
    // );

    // const settings = {
    //   slidesToShow: 3,
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
    //   <div className="carousel">
    //     <h2 className="dt-heading"> Data Types</h2>
    //       <Slider {...settings}>
    //         <div>
    //           <div>
    //             <h3>1</h3>
    //           </div>
    //           <div>2</div>
    //           <div>2</div>
    //         </div>
    //       </Slider>
    //   </div>
    // );

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      // autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      arrows: false
      // arrows: true,
      // prevArrow: < CustomPrevArrow />,
      // nextArrow: < CustomNextArrow />,
      // centerMode: true
    };
    return (
      <div className="carousel">
        <h2 className="carousel-heading">Data Types</h2>
        <Slider {...settings}>
          {/* <button type="button" className="slick-prev">Previous</button> */}
          <div className="card-1 Slider">
            <img className="img-1" alt="1" src="img/wolf.png"></img>
          </div>
          <div>
            {/* <h3>2</h3> */}
            <Card title="Hello" body="What's up?" />
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

          {/* <button type="button" className="slick-next">Next</button> */}
        </Slider>
      </div>
    );
  }
}

const CustomPrevArrow = props => { 
  return (
    <button type="button" className="slick-prev">Previous</button>
  );
};

const CustomNextArrow = props => {
  return (
    // <div {...this.props}>
    //   <img src="/images/arrow_prev.png" />
    // </div>
    <button type="button" className="slick-next">Next</button>
  );
};

export default DataTypes;