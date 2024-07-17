import React, { createContext, useState, useEffect } from "react";
import { getCurrentWeather } from "../utils/weather";

export const WeatherDataContext = createContext({
  weatherData: {},
  setWeatherDataHandler: (weather) => {},
  selectedUnit: "",
  handleSelectUnit: (unit) => {},
  isLoading: false,
});

const WeatherContext = ({ children }) => {
  let results;
  const [selectedUnit, setSelectedUnit] = useState("°C");
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const handleSelectUnit = (unit) => {
    setSelectedUnit(unit);
  };

  const setWeatherDataHandler = (weather) => {
    setWeatherData(weather);
  };

  useEffect(() => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(async (position) => {
      results = {
        latitude: position.coords.latitude.toFixed(2),
        longitude: position.coords.longitude.toFixed(2),
      };
      results = await getCurrentWeather(results);
      setWeatherData(results);
      setIsLoading(false);
    });
  }, []);
  return (
    <WeatherDataContext.Provider
      value={{
        weatherData,
        selectedUnit,
        handleSelectUnit,
        isLoading,
        setWeatherDataHandler,
      }}
    >
      {children}
    </WeatherDataContext.Provider>
  );
};

export default WeatherContext;
