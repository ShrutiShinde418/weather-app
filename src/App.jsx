import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import styled from "styled-components";
import InfoSection from "./components/InfoSection";
import ForecastSection from "./components/ForecastSection";
import MenuBar from "./components/MenuBar";

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

function App() {
  return (
    <Main>
      <Sidebar />
      <Section>
        <MenuBar />
        <ForecastSection />
        <InfoSection />
      </Section>
    </Main>
  );
}

export default App;
