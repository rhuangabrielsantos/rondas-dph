import styled from "styled-components";
import { Collapse } from "react-collapse";

export const Container = styled.div`
  margin: 0.5rem;
`;

export const CollapseBox = styled.div`
  width: 25rem;
  height: auto;
  background-color: ${props => props.theme.colors.tertiary};

  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const CollapseButton = styled.button.attrs((props: any) => ({
  isOpened: props.isOpened,
  finishAnimation: props.finishAnimation,
}))`
  padding: 1rem;
  width: 25rem;
  height: auto;
  background-color: ${props => props.theme.colors.tertiary};
  border-radius: ${props =>
    props.isOpened && props.finishAnimation ? "5px" : "5px 5px 0px 0px"};
  border: none;

  cursor: pointer;

  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
  font-family: "Righteous", sans-serif;
`;

export const CollapseBody = styled(Collapse)``;
