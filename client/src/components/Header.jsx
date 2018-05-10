import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import wolf from '../wolf.png';

const Header = (props) => {
  return (
    <header className="header">
      <div className="header-content">
        
        <Link to="/" className="header-menu-home"
          ><p> Home </p>
        </Link>
        <Link to="/upload" className="header-menu-upload">
          <p> Upload </p>
        </Link>
        <Link to="/about" className="header-menu-about">
          <p> About Us </p>
        </Link>

        <div className="title">
          simplifAi
        </div>

        <div className="logo">
          <img 
            src={wolf} 
            alt="logo" 
            className="logo-pic" 
            onClick={props.toggleModal}
          />
        </div>

      </div>
    </header>
  );
}

export default Header;