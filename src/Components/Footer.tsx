import { NavLink } from 'react-router-dom';
import React from 'react';
import "../styles/crypto.css"
import Logo from '../Assets/Logo CryptoPal.svg';
import { IconButton } from "@mui/material";
import twitter from '../Assets/twitter.svg';
import facebook from '../Assets/facebook.svg';
import instagram from '../Assets/instagram.svg';

const Footer: React.FC =() =>{
  return (
    <div className="footerbar">
      <div className="footer-container">
      
        <img className='logo' src={Logo} alt="CryptoPal Logo" />

      
        <div className="nav-elements">
          <ul>
            <div className='footercenter'> 
            <li>
              <NavLink to="/home">Crypto</NavLink>
            </li>
            <li>
              <NavLink to="/features">Market</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus">Watchlist</NavLink>
            </li>
            <li>
              <NavLink to="/help">About us</NavLink>
            </li>
            <li>
              <NavLink to="/help">Help</NavLink>
            </li>
            </div>
           
          </ul>
          <li className="social-icons">
              <IconButton href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebook} />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitter} />

              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagram} />

              </IconButton>
            </li>
        </div>
      
      </div>
      <span className='footer-bottom-text'> Copyright @CryptoPal 2023. All Rights Reserved. </span>
    </div>
  );
};

export default Footer;
