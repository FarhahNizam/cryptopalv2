import React from "react";
import cryptocurrencies from "../stores/Cryptocurrencies";

interface ChartDetailsProps {
  symbol: string;
  marketCap: string;
  circulatingSupply: string;
  totalVolume24h: string;
  openDay: string;
}


const ChartDetailsCard: React.FC<ChartDetailsProps> = ({
  symbol,
  marketCap,
  circulatingSupply,
  totalVolume24h,
  openDay,
}) => {
  const cryptocurrency = cryptocurrencies.find((crypto) => crypto.symbol === symbol);

  // Function to open the cryptocurrency's homepage when the button is clicked
  const handleVisitHomepage = () => {
    if (cryptocurrency) {
      window.open(cryptocurrency.url, "_blank"); // Opens the URL in a new tab
    }
  };

  return (
    <div className="chartdetails-container">
      <h2 className="chartdetails-title">{symbol}</h2>
      <div className="chartdetails-line">
        <span><strong>Market Cap:</strong> </span>
        <span>{marketCap}</span>
      </div>
      <div className="chartdetails-line">
        <span><strong>Circulating Supply:</strong> </span>
        <span>{circulatingSupply}</span>
      </div>
      <div className="chartdetails-line">
        <span><strong>Total Volume (24h):</strong> </span>
        <span>{totalVolume24h}</span>
      </div>
      <div className="chartdetails-line">
        <span><strong>Opening Price (24h):</strong> </span>
        <span>{openDay}</span>
      </div>
      <div className="buttonchartdetails">
        <span className="buttonchartdetailstext">Want to learn more?</span>
        <button className="details-buttonchart" onClick={handleVisitHomepage}>
          Visit homepage
        </button>
      </div>
    </div>
  );
};

export default ChartDetailsCard;
