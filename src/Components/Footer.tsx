import { NavLink } from 'react-router-dom';
import React from 'react';
import "../styles/crypto.css"

const Footer: React.FC =() =>{
  return (
    <div className="footerbar">
      <div className="container">
        <img className="logo"  alt="CryptoPal Logo" />
        <div className="nav-elements">
          <ul>
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
          </ul>
        </div>
    
      </div>
    </div>
  );
};

export default Footer;
