import React from "react";
import '../Assets/Header.svg';
import Consolepage from "../Pages/Consolepage";
import { useNavigate } from "react-router-dom";
import rootStore from "../stores/RootStore";


const LandingPage:React.FC=()=>{

    const navigate =useNavigate();

    const handleStartJourneyClick = () => {
        rootStore.authStore.openModal();
    };

    const handleAlternateButtonClick = () => {
   navigate('/market');

    };
  
    return(
        <div className="LandingPage">
            <div className="landing-page">
<span className="landing-page-title">Welcome to CryptoPal !</span>
<span className="landing-page-paragraph">Your cryptocurrencies information hub.</span>
{rootStore.authStore.isSignedIn ? ( 
          <button className="long-button" onClick={handleAlternateButtonClick}>
            Explore Cryptocurrency
          </button>
        ) : (
          <button className="long-button" onClick={handleStartJourneyClick}>
            Start your journey with us
          </button>
        )}            </div>


        </div>
    )
}

export default LandingPage;