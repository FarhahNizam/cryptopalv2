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
              <NavLink to="/home">Crypto</NavLink>
            </li>
            <li>
              <NavLink to="/market">Market</NavLink>
            </li>
            <li>
              <NavLink to="/watchlist">Watchlist</NavLink>
            </li>
            <li>
              <NavLink to="/news">News</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus">About</NavLink>
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
});

export default Footer;
