import styled from "styled-components";

export const Input = styled.input`
  width: 400px;
  height: 64px;
  border-radius: 12px;

  background: ${props => props.theme.colors.tertiary};
  border: 1px solid #c2c5c9;
  border-radius: 12px;

  padding: 1rem;

  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1.1875rem;
  line-height: 100%;

  transition: all 0.1s linear;
  -webkit-transition: all 0.1s linear;
  -moz-transition: all 0.1s linear;
  -webkit-appearance: none;
`;
