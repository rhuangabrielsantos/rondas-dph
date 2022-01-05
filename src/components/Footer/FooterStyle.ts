import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 10vh;

  position: fixed;
  bottom: 0;
  left: 0;

  background-color: ${props => props.theme.colors.primary};
`;

export const Text = styled.h2`
  font-size: 0.9rem;
  font-weight: 300;
  font-family: "Roboto", sans-serif;

  color: ${props => props.theme.colors.secondary};
`;
