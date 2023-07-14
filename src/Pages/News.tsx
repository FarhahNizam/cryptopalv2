import React, { useEffect, useState } from "react";
import NavBar from "../Components/Navigationbar";
import RealTimeChart from "../Components/Realtimechart";
import WebSocketConnection from "../services/WebsocketConnection";
import "../styles/crypto.css";
import ReactiveButton from 'reactive-button';

interface NewsItem {
  id: string;
  title: string;
  body: string;
  imageurl: string;
  url: string;
  source: string;
  source_info: {
    img: string;
  };
}

interface CardComponentProps {
  title: string;
  description: string;
  image: string;
  url: string;
  source: string;
  source_info: {
    img: string;
  };
}

const CardComponent: React.FC<CardComponentProps> = ({
  title,
  description,
  image,
  url,
  source,
  source_info,
}) => {
  const MAX_DESCRIPTION_LENGTH = 150; // Define the maximum length for the description

  const truncatedDescription =
    description.length > MAX_DESCRIPTION_LENGTH
      ? description.slice(0, MAX_DESCRIPTION_LENGTH) + "..." // Truncate the description if it exceeds the maximum length
      : description;

  const capitalizedSource =
    source.charAt(0).toUpperCase() + source.slice(1);

  return (
    
    <div className="card-hover">
    <div className="card-news">
      <div className="news-column-div">
        <img src={image} alt={title} className="news-image" />
        <div className="source-logo-section">
          <img src={source_info.img} alt={title} className="logo-image" />

          <span className="news-source">{capitalizedSource}</span>
        </div>
      </div>
      <div className="news-content">
        <h3>{title}</h3>
        <p>{truncatedDescription}</p>
      </div>
    </div>
    </div>
  );
};

const News: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [visibleNewsCount, setVisibleNewsCount] = useState<number>(10);




  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(
          "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
        );
        const data = await response.json();
        setNewsData(data.Data);
        console.log(data.Data);
      } catch (error) {
        console.log("Error fetching news data:", error);
      }
    };

    fetchNewsData();
  }, []);

  const loadMoreNews = () => {
    setVisibleNewsCount((prevCount) => prevCount + 10);
  };

  const handleCardClick = (url: string) => {
    window.open(url, "_blank");
  };


  return (
    <>
      <div className="NewsPage">
        <NavBar />
        <div className="coindetails-page">
          <span className="coindetails-page-title">News</span>
        </div>

        <div className="">
          <div className="card-container">
            {newsData.slice(0, visibleNewsCount).map((newsItem) => (
              <div
              key={newsItem.id}
              className="card-link"
              onClick={() => handleCardClick(newsItem.url)}
            >
              <CardComponent
                key={newsItem.id}
                title={newsItem.title}
                description={newsItem.body}
                image={newsItem.imageurl}
                url={newsItem.url}
                source={newsItem.source}
                source_info={newsItem.source_info}
              />
              </div>
            ))}
          </div>
          {visibleNewsCount < newsData.length && (
            <div className="outer">
  <div className="button">
    <div className="text" onClick={loadMoreNews}>Load more</div>
  </div>
</div>


            
          )}
        </div>
      </div>
    </>
  );
};

export default News;
