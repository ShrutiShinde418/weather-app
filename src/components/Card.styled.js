import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.35em;
  gap: 2em;
  background-color: #1e213a;
  color: #fff;
  height: fit-content;
  width: fit-content;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;

  & p {
    text-align: center;
    color: #e7e7eb;
    font-weight: 500;
    margin: 0;
  }

  & img {
    width: 60px;
    height: 65px;
    text-align: center;
  }
`;