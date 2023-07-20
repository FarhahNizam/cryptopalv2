import React from "react";
import "../styles/crypto.css"
import CryptoTable from "../Components/CryptoTable";
import { useNavigate } from "react-router-dom";


const ExploreCryptocurrency:React.FC=() => {
    const navigate=useNavigate();
    const handleNewsPage = () => {
        navigate('/news');
     
         };

    return(
        <div> 
        <div className="StayInformedPageBackground">
            <div className="landing-page">
            <span className="staying-page-title">Stay informed with the latest news</span>
<span className="landing-page-paragraph">Stay ahead of the game and make informed decision!</span>
<button className="button-viewmore" onClick={handleNewsPage}>View more</button>
            </div>
        <div>
        {/* <CryptoTable /> */}

        </div>
      
       
        </div>

        
       
        </div>
    )

}

export default ExploreCryptocurrency;