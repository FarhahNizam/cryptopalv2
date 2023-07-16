import React from "react";
import { observer } from "mobx-react";
import { useLocation } from "react-router-dom";
import { IconButton } from "@mui/material";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import '../styles/crypto.css';
import Navigationbar from '../Components/Navigationbar';
import Realtimechart from "./Realtimechart";
import authStore from "../stores/AuthStore";
import { collection, deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import rootStore, { auth, firestore } from "../stores/RootStore";
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

const CoinDetailsPage: React.FC = observer(() => {
  const location = useLocation();
  const { coin } = location.state;
  const coinDetails = {
    coinId: coin.CoinInfo.Id,
    name: coin.CoinInfo.Name,
    fullName: coin.CoinInfo.FullName,
    price: coin.DISPLAY.USD.PRICE,
    changepct:coin.DISPLAY.USD.CHANGEPCT24HOUR,
    // Add other properties as needed
  };

  const handleToggleFavorite = async (e:any) => {
    e.preventDefault();
    try {
      const currentUser = auth.currentUser; // Get the current authenticated user using Firebase auth
        
      if (currentUser) {
        const userId = currentUser.uid; // Get the user's UID
        const coinId = coin.CoinInfo.Id;
        const favoritesRef = collection(firestore, "favorites", userId, coinId);
  
        // Check if the coin is already in the user's favorites
        const favoriteDoc = doc(favoritesRef, coinId);
        const favoriteSnapshot = await getDoc(favoriteDoc);
        const isFavorite = favoriteSnapshot.exists();
  
        if (isFavorite) {
          // Remove the coin from favorites
          await deleteDoc(favoriteDoc);
          authStore.favoriteStore.removeFromFavorites(coinId);
        } else {
          const coinDetails = {
            coinId: coin.CoinInfo.Id,
            name: coin.CoinInfo.Name,
            fullName: coin.CoinInfo.FullName,
            price: coin.DISPLAY.USD.PRICE,
            imageurl:coin.CoinInfo.ImageUrl,
            changepct:coin.DISPLAY.USD.CHANGEPCT24HOUR,

            // Add other properties as needed
          };
          // Add the coin to favorites
          await setDoc(favoriteDoc, coinDetails);
          authStore.favoriteStore.addToFavorites(coinDetails);
        }
      } else {
        // Handle the case when the user is not signed in
        // You can show a login modal or redirect to the login page
      }
    } catch (error) {
      // Handle the FirebaseError
      console.error("Firebase Error:", error);
      // You can show an error message to the user or perform other actions
    }
  };
  

  return (
    <div>
      <Navigationbar />
      <div className="coindetails-page">
        <div className="coindetails-image">
          <img
            src={`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`}
            height="200"
            style={{ marginBottom: 20, height: '150px', paddingLeft: '100px' }}
          />
        </div>
        <div className="coindetails-title">
          <span>{coin.CoinInfo.FullName}</span>
          <span className="coindetails-symbol">{coin.CoinInfo.Name}</span>
          {authStore.isSignedIn && (
            <IconButton
              onClick={handleToggleFavorite}
              style={{ marginLeft: 10 }}
              title={authStore.favoriteStore.isFavorite(coin.CoinInfo.Id) ? "Remove from favorites" : "Add to favorites"}
            >
              {authStore.favoriteStore.isFavorite(coin.CoinInfo.Id) ? (
                <FaHeart color="red" />
              ) : (
                <FaRegHeart />
              )}
            </IconButton>
          )}
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
              {coin.DISPLAY.USD.CHANGEPCT24HOUR}%
            </span>
          </span>
        </div>
        {/* Display other coin details */}
      </div>
      <div className="card-livechart">
        <Realtimechart />
      </div>
    </div>
  );
});

export default CoinDetailsPage;
