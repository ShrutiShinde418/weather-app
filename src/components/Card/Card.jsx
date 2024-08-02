import React, { useContext } from "react";
import { CardWrapper, CardHeader } from "./Card.styled";
import { InfoWrapper } from "../InfoSection";
import { WeatherDataContext } from "../store/WeatherContext";
import { degToCompass } from "../utils/helpers";

const Card = ({ fullWidth }) => {
  const weatherCtx = useContext(WeatherDataContext);
  return (
    <CardWrapper $fullWidth>
      <CardHeader>
        <InfoWrapper>
          <p>Wind Status</p>
          <p>
            {weatherCtx?.isLoading
              ? "--"
              : weatherCtx?.selectedUnit.unit === "°F"
              ? weatherCtx?.weatherData?.data?.wind?.speed.toFixed()
              : (
                  weatherCtx?.weatherData?.data?.wind?.speed * 2.23694
                ).toFixed()}
            &nbsp;
            <span>mph</span>
          </p>
        </InfoWrapper>
        <div>
          <p>{degToCompass(weatherCtx?.weatherData?.data?.wind?.deg)}</p>
        </div>
      </CardHeader>
    </CardWrapper>
  );
};

export default Card;
