import React, { useContext } from "react";
import styled from "styled-components";
import { Card, CardHeader } from "./Card.styled";
import { WeatherDataContext } from "../store/WeatherContext";

const HighlightsText = styled.p`
  font-weight: 700;
  font-size: 24px;
  font-family: inherit;
  color: #e7e7eb;
`;

const HighlightsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15em;
  & p:last-of-type {
    font-weight: 700;
    font-size: 64px;
    & span {
      font-weight: 500;
      font-size: 36px;
    }
  }
`;

const InfoSection = () => {
  const weatherCtx = useContext(WeatherDataContext);
  return (
    <section>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <HighlightsText>Today's Highlights</HighlightsText>;
      <HighlightsWrapper>
        <Card fullWidth>
          <CardHeader>
            <InfoWrapper>
              <p>Wind Status</p>
              <p>
                {(
                  weatherCtx?.weatherData?.data?.wind?.speed * 2.23694
                ).toFixed()}&nbsp;
                <span>mph</span>
              </p>
            </InfoWrapper>
            <div>
              <p>WSW</p>
            </div>
          </CardHeader>
        </Card>
        <Card fullWidth>
          <CardHeader>
            <InfoWrapper>
              <p>Humidity</p>
              <p>
                {weatherCtx?.weatherData?.data?.main?.humidity} <span>%</span>
              </p>
            </InfoWrapper>
          </CardHeader>
        </Card>
        <Card fullWidth>
          <CardHeader>
            <InfoWrapper>
              <p>Visibility</p>
              <p>
                {(weatherCtx?.weatherData?.data?.visibility * 0.000621).toFixed(
                  1
                )}
                &nbsp;
                <span>miles</span>
              </p>
            </InfoWrapper>
          </CardHeader>
        </Card>
        <Card fullWidth>
          <CardHeader>
            <InfoWrapper>
              <p>Air Pressure</p>
              <p>
                {weatherCtx?.weatherData?.data?.main?.pressure} <span>mb</span>
              </p>
            </InfoWrapper>
          </CardHeader>
        </Card>
      </HighlightsWrapper>
    </section>
  );
};

export default InfoSection;
