// @ts-nocheck
import React, { createContext, useState, useEffect } from "react";
import {
  getWeatherByCurrentLocation,
  getCurrentLocation,
} from "../utils/weather";
import { temperatureOptions } from "../utils/helpers";

export const WeatherDataContext = createContext({
  weatherData: {},
  setWeatherDataHandler: (weather) => {},
  selectedUnit: {},
  handleSelectUnit: (unit) => {},
  isLoading: false,
});

const WeatherContext = ({ children }) => {
  let results;
  const [selectedUnit, setSelectedUnit] = useState({
    unit: "°C",
    type: "metric",
  });
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const handleSelectUnit = async (unit) => {
    setIsLoading(true);
    setSelectedUnit({ unit, type: temperatureOptions[unit] });
    results = await getCurrentLocation();
    console.log(unit);
    results = await getWeatherByCurrentLocation(
      {
        latitude: results?.latitude,
        longitude: results?.longitude,
      },
      temperatureOptions[unit]
    );
    setWeatherData(results);
    setIsLoading(false);
  };

  const setWeatherDataHandler = (weather) => {
    setWeatherData(weather);
  };

  useEffect(() => {
    setIsLoading(true);
    const getWeather = async () => {
      results = await getCurrentLocation();
      results = await getWeatherByCurrentLocation(results, selectedUnit?.type);
      setWeatherData(results);
      setIsLoading(false);
    };
    getWeather();
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
