import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Container } from 'react-bootstrap';
import React, { useState,useEffect } from "react";
import { auth } from "../services/firebaseconfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Features  from '../Pages/Features';
import Logo from '../Assets/Logo CryptoPal.svg';
const NavBar: React.FC =() =>{
    let navigate=useNavigate();
    const userSignOut=()=>{
        signOut(auth).then(()=>{
            console.log('sign out successful');
            navigate("/")
        }).catch(error=>console.log(error))
       }

return(
    <nav className="navbar">
      <div className="container">
     
          <img className="logo" src={Logo} alt="CryptoPal Logo" />
      
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
        <button className='' onClick={userSignOut}>Sign out</button>
      </div>
    </nav>
)
}

export default NavBar;