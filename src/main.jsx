import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initGA, logPageView } from "./analytics";

const trackingID = import.meta.env.VITE_GOOGLE_ANALYTICS_TRACKING_ID;

initGA(trackingID);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

logPageView();
