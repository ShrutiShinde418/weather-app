import React, { useContext, Fragment } from "react";
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
  return (
    <Navbar>
      <NavbarSearch>
        <SearchButton>Search for Places</SearchButton>
        <GetLocationButton
          onClick={() =>
            weatherCtx.handleSelectUnit(weatherCtx.selectedUnit.unit)
          }
        >
          <span className="material-symbols-outlined">my_location</span>
        </GetLocationButton>
      </NavbarSearch>
      <WeatherStats>
        <img src={shower} alt="Shower" />
        <TemperatureStats>
          <span>
            {weatherCtx.isLoading
              ? "--"
              : weatherCtx?.weatherData?.data?.main?.temp.toFixed()}
          </span>
          <span>{weatherCtx?.selectedUnit.unit}</span>
        </TemperatureStats>
        <p>
          {weatherCtx?.isLoading ? (
            <span>Loading...</span>
          ) : (
            weatherCtx?.weatherData?.data?.weather[0]?.main
          )}
        </p>
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
        {weatherCtx.isLoading ? (
          <span>Loading...</span>
        ) : (
          <Fragment>
            <span className="material-symbols-outlined">location_on</span>
            <p>{weatherCtx?.weatherData?.data?.name}</p>
          </Fragment>
        )}
      </LocationInfo>
    </Navbar>
  );
};

export default Sidebar;
