import React, { useContext } from "react";
import {
  DayInfo,
  GetLocationButton,
  LocationInfo,
  Navbar,
  NavbarSearch,
  SearchButton,
  TemperatureStats,
  WeatherStats,
} from "./Sidebar.styled";
import shower from "../../assets/Shower.png";
import "../../index.css";
import { WeatherDataContext } from "../../store/WeatherContext";

const Sidebar = () => {
  const weatherCtx = useContext(WeatherDataContext);
  const date = new Date();
  let results;
  const getCurrentWeather = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      results = {
        latitude: position.coords.latitude.toFixed(2),
        longitude: position.coords.longitude.toFixed(2),
      };
    });
  };
  return (
    <Navbar>
      <NavbarSearch>
        <SearchButton>Search for Places</SearchButton>
        <GetLocationButton onClick={() => getCurrentWeather()}>
          <span className="material-symbols-outlined">my_location</span>
        </GetLocationButton>
      </NavbarSearch>
      <WeatherStats>
        <img src={shower} alt="Shower" />
        <TemperatureStats>
          <span>{weatherCtx?.weatherData?.data?.main?.temp.toFixed()}</span>
          <span>{weatherCtx?.selectedUnit}</span>
        </TemperatureStats>
        <p>{weatherCtx?.weatherData?.data?.weather[0]?.main}</p>
      </WeatherStats>
      <DayInfo>
        <p>Today</p>
        <p>.</p>
        <p>
          {date.toLocaleDateString("default", { weekday: "short" })}, &nbsp;
          {date.getDate()}&nbsp;
          {date.toLocaleDateString("default", { month: "long" })}
        </p>
      </DayInfo>
      <LocationInfo>
        <span className="material-symbols-outlined">location_on</span>
        <p>{weatherCtx?.weatherData?.data?.name}</p>
      </LocationInfo>
    </Navbar>
  );
};

export default Sidebar;
