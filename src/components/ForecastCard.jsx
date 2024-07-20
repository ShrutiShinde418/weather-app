import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Card, CardHeader } from "./Card.styled";

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  & p:last-of-type {
    text-align: center;
    color: #a09fb1;
    font-weight: 500;
    margin: 0;
  }
`;

const ForecastCard = ({ title, icon, now, then, tempUnit }) => {
  return (
    <Card>
      <CardHeader>
        <p>{title}</p>
        <img src={icon} alt="title" />
      </CardHeader>
      <CardFooter>
        <p>
          {now}
          {tempUnit}
        </p>
        <p>
          {then}
          {tempUnit}
        </p>
      </CardFooter>
    </Card>
  );
};

ForecastCard.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  now: PropTypes.string,
  then: PropTypes.string,
  tempUnit: PropTypes.string,
};

export default ForecastCard;
