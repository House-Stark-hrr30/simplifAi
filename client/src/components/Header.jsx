import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = (props) => {
  return (
    <header className="header">
      <div className="header-content">

        <Link to="/" className="header-menu-home"
          ><p> Home </p>
        </Link>
        <Link to="/dashboard" className="header-menu-upload">
          <p> Dashboard </p>
        </Link>
        <Link to="/about" className="header-menu-about">
          <p> About Us </p>
        </Link>

        <div className="title">
          SimplifAi
        </div>

        <Link to="#" className="header-menu-login" onClick={() => props.toggleModal('login')}> 
          <p> Login </p> 
        </Link>

        {/* <div className="menu icon" onClick={() => props.toggleModal('login')}></div> */}

        {/* <nav className="menu">
          <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open"/>
          <label class="menu-open-button" htmlFor="menu-open">
            <span class="hamburger hamburger-1"></span>
            <span class="hamburger hamburger-2"></span>
            <span class="hamburger hamburger-3"></span>
          </label>
          
          <a href="#" className="menu-item"> <i className="fa fa-bar-chart"></i> </a>
          <a href="#" className="menu-item"> <i className="fa fa-plus"></i> </a>
          <a href="#" className="menu-item"> <i className="fa fa-heart"></i> </a>
          <a href="#" className="menu-item"> <i className="fa fa-envelope"></i> </a>
        </nav> */}

        {/* <div className="logo">
          <img
            src={wolf}
            alt="logo"
            className="logo-pic"
            onClick={() => props.toggleModal('login')}
          />
        </div> */}

      </div>
    </header>
  );
}

export default Header;