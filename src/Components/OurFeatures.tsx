import React from "react";
import "../styles/crypto.css"
import { useNavigate } from "react-router-dom";


const OurFeatures:React.FC=() => {
    const navigate=useNavigate();
    const handleMarketPage = () => {
        navigate('/market');
     
         };
    return(
        <div className=""> 
        <div className="FeaturePageBackground">
            <div className="feature-page">
                <span className="content-title">Discover coins</span>
                <span className="feature-page-paragraph">Discover the most popular and profitable cryptocurrency right now</span>
                <button className="button-viewmore" onClick={handleMarketPage}>View more</button>
                {/* <span className="feature-page-paragraph-sub">Experience the next generation cryptocurrency platform.</span>
                <span className="feature-page-paragraph">Live Market Data</span>
                <span className="feature-page-paragraph-sub">Live cryptocurrency prices available. Get yours today.</span>
                <span className="feature-page-paragraph">Exchange Transactions</span>
                <span className="feature-page-paragraph-sub">Convert cryptocurrency to other cryptocurrency. To check out different prices.</span>
 */}


            </div>
        </div>
        </div>
    )

}

export default OurFeatures;