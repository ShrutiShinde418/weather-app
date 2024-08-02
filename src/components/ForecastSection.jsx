import React, { useContext } from "react";
import styled from "styled-components";
import ForecastCard from "./ForecastCard";
import sleet from "../assets/Sleet.png";
import { WeatherDataContext } from "../store/WeatherContext";
import { getFormattedDate } from "../utils/helpers";

const Wrapper = styled.div`
  display: flex;
  gap: 1.75em;
  margin-bottom: 4.5em;
  margin-top: 2em;
`;

const ForecastSection = () => {
  const weatherCtx = useContext(WeatherDataContext);
  return (
    <Wrapper>
      {weatherCtx?.weatherForecast?.data?.map((forecastItem, index) => {
        const formattedDate = getFormattedDate(forecastItem?.dt_txt);
        return (
          <ForecastCard
            key={forecastItem.dt}
            title={index === 0 ? "Tomorrow" : formattedDate}
            icon={sleet}
            now={Math.ceil(forecastItem.main.temp_max)}
            then={Math.floor(forecastItem.main.temp_min)}
            tempUnit={weatherCtx.selectedUnit.unit}
          />
        );
      })}
    </Wrapper>
  );
};

export default ForecastSection;
