import React from "react";
import NavBar from "../Components/Navigationbar";

import "../styles/crypto.css"
import CryptoTable from "../Components/CryptoTable";
import MarketTable from "../Components/MarketTable";
const Market=() => {
    return(
        <>
       <div className="">
        <NavBar />
        <div className="coindetails-page">
<span className="coindetails-page-title">Markets Overview</span>
        </div>
<MarketTable />
       </div>
        
             
            
        </>
    )

}

export default Market;