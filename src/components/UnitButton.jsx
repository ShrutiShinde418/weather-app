import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TempUnitBtn = styled.button`
  border-radius: 50%;
  border: none;
  font-weight: 700;
  font-size: 18px;
  height: 40px;
  width: 40px;
  font-family: inherit;
  background-color: ${(props) => (props.isSelected ? "#E7E7EB" : "#585676")};
  color: ${(props) => (props.isSelected ? "#110E3C" : "#E7E7EB")};
  cursor: pointer;
`;

const UnitButton = ({ content, isSelected, onClick }) => {
  return (
    <TempUnitBtn
      isSelected={isSelected}
      onClick={() => onClick(content)}
      type="button"
    >
      {content}
    </TempUnitBtn>
  );
};

UnitButton.propTypes = {
  content: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default UnitButton;
