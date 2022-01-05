import styled from "styled-components";

export const Container = styled.div`
  margin: 5rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  font-family: "Grenze Gotisch", sans-serif;
  color: ${props => props.theme.colors.tertiary};
`;

export const SubTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
  color: ${props => props.theme.colors.tertiary};
`;
