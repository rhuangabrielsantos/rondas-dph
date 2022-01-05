import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 2rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 30rem;
  height: 15rem;

  border-radius: 0.8rem;

  background-color: ${props => props.theme.colors.tertiary};
`;

export const Image = styled.img`
  width: 4rem;
  height: auto;

  margin: 0 2rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  color: ${props => props.theme.colors.tertiary};
  font-family: "Grenze Gotisch", sans-serif;
`;
