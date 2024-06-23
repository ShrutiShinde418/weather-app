import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import ForecastCard from "./components/ForecastCard";
import sleet from "./assets/Sleet.png";
import styled from "styled-components";
import UnitButton from "./components/UnitButton";
import InfoSection from "./components/InfoSection";

const Main = styled.div`
  display: flex;
  gap: 4em;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 2em;
`;

const Menu = styled.div`
  display: flex;
  gap: 1em;
  justify-content: end;
`;

function App() {
  return (
    <Main>
      <Sidebar />
      <Section>
        <Menu>
          <UnitButton content="°C" isSelected={true} />
          <UnitButton content="°F" />
        </Menu>
        <ForecastCard
          title="Tomorrow"
          icon={sleet}
          now="16"
          then="11"
          tempUnit="C"
        />
        <InfoSection />
      </Section>
    </Main>
  );
}

export default App;
