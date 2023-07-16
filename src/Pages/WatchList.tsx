import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../Components/Navigationbar";
import favoriteStore, { CoinDetails } from "../stores/FavouriteStore";
import "../styles/crypto.css";
import authStore from "../stores/AuthStore";

const Watchlist = () => {
  const favorites: CoinDetails[] = favoriteStore.favorites;
  const isSignedIn: boolean = authStore.isSignedIn;

  return (
    <>
      <div>
        <NavBar />
      </div>

      <div className="coindetails-page">
        <span className="coindetails-page-title">Watchlist</span>
      </div>

      <div className="cardStyle">
        {authStore.isSignedIn ? (
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
                {favorites.map((coin: CoinDetails) => (
                  <tr key={coin.coinId}>
                    <td className="tdStyle">
                      <NavLink
                        to={`/coin-details/${coin.name}`}
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
                      </NavLink>
                    </td>
                    <td className="tdStyle">{coin.price}</td>
                    <td
                      className={coin.changepct > 0 ? "positive" : "negative"}
                    >
                      {coin.changepct > 0 ? "+" : ""}
                      {coin.changepct}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div style={{ textAlign: "center" }}>
              <span className="error-title">No coins in watchlist.</span>
            </div>
          )
        ) : (
          <div style={{ textAlign: "center" }}>
            <span className="error-title">Please sign in to view your watchlist.</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Watchlist;
