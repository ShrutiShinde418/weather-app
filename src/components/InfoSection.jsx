import styled from "styled-components";
import { Card, CardHeader } from "./Card.styled";

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

const InfoSection = () => {
  return (
    <section>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <HighlightsText>Today's Highlights</HighlightsText>;
      <HighlightsWrapper>
        <Card>
          <CardHeader>
            <p>Wind Status</p>
            <p>7 mph</p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <p>Humidity</p>
            <p>84%</p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <p>Visibility</p>
            <p>6.8 miles</p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <p>Air Pressure</p>
            <p>998 mb</p>
          </CardHeader>
        </Card>
      </HighlightsWrapper>
    </section>
  );
};

export default InfoSection;
