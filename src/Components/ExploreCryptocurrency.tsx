import React from "react";
import "../styles/crypto.css"
import CryptoTable from "../Components/CryptoTable";


const ExploreCryptocurrency:React.FC=() => {
    return(
        <div> 
        <div className="CryptotablePageBackground">
            <div className="explorecrypto-page">
                <span className="explorecrypto-page-title">Explore cryptocurrency here !</span>
                <span className="explorecrypto-page-paragraph">Let’s check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.</span>
            </div>
        <div>
        <CryptoTable />

        </div>
      
       
        </div>

        
       
        </div>
    )

}

export default ExploreCryptocurrency;