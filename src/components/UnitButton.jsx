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

const UnitButton = ({ content, isSelected }) => {
  return <TempUnitBtn isSelected={isSelected}>{content}</TempUnitBtn>;
};

UnitButton.propTypes = {
  content: PropTypes.string,
  isSelected: PropTypes.bool,
};

export default UnitButton;
