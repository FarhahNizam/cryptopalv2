import React from "react";
import NavBar from "../Components/Navigationbar";
import AuthDetails from "../Components/AuthDetails";
import Carousel from "../Components/Carousel";
import RealTimeChart from "../Components/Realtimechart";
import LifeChart from "../Components/LifeChart";
import WebSocketConnection from "../services/WebsocketConnection";
import '../styles/crypto.css';
const Home=() => {
    return(
        <div>
            <NavBar/>
<div className="Container"> 
<Carousel />
         {/* <LifeChart /> */}
         </div>
        </div>
    )

}

export default Home;