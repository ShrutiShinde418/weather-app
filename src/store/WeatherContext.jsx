// @ts-nocheck
import React, { createContext, useState, useEffect } from "react";
import {
  getWeatherByCurrentLocation,
  getCurrentLocation,
  getWeatherForecast,
} from "../utils/weather";
import { temperatureOptions } from "../utils/helpers";

export const WeatherDataContext = createContext({
  weatherData: {},
  setWeatherDataHandler: (weather) => {},
  selectedUnit: {},
  weatherForecast: {},
  handleSelectUnit: (unit) => {},
  isLoading: false,
});

const WeatherContext = ({ children }) => {
  let results, weatherForecastResult, locationResult;
  const [selectedUnit, setSelectedUnit] = useState({
    unit: "°C",
    type: "metric",
  });
  const [weatherData, setWeatherData] = useState({});
  const [weatherForecast, setWeatherForecast] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const handleSelectUnit = async (unit) => {
    setIsLoading(true);
    setSelectedUnit({ unit, type: temperatureOptions[unit] });
    locationResult = await getCurrentLocation();
    results = await getWeatherByCurrentLocation(
      {
        latitude: locationResult?.latitude,
        longitude: locationResult?.longitude,
      },
      temperatureOptions[unit]
    );
    weatherForecastResult = await getWeatherForecast(
      {
        latitude: locationResult?.latitude,
        longitude: locationResult?.longitude,
      },
      temperatureOptions[unit]
    );
    setWeatherData(results);
    setWeatherForecast(weatherForecastResult);
    setIsLoading(false);
  };

  const setWeatherDataHandler = (weather) => {
    setWeatherData(weather);
  };

  useEffect(() => {
    setIsLoading(true);
    const getWeather = async () => {
      locationResult = await getCurrentLocation();
      weatherForecastResult = await getWeatherForecast(
        locationResult,
        selectedUnit?.type
      );
      results = await getWeatherByCurrentLocation(
        locationResult,
        selectedUnit?.type
      );
      setWeatherData(results);
      setWeatherForecast(weatherForecastResult);
      setIsLoading(false);
    };
    getWeather();
  }, []);
  return (
    <WeatherDataContext.Provider
      value={{
        weatherData,
        weatherForecast,
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
