import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import wolf from '../wolf.png';
// import Modal from './Modal.jsx';

const Header = (props) => {
  return (
    <header className="header">

      <div className="header-content">
        
        <Link to="/" className="header-menu-home"><p> Home </p> </Link>
        <Link to="/upload" className="header-menu-upload"><p> Upload </p></Link>
        <Link to="/about" className="header-menu-about"><p> About Us </p></Link>

        <div className="title">
          <div className="title-text">
            simplifAi
          </div>
        </div>

        <div className="logo">
          <a><img src={wolf} className="logo-pic" alt="logo" onClick={props.toggleModal}/></a>
        </div>

      </div>

    </header>
  )
}

export default Header;