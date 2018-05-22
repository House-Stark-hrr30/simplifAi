import React from 'react';
import './Footer.css';

const Footer = (props) => {
  return (
    <footer className="footer">
        <div className="footer__logo-box">

            <img className="footer__logo__img" src="img/wolf.png" alt="Logo"/>

        </div>
        
        <div className="row">
            <div className="col-1-of-2">
                <div className="footer__navigation">
                    <ul className="footer__list">
                        <li className="footer__item"><div className="footer__contact">Contact us: admin@simplify.com</div></li>
                    </ul>
                </div>
            </div>
            <div className="col-1-of-2">
                <p className="footer__copyright">
                    Copyright &copy; 2018 SimplifAi
                </p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;