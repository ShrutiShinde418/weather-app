import React from "react";
import styled from "styled-components";
import ForecastCard from "./ForecastCard";
import sleet from "../assets/Sleet.png";
import clear from "../assets/Clear.png";
import hail from "../assets/Hail.png";

const Wrapper = styled.div`
  display: flex;
  gap: 1.75em;
  margin-bottom: 4.5em;
`;

const ForecastSection = () => {
  return (
    <Wrapper>
      <ForecastCard
        title="Tomorrow"
        icon={sleet}
        now="16"
        then="11"
        tempUnit="C"
      />
      <ForecastCard
        title="Tomorrow"
        icon={sleet}
        now="16"
        then="11"
        tempUnit="C"
      />
    </Wrapper>
  );
};

export default ForecastSection;
