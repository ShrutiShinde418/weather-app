import styled from "styled-components";
import cloudBackground from "../../assets/Cloud-background.png";

export const Navbar = styled.nav`
  min-height: 100vh;
  width: 25%;
  background-color: var(--blue);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NavbarSearch = styled.div`
  display: flex;
  justify-content: space-between;
  width: -webkit-fill-available;
  padding: 2em 0;
  margin: 0 2em;
`;

export const SearchButton = styled.button`
  background-color: #6e707a;
  color: #fff;
  font-family: inherit;
  padding: 0.75em 1em;
  border: none;
  cursor: pointer;
`;

export const GetLocationButton = styled.button`
  background-color: #6e707a;
  color: #fff;
  padding: 0.75em;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`;

export const TemperatureStats = styled.p`
  display: flex;
  align-items: baseline;
  & span:first-of-type {
    color: #fff;
    font-size: 5.5rem;
    font-weight: 500;
  }

  & span:last-of-type {
    color: #e7e7eb;
    font-size: 2rem;
    font-weight: 500;
  }
`;

export const LocationInfo = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
  color: #88869d;
  font-weight: 600;
  font-size: 16px;
  margin: 2em 0;
`;

export const DayInfo = styled.div`
  display: flex;
  color: #88869d;
  font-weight: 500;
  width: -webkit-fill-available;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
  margin-top: 2em;
`;

export const WeatherStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    background: ${cloudBackground};
  }

  & p {
    color: #88869d;
    font-weight: 600;
    font-size: 1.75rem;
    margin-top: 1.5em;
  }
`;
