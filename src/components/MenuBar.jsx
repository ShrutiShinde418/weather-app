import React from "react";
import styled from "styled-components";
import UnitButton from "./UnitButton";
import { buttons } from "../utils/helpers";


const Menu = styled.div`
  display: flex;
  gap: 1em;
  justify-content: end;
  margin-bottom: 1em;
`;

const MenuBar = () => {
  return (
    <Menu>
      {buttons.map((button) => {
        return <UnitButton key={button.content} content={button.content} />;
      })}
    </Menu>
  );
};

export default MenuBar;
