import React, { Component } from 'react';
// import './DataTypes.css';
// import $ from 'jquery';
import Slider from "react-slick";
// import "./slick/slick.css";
// import "./slick/slick-theme.css";
import "./DataTypes.css";
import Card from './Card.jsx';
import CustomPrevArrow from 'react-icons/lib/fa/chevron-circle-left';
import CustomNextArrow from 'react-icons/lib/fa/chevron-circle-right';


class DataTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    // this.prev = this.prev.bind(this);
    // this.next = this.next.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  // CustomPrevArrow(props) { 
  //   return (
  //     <button type="button" className="slick-prev" onClick={this.prev}>Previous</button>
  //   );
  // };

  // CustomNextArrow(props) {
  //   return (
  //     <button type="button" className="slick-next" onclick={this.next}>Next</button>
  //   );
  // };
  

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
      slidesToShow: 2,
      slidesToScroll: 1,
      // autoplay: true,
      speed: 1000,
      // autoplaySpeed: 3000,
      cssEase: "linear",
      // arrows: false,
      prevArrow: < CustomPrevArrow id="slick-prev"/>,
      nextArrow: < CustomNextArrow id="slick-next"/>,
      // centerMode: true
    };
    return (
      <div className="carousel">
        <h2 className="carousel-heading">Data Types</h2>
        {/* <CustomPrevArrow onClick={this.prev}>Previous</CustomPrevArrow>  <CustomNextArrow onClick={this.next}>Next</CustomNextArrow> */}
        
        <div>
        {/* <CustomPrevArrow  onClick={this.prev}>Previous</CustomPrevArrow> */}
        <Slider {...settings}>
          {/* <button type="button" className="slick-prev">Previous</button> */}

          {/* {Info.map((dataType, index) => (<div  key={index}>
            <Card title={dataType.title} body={dataType.body} />
            </div>))} */}

          {/* <div className="card-1 Slider">
            <div>
              <img className="img-carousel" alt="1" src="img/wolf.png"></img> */}
              {/* <Card title="Hello" body="What's up?" /> */}
            {/* </div>
          </div> */}
          {/* <div> */}
            {/* <h3>2</h3> */}
            {/* <Card title="EricTannericTannericTannericTannericTannericTannericTannericTannericTannericTannericTanneric" body='"Failure is the first step to success.""Failure is the first step to success.""Failure is the first step to success.""Failure is the first step to success.""Failure is the first step to success.""Failure is the first step to success.""Failure is the first step to success.""Failure is the first step to success.""Failure is the first step to success.""Failure is the first step to success.""Failure is the first step to success.""Failure is the first step to success.""Failure is the first step to success.""Failure is the first step to success.""Failure is the first step to success.""Failure is the first step to success."' />
          </div> */}
          <div>
            <Card title="Clustering" body="Useful for organizing your data into groups based on similarities across columns.  By clustering wines from around the world based on flavor profile and country of origin, clustering could potentially bundle wines into wine regions of the world without ever knowing that wine regions exist." />
          </div>
          <div>
            <Card title="Decision Trees" body="Decision trees dynamically decide what information is most important to find an end-result.  Passing in HIPA-compliant medical records, an insurance company use metrics to build a tree to determine a person's chances of having hypertension.  The tree would probably decide that the most important metric is age and the second most important is weight.  (Remember, our machines are not doctors, though!)" />
          </div>
          <div>
            <Card title="Neutral Networks" body="Neural Networks can be trained to find relationships between data.  We have used a very primitive neural network to teach a computer how to recognize colors by their numeric values, but they are capable of so much more!" />
          </div>
          {/* <div>
            <Card title="Ralph" body="*grumble grumble*" /> */}
          {/* </div> */}
          {/* <button type="button" className="slick-next">Next</button> */}
        </Slider>
        {/* < CustomNextArrow className="slick-next slick-next-real" onClick={this.next}>Next</ CustomNextArrow> */}
        </div>

      </div>
    );
  }
}

// const CustomPrevArrow = props => { 
//   return (
//     <button type="button" className="slick-prev slick-prev-real">Previous</button>
//   );
// };

// const CustomNextArrow = props => {
//   return (
//     // <div {...this.props}>
//     //   <img src="/images/arrow_prev.png" />
//     // </div>
//     <button type="button" className="slick-next slick-next-real">Next</button>
//   );
// };

export default DataTypes;