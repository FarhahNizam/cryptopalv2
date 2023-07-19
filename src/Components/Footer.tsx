import { NavLink } from 'react-router-dom';
import React from 'react';
import "../styles/crypto.css"
import Logo from '../Assets/grouplogo.svg';
import { IconButton } from "@mui/material";
import twitter from '../Assets/twitter.svg';
import facebook from '../Assets/facebook.svg';
import instagram from '../Assets/instagram.svg';
import { observer } from 'mobx-react';

const Footer: React.FC = observer(() =>{
  return (
    <div className="footerbar">
      <div className="footer-container">
      
        <img className='logo-footer' src={Logo} alt="CryptoPal Logo" />

      
        <div className="foot-elements">
          <ul>
            <div className='footercenter'> 
            <li>
              <a href="#">Crypto</a>
            </li>
            <li>
              <a href="#">Market</a>
            </li>
            <li>
            <a href="#">Watchlist</a>
            </li>
            <li>
            <a href="#">News</a>

            </li>
            <li>
            <a href="#">About</a>
            </li>
            <li>
            <a href="#">Help</a>
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
});

export default Footer;
