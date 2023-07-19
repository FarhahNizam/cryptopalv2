import React from "react";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import NavBar from "../Components/Navigationbar";
import favoriteStore, { CoinDetails } from "../stores/FavouriteStore";
import "../styles/crypto.css";
import authStore from "../stores/AuthStore";
import { auth } from "../stores/RootStore";
import Navigbar from "../Components/Navigbar";
import Footer from "../Components/Footer";
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
  RAW: {
    USD: {
      MKTCAP: number;
      VOLUME24HOURTO: number;
    };
  };
}

const Watchlist = observer(() => {
  const isSignedIn: boolean = authStore.isSignedIn;
  const navigate = useNavigate();
  const currentUser = auth.currentUser?.uid;
  

  const favorites: CoinDetails[] = favoriteStore.favorites.filter(
    (coin) => coin.userId === currentUser
  );

  console.log(favorites)

  const handleCarouselItemClick = (coin: CoinDetails) => {
    if (coin && coin.coinId) {
      const coinDetails = {
        coinId: coin.coinId,
        name: coin.name,
        fullName: coin.fullName,
        price: coin.price,
        imageurl: coin.imageurl,
        changepct: coin.changepct,
        userId: auth.currentUser?.uid ?? "",
        marketcap:coin.marketcap,
        circulatingsupply:coin.circulatingsupply,
        totalvolume24h:coin.totalvolume24h,
        openday:coin.openday,

      };

      const favoritesJson = JSON.stringify(coinDetails);
      navigate(`/coin-detailsa/${coin.name}`, { state: favoritesJson });
    } else {
      console.error("Invalid coin object or missing 'coinId' property");
    }
  };

   // Convert favorites data into JSON object
   const favoritesJson = favorites.map((coin: CoinDetails) => {
    return {
      coinId: coin.coinId,
      name: coin.name,
      fullName: coin.fullName,
      price: coin.price,
      imageurl: coin.imageurl,
      changepct: coin.changepct,
      userId: auth.currentUser?.uid ?? "",
    };
  });

  // Convert the JSON object to a JSON string
  const favoritesJsonString = JSON.stringify(favoritesJson);

  console.log(favoritesJsonString);
  return (
    <>
      <div>
      <Navigbar/>      
      </div>

      <div className="coindetails-page">
        <span className="coindetails-page-title">Watchlist</span>
      </div>

      <div className="cardStyle">
        {isSignedIn ? (
          favorites.length > 0 ? (
            <table className="tableStyle">
              <thead>
                <tr>
                  <th className="thStyle">Currency</th>
                  <th className="thStyle">Price</th>
                  <th className="thStyle">Status</th>
                </tr>
              </thead>
              <tbody>
                {favorites.map((coin: CoinDetails) => {
                  return (
                    <tr key={coin.coinId}>
                      <td className="tdStyle">
                        <div
                          onClick={() => handleCarouselItemClick(coin)}
                          className="tableimage-fullname"
                        >
                          <img
                            src={`https://www.cryptocompare.com${coin.imageurl}`}
                            height="60"
                            style={{ marginBottom: 10 }}
                            alt={coin.fullName}
                          />
                          <span className="coindetails-symbol2">
                            {coin.fullName}
                          </span>
                          <span className="markettable-symbol">{coin.name}</span>
                        </div>
                      </td>
                      <td className="tdStyle">{coin.price}</td>
                      <td
                        className={coin.changepct > 0 ? "positive" : "negative"}
                      >
                        {coin.changepct > 0 ? "+" : ""}
                        {coin.changepct}%
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          ) : (
            <div style={{ textAlign: "center" }}>
              <span className="error-title">No coins in watchlist.</span>
            </div>
          )
        ) : (
          <div style={{ textAlign: "center" }}>
            <span className="error-title">
            Oops! Your watchlist is empty :(
            </span>
          </div>
        )}
       
      </div>
    </>
  );
});

export default Watchlist;
