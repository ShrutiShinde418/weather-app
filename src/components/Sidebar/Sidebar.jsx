import {
  DayInfo,
  GetLocationButton,
  LocationInfo,
  Navbar,
  NavbarSearch,
  SearchButton,
  TemperatureStats,
  WeatherStats,
} from "./Sidebar.styled";
import shower from "../../assets/Shower.png";
import "../../index.css";

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
        <span className="material-symbols-outlined">location_on</span>
        <p>Helsinki</p>
      </LocationInfo>
    </Navbar>
  );
};

export default Sidebar;
