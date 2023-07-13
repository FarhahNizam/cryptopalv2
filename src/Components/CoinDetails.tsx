import React from "react";
import { useLocation, useParams } from "react-router-dom";
import '../styles/crypto.css';
import Navigationbar from '../Components/Navigationbar';
import Realtimechart from "./Realtimechart";
interface CoinData {
  CoinInfo: {
    Id: string;
    ImageUrl: string;
    FullName: string;
    Name: string;
  };
  DISPLAY: {
    USD: {
      PRICE: string;
      CHANGEPCT24HOUR: number;
      HIGH24HOUR: number;
      LOW24HOUR: number;
    };
  };
}



const CoinDetailsPage: React.FC = () => {
  const location = useLocation();
  const { coin } = location.state;

  return (
    <div>
        <Navigationbar />
    <div className="coindetails-page">
        <div className="coindetails-image"> 
           <img
                src={`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`}
                height="200"
                style={{ marginBottom: 20 ,height:'150px',paddingLeft:'100px'}}
              />
              </div>
<div className="coindetails-title"> 
      <span>{coin.CoinInfo.FullName}</span>
      <span className="coindetails-symbol">{coin.CoinInfo.Name}</span>
      </div>
      <div className="vl"></div>

      <div className="coindetails-price"> 

      <span className="">Price: <br /></span>
        <span className="coindetails-price-content">{coin.DISPLAY.USD.PRICE}</span>
      </div>
      <div className="vl"></div>

      <div className="coindetails-price"> 
      <span className={coin.DISPLAY.USD.CHANGEPCT24HOUR > 0 ? "positive" : "negative"}>
              Value:  <br />
             <span className="coindetails-price-content"> 
             {coin.DISPLAY.USD.CHANGEPCT24HOUR > 0 ? '+' : '-'}
              {coin.DISPLAY.USD.CHANGEPCT24HOUR}%</span>
            </span>
            </div>
      {/* Display other coin details */}
    </div>

    <div className="card-livechart">
        <Realtimechart />
    </div>
    </div>
  );
};

export default CoinDetailsPage;
