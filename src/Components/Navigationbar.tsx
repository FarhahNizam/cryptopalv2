import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import rootStore from '../stores/RootStore';
import Logo from '../Assets/Logo CryptoPal.svg';
import AuthDetails from './AuthDetails';
import Consolepage from '../Pages/Consolepage';
import '../styles/crypto.css';
const NavBar: React.FC = observer(() => {
  let navigate = useNavigate();

  const userSignOut = () => {
    rootStore.authStore.clearAuthUser();
    navigate('/consolepage');
  };

  const openModal = () => {

    navigate('/consolepage');
  };

  const renderAuthButton = () => {
    if (rootStore.authStore.isSignedIn) {
      // User is logged in, show sign out button
      return (
        <button className="" onClick={userSignOut}>
          Sign out
        </button>
      );
    } else {
      // User is logged out, show login button
      return <button onClick={openModal}> Log in</button>; // or remove this line if you want to render nothing when user is logged out
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <img className="logo" src={Logo} alt="CryptoPal Logo" />
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/home">Crypto</NavLink>
            </li>
            <li>
              <NavLink to="/market">Market</NavLink>
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

        <Consolepage />
      </div>
    </nav>
  );
});

export default NavBar;
