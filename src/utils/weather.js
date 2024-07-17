// @ts-nocheck
import axios from "axios";

export const getWeatherByCurrentLocation = async (location) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_CURRENT_WEATHER_URL}lat=${
        location.latitude
      }&lon=${location.longitude}${
        import.meta.env.VITE_CURRENT_WEATHER_OPTIONS
      }`
    );
    return {
      status: response.status,
      statusText: response.statusText,
      data: response.data,
    };
  } catch (error) {
    console.log(error);
    return {
      status: error?.response?.status,
      statusText: error?.response?.statusText,
      data: error?.response?.data,
    };
  }
};

export const getCurrentWeather = async (results) => {
  const weatherData = await getWeatherByCurrentLocation(results);
  return weatherData;
};
