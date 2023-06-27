import React from "react";
import NavBar from "../Components/Navigationbar";

const AboutUs: React.FC = () => {
  return (
    <div>
      <NavBar />

      <h1>About us</h1>
      <p>
        Welcome to CrypyoPal! Simplicity meets power here. Our user-friendly
        design ensures smooth navigation while providing you with real-time
        market data. Easily exchange currencies and add your favorites to the
        watchlist.
      </p>
      <p>
        Stay informed. Stay in control. Join us now and embrace the exciting
        world of cryptocurrencies with CrypyoPal.
      </p>
    </div>
  );
};

export default AboutUs;
