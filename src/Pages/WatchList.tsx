import React from "react";
import NavBar from "../Components/Navigationbar";
import favoriteStore from "../stores/FavouriteStore";
import "../styles/crypto.css";
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
  

const Watchlist = () => {
  const favorites = favoriteStore.favorites;

  return (
    <>
      <div>
        <NavBar />
      </div>

      <div>
        <h2>My Watchlist</h2>
        <ul>
          {favorites.map((coinId:any) => (
            <li key={coinId}>{coinId}</li>
            
          ))}
        </ul>
      </div>
    </>
  );
};

export default Watchlist;
