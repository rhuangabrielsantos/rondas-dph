import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HabboImage = styled.img`
  width: 7rem;
  height: auto;
`;

export const Title = styled.h1`
  font-size: 4rem;
  text-align: center;

  font-family: "Grenze Gotisch", sans-serif;

  color: ${props => props.theme.colors.tertiary};
`;
