import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.35em;
  gap: 2em;
  background-color: #1e213a;
  color: #fff;
  height: fit-content;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;

  & p {
    text-align: center;
    color: #e7e7eb;
    font-weight: 500;
    margin: 0;
  }

  & img {
    width: 60px;
    height: 65px;
    text-align: center;
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
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
          {now}°{tempUnit}
        </p>
        <p>
          {then}°{tempUnit}
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
