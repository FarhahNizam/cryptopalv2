import React from "react";
import NavBar from "../Components/Navigationbar";
import RealTimeChart from "../Components/Realtimechart";
import WebSocketConnection from "../services/WebsocketConnection";
import "../styles/crypto.css"
const Features=() => {
    return(
        <>
       <div className="">
        <NavBar />
         <RealTimeChart />
       </div>
        
             
            
        </>
    )

}

export default Features;