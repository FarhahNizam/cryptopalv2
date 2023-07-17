import React from "react";

interface ChartDetailsProps {
  symbol: string;
  marketCap: number;
  circulatingSupply: number;
  totalVolume24h: number;
  openDay: number;
}

const ChartDetailsCard: React.FC<ChartDetailsProps> = ({
  symbol,
  marketCap,
  circulatingSupply,
  totalVolume24h,
  openDay,
}) => {
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
      <button className="details-buttonchart">Visit homepage </button>

      </div>
    </div>
  );
};

export default ChartDetailsCard;
