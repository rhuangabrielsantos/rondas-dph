import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${props => props.theme.colors.tertiary};
  border: 1px solid ${props => props.theme.colors.tertiary};
  border-radius: 0.5rem;

  padding-left: 1rem;

  margin: 0.3rem 0;
`;

export const Title = styled.h1`
  font-size: 1rem;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
  color: ${props => props.theme.colors.primary};
`;

export const CopyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  padding: 0.5rem;
  border-radius: 0 0.5rem 0.5rem 0;

  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.tertiary};
`;
