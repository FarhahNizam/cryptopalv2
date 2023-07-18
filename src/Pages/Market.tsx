import React from "react";
import NavBar from "../Components/Navigationbar";

import "../styles/crypto.css"
import CryptoTable from "../Components/CryptoTable";
import MarketTable from "../Components/MarketTable";
import Navigbar from "../Components/Navigbar";
import Footer from "../Components/Footer";
const Market=() => {
    return(
        <>
       <div className="">
       <Navigbar/>
        <div className="coindetails-page">
<span className="coindetails-page-title">Markets Overview</span>
        </div>
<MarketTable />
<Footer />
       </div>
        
             
            
        </>
    )

}

export default Market;