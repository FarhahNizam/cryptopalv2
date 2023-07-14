import React from "react";
import NavBar from "../Components/Navigationbar";
import Footer from "../Components/Footer";

const AboutUs: React.FC = () => {
  return (
    <>
      <NavBar />
      <div style={{backgroundColor: "#F9FAFD"}}>
        <div className="AboutPage">
          <div className="about-page" style={{ width: "47%" }}>
            <span
              className="landing-page-title"
              style={{ paddingBottom: "20px" }}
            >
              Who are we
            </span>
            <span className="landing-page-paragraph">
              Join us today for a smooth cryptocurrency journey. With our
              minimalist UI, live market data, and currency converter, make
              informed decisions effortlessly.
            </span>
          </div>
        </div>
        
      </div>
      <div className="team-section">
    test
      </div>
      <Footer />
    </>
  );
  // return (
  //   <div>
  //     <NavBar />

  //     <h1>About us</h1>
  //     <p>
  //       Welcome to CrypyoPal! Simplicity meets power here. Our user-friendly
  //       design ensures smooth navigation while providing you with real-time
  //       market data. Easily exchange currencies and add your favorites to the
  //       watchlist.
  //     </p>
  //     <p>
  //       Stay informed. Stay in control. Join us now and embrace the exciting
  //       world of cryptocurrencies with CrypyoPal.
  //     </p>
  //   </div>
  // );
};

export default AboutUs;
