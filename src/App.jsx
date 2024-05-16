import "./App.css";
import Sidebar from "./components/Sidebar";
import ForecastCard from "./components/ForecastCard";
import sleet from "./assets/Sleet.png";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  gap: 4em;
`;

function App() {
  return (
    <Main>
      <Sidebar />
      <ForecastCard
        title="Tomorrow"
        icon={sleet}
        now="16"
        then="11"
        tempUnit="C"
      />
    </Main>
  );
}

export default App;
