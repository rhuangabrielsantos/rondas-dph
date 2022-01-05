import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;

  margin: 5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 300;

  padding-left: 1rem;

  &:last-child {
    padding-bottom: 1rem;
  }

  &:hover {
    color: ${props => props.theme.colors.link};
  }

  transition: color 0.2s;

  > svg {
    margin-right: 0.3rem;
  }
`;
