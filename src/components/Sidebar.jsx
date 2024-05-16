import shower from "../assets/Shower.png";
import styled from "styled-components";
import "../index.css";
import cloudBackground from "../assets/Cloud-background.png";

const Navbar = styled.nav`
  min-height: 100vh;
  width: 25%;
  background-color: var(--blue);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavbarSearch = styled.div`
  display: flex;
  justify-content: space-between;
  width: -webkit-fill-available;
  padding: 2em 0;
  margin: 0 2em;
`;

const SearchButton = styled.button`
  background-color: #6e707a;
  color: #fff;
  font-family: inherit;
  padding: 0.75em 1em;
  border: none;
`;

const GetLocationButton = styled.button`
  background-color: #6e707a;
  color: #fff;
  padding: 0.75em;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const TemperatureStats = styled.p`
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

const LocationInfo = styled.div`
  display: flex;
  color: #88869d;
  font-weight: 600;
  font-size: 16px;
`;

const DayInfo = styled.div`
  display: flex;
  color: #88869d;
  font-weight: 500;
  width: -webkit-fill-available;
  justify-content: center;
  gap: 1.5em;
`;

const WeatherStats = styled.div`
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
  }
`;

const Sidebar = () => {
  return (
    <Navbar>
      <NavbarSearch>
        <SearchButton>Search for Places</SearchButton>
        <GetLocationButton>
          <span className="material-symbols-outlined">my_location</span>
        </GetLocationButton>
      </NavbarSearch>
      <WeatherStats>
        <img src={shower} alt="Shower" />
        <TemperatureStats>
          <span>15</span>
          <span>&deg;C</span>
        </TemperatureStats>
        <p>Shower</p>
      </WeatherStats>
      <DayInfo>
        <p>Today</p>
        <p>.</p>
        <p>Fri, 5 Jun</p>
      </DayInfo>
      <LocationInfo>
        <p>Helsinki</p>
      </LocationInfo>
    </Navbar>
  );
};

export default Sidebar;
