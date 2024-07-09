import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import ForecastCard from "./components/ForecastCard";
import sleet from "./assets/Sleet.png";
import styled from "styled-components";
import UnitButton from "./components/UnitButton";
import InfoSection from "./components/InfoSection";
import ForecastSection from "./components/ForecastSection";

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
  margin-bottom: 1em;
`;

const buttons = [
  {
    content: "°C",
  },
  {
    content: "°F",
  },
];

function App() {
  const [selectedUnit, setSelectedUnit] = useState("°C");
  const handleSelectUnit = (unit) => {
    setSelectedUnit(unit);
  };
  return (
    <Main>
      <Sidebar />
      <Section>
        <Menu>
          {buttons.map((button) => {
            return (
              <UnitButton
                content={button.content}
                onClick={handleSelectUnit}
                isSelected={selectedUnit === button.content}
              />
            );
          })}
        </Menu>
        <ForecastSection />
        <InfoSection />
      </Section>
    </Main>
  );
}

export default App;
