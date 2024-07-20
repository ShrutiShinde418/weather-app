// @ts-nocheck
import axios from "axios";

export const getWeatherByCurrentLocation = async (location, type) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_CURRENT_WEATHER_URL}lat=${
        location.latitude
      }&lon=${location.longitude}${
        import.meta.env.VITE_CURRENT_WEATHER_OPTIONS
      }&units=${type}`
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

export const getCurrentLocation = async () => {
  return new Promise((resolve, reject) => {
    const success = (position) => {
      resolve({
        latitude: position.coords.latitude.toFixed(2),
        longitude: position.coords.longitude.toFixed(2),
      });
    };

    const error = (err) => {
      reject({ message: err.message, status: err.status });
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      return {
        message: "Sorry, your browser does not support HTML5 geolocation.",
        status: 400,
      };
    }
  });
};
