import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import WeatherContext from "./store/WeatherContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WeatherContext>
      <App />
    </WeatherContext>
  </React.StrictMode>
);
