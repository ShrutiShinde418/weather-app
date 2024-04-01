import React from "react";
import shower from "../assets/Shower.png";
import styled from "styled-components";
import "../index.css";

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
`;

const Sidebar = () => {
  return (
    <Navbar>
      <NavbarSearch>
        <button>Search for Places</button>
        <button>Icon</button>
      </NavbarSearch>
      <div>
        <img src={shower} alt="Shower" />
        <p>
          <span>15</span>
          <span>&deg;C</span>
        </p>
        <p>Shower</p>
      </div>
      <div>
        <p>Today</p>
        <p>.</p>
        <p>Fri, 5 Jun</p>
      </div>
      <div>
        <p>Helsinki</p>
      </div>
    </Navbar>
  );
};

export default Sidebar;
