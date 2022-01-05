import { useState } from "react";

import {
  Container,
  CollapseBox,
  CollapseButton,
  CollapseBody,
} from "./CollapseStyle";

interface CollapseProps {
  isOpened: boolean;
  onClick: () => void;
  children: React.ReactNode;
  titleButton: string;
}

export default function Collapse({
  isOpened,
  onClick,
  children,
  titleButton,
}: CollapseProps) {
  const [finishAnimation, setFinishAnimation] = useState(false);

  return (
    <Container>
      <CollapseBox>
        <CollapseButton
          onClick={onClick}
          isOpened={!isOpened}
          finishAnimation={finishAnimation}
        >
          {titleButton}
        </CollapseButton>
      </CollapseBox>
      <CollapseBody
        isOpened={isOpened}
        onRest={() => {
          setFinishAnimation(true);
        }}
        onWork={() => {
          setFinishAnimation(false);
        }}
      >
        {children}
      </CollapseBody>
    </Container>
  );
}
