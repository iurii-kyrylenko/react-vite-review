import styled from "styled-components";

const StyledButton = styled.button`
  background-color: white;
  border: none;
  color: #17a2b8;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
  &:active,
  &:focus {
    outline: none;
  }
`;

export { StyledButton };
