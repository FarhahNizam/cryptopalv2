import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../src/App";
import reportWebVitals from "../src/reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import CryptoContext from "../src/CryptoContext";
import "react-alice-carousel/lib/alice-carousel.css";
import "chart.js";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CryptoContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CryptoContext>
  </React.StrictMode>
);

reportWebVitals();
