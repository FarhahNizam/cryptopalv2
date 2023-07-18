import { NavLink } from 'react-router-dom';
import React from 'react';
import "../styles/crypto.css"
import Logo from '../Assets/grouplogo.svg';
import { IconButton } from "@mui/material";
import twitter from '../Assets/twitter.svg';
import facebook from '../Assets/facebook.svg';
import instagram from '../Assets/instagram.svg';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import rootStore from '../stores/RootStore';
import Consolepage from '../Pages/Consolepage';

const Navigbar: React.FC = observer(() =>{
    let navigate = useNavigate();

    const userSignOut = () => {
      rootStore.authStore.clearAuthUser();
      navigate('/consolepage');
    };
  
    const openModal = () => {
  
      navigate('/consolepage');
    };
  
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
              <NavLink to="/help">News</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus">About us</NavLink>
            </li>
            <li>
              <NavLink to="/help">Help</NavLink>
            </li>
            </div>
           
          </ul>
          <div className="console-home">
          <Consolepage />
            </div>
        </div>
 
      </div>
    
    </div>
  );
});

export default Navigbar;
