import React, { useContext } from "react";
import styled from "styled-components";
import ForecastCard from "./ForecastCard";
import sleet from "../assets/Sleet.png";
import clear from "../assets/Clear.png";
import hail from "../assets/Hail.png";
import { WeatherDataContext } from "../store/WeatherContext";

const Wrapper = styled.div`
  display: flex;
  gap: 1.75em;
  margin-bottom: 4.5em;
`;

const ForecastSection = () => {
  const weatherCtx = useContext(WeatherDataContext);
  return (
    <Wrapper>
      <ForecastCard
        title="Tomorrow"
        icon={sleet}
        now="16"
        then="11"
        tempUnit={weatherCtx.selectedUnit.unit}
      />
      <ForecastCard
        title="Tomorrow"
        icon={sleet}
        now="16"
        then="11"
        tempUnit={weatherCtx.selectedUnit.unit}
      />
    </Wrapper>
  );
};

export default ForecastSection;
