import React from "react";
import { useLocation } from "react-router-dom";
import Realtimechart from "./Realtimechart";
import Navigationbar from "./Navigationbar";
import authStore from "../stores/AuthStore";
import { IconButton } from "@mui/material";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import ChartDetailsCard from "./ChartDetailsCard";
import { auth, firestore } from "../stores/RootStore";
import { collection, deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { CoinDetails } from "../stores/FavouriteStore";
import Navigbar from "./Navigbar";

interface Coin {
  coinId: string;
  name: string;
  fullName: string;
  price: string;
  imageurl: string;
  changepct: string;
  userId: string;
}

const WatchListDetails = () => {
  const location = useLocation();
  const coinDetails = location.state;

  if (!coinDetails) {
    // Handle the case where the state is not available (e.g., user navigates directly to this page)
    return <div>Error: Coin data not available.</div>;
  }

  const favoritesJson= JSON.parse(coinDetails);
  console.log(favoritesJson);

  const handleToggleFavorite =  async (favoritesJson: CoinDetails, e: any) => {
    e.preventDefault();
    try {
      const currentUser = auth.currentUser; // Get the current authenticated user using Firebase auth
  
      if (currentUser) {
        const userId = currentUser.uid; // Get the user's UID
        const coinId = favoritesJson.coinId;
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
          // Add the coin to favorites
          await setDoc(favoriteDoc, favoritesJson);
          authStore.favoriteStore.addToFavorites(favoritesJson);
        }
      } else {
        // Handle the case when the user is not signed in
      }
    } catch (error) {
      // Handle the FirebaseError
      console.error("Firebase Error:", error);
      // You can show an error message to the user or perform other actions
    }
  };
  

  // Check if the coin is already in the user's favorites
  const isFavorite = authStore.favoriteStore.favorites.some(
    (favorite) => favorite.coinId === favoritesJson.coinId && favorite.userId === auth.currentUser?.uid
  );
  return (
    <div>
    <Navigbar />
    <div className="coindetails-page">
      <div className="coindetails-image">
        <img
          src={`https://www.cryptocompare.com${favoritesJson.imageurl}`}
          height="200"
          style={{ marginBottom: 20, height: '150px', paddingLeft: '100px' }}
        />
      </div>
      <div className="coindetails-title">
        <span>{favoritesJson.name}</span>
        <span className="coindetails-symbol">{favoritesJson.name}</span>
        {authStore.isSignedIn && (
       <IconButton
       onClick={(e) => handleToggleFavorite(favoritesJson, e)} // Pass favoritesJson and event as arguments
       style={{ marginLeft: 10 }}
       title={isFavorite ? "Remove from favorites" : "Add to favorites"}
     >
       {isFavorite ? (
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
        <span className="coindetails-price-content">{favoritesJson.price}</span>
      </div>
      <div className="vl"></div>
      <div className="coindetails-price">
        <span className={favoritesJson.changepct > 0 ? "positive" : "negative"}>
          Value:  <br />
          <span className="coindetails-price-content">
            {favoritesJson.changepct > 0 ? '+' : '-'}
            {favoritesJson.changepct}%
          </span>
        </span>
      </div>
    </div>
    <div className="container-chart"> 
    <div className="card-livechart">
         <Realtimechart coin={favoritesJson.name} />
    </div>
    <div className="chartdetails-container">
    <ChartDetailsCard
          symbol={favoritesJson.name}
          marketCap={favoritesJson.marketcap}
          circulatingSupply={favoritesJson.circulatingsupply}
          totalVolume24h={favoritesJson.totalvolume24h}
          openDay={favoritesJson.openday}
        />
    </div>
    </div>
  </div>
  );
};

export default WatchListDetails;

  