// @ts-nocheck
import axios from "axios";

export const getWeatherByCurrentLocation = async (location) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_FORECAST_URL}lat=${location.latitude}&lon=${
        location.longitude
      }${import.meta.env.VITE_FORECAST_URL_OPTIONS}`
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
