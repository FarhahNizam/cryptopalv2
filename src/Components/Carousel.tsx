import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { TopList24H } from "../services/api";
import CryptoContext, { CryptoState } from "../CryptoContext";
import AliceCarousel from "react-alice-carousel";
import { Link,NavLink } from "react-router-dom";
import "react-alice-carousel/lib/alice-carousel.css";
import { CarouselItem } from "react-bootstrap";
import "../styles/crypto.css";
import positive from "../Assets/arrowup.svg";
import negative from "../Assets/arrowdown.svg";
import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import arrowleft from '../Assets/Arrow Left.svg';
import arrowright from '../Assets/Arrow Right (1).svg'
import {useNavigate } from "react-router-dom";

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

const Carousel: React.FC = () => {


  const [topList, setTopList] = useState<CoinData[]>([]);
  const { currency } = CryptoState();
  const carouselRef = useRef<AliceCarousel | null>(null);

  const fetchTop24HVol = async () => {
    await fetch(TopList24H(currency))
      .then((res: any) => res.json())
      .then((coin: any) => {
        const coinData = coin.Data;
        setTopList(coinData);
        console.log(topList);
      });
  };

  console.log(topList);
  useEffect(() => {
    fetchTop24HVol();
  }, [currency]);

  const navigate = useNavigate();

  const handleCarouselItemClick = (coin: CoinData) => {
    navigate(`/coin-details/${coin.CoinInfo.Name}`, { state: { coin } });
  };

  const items = topList.map((coin: CoinData) => {
    const id = coin.CoinInfo.Id;
    const imageUrl = coin.CoinInfo.ImageUrl;
    const fullName = coin.CoinInfo.FullName;
    const price = coin.DISPLAY.USD.PRICE;
    const changepct = coin.DISPLAY.USD.CHANGEPCT24HOUR;
    const highhour = coin.DISPLAY.USD.HIGH24HOUR;
    const lowhour = coin.DISPLAY.USD.LOW24HOUR;
    const name=coin.CoinInfo.Name;
    return (
      
      <div className="carouselItem" key={id}  
      onClick={() => handleCarouselItemClick(coin)}>
     
        <div className="cardcrypto">
          <div className="containercrypto">
            <span className="sun">
              <img
                src={`https://www.cryptocompare.com${imageUrl}`}
                alt={fullName}
                height="200"
                style={{ marginBottom: 20 }}
              />

              <div className="carousel-card-details">
                <span>{fullName}</span>
                <p>{price}</p>
              </div>
            </span>
          </div>

          <div className="temp-scale">
            {changepct > 0 ? (
              <img src={positive} alt="Positive" className="image-style" />
            ) : (
              <img src={negative} alt="Negative" className="image-style" />
            )}
            <span className={changepct > 0 ? "positive" : "negative"}>
            {changepct > 0 ? '+' : '-'}

              {changepct}%
            </span>
          </div>
        </div>
        
      </div>
    );
  });

  const responsive = {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1024: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  };

  const handlePrevButtonClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const handleNextButtonClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const renderPrevButton = () => (
    <IconButton className="carousel-button prev-button" onClick={handlePrevButtonClick}>
      <img className="left-right-style" src={arrowleft} alt="Arrow Left" />
    </IconButton>
  );

  const renderNextButton = () => (
    <IconButton className="carousel-button next-button" onClick={handleNextButtonClick}>
      <img className="left-right-style" src={arrowright} alt="Arrow Left" />
    </IconButton>
  );

  return (
    <div className="">
      <div className="carousel-background">

        <div className="carousel-page-content">
        <span className="content-title"> Trending currencies</span>
    <span className="content-paragraph">Explore market’s high growth cryptocurrencies.</span>
        </div>
    

        <div className="carousel">
          <div>{renderPrevButton()}</div>
          <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={1000}
            animationDuration={1500}
            disableDotsControls
            responsive={responsive}
            items={items}
          disableButtonsControls
            ref={(el) => (carouselRef.current = el)}
          />
          <div>{renderNextButton()}</div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;