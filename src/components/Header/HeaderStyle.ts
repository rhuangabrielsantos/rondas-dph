import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 10vh;

  position: fixed;
  top: 0;
  left: 0;
`;

export const Item = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 1rem;
  padding: 0 1rem;

  cursor: pointer;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  color: ${props => props.theme.colors.tertiary};
`;

export const Icon = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled(motion.h1)`
  font-family: "Righteous", sans-serif;
  font-weight: 200;
  font-size: 1.5rem;
`;
