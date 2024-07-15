import React, { createContext, useState, useEffect } from "react";
import { getWeatherByCurrentLocation } from "../utils/weather";

export const WeatherDataContext = createContext({
  weatherData: {},
  selectedUnit: "",
  handleSelectUnit: (unit) => {},
});

const WeatherContext = ({ children }) => {
  let results;
  const [selectedUnit, setSelectedUnit] = useState("°C");
  const [weatherData, setWeatherData] = useState({});
  const handleSelectUnit = (unit) => {
    setSelectedUnit(unit);
  };

  useEffect(() => {
    const getCurrentWeather = async (results) => {
      results = await getWeatherByCurrentLocation(results);
      setWeatherData(results);
    };
    navigator.geolocation.getCurrentPosition((position) => {
      results = {
        latitude: position.coords.latitude.toFixed(2),
        longitude: position.coords.longitude.toFixed(2),
      };
      getCurrentWeather(results);
    });
  }, []);
  return (
    <WeatherDataContext.Provider
      value={{ weatherData, selectedUnit, handleSelectUnit }}
    >
      {children}
    </WeatherDataContext.Provider>
  );
};

export default WeatherContext;
