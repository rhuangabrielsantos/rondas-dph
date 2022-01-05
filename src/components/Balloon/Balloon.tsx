import { MdCopyAll } from "react-icons/md";

import { Container, Title, CopyContainer } from "./BalloonStyle";

interface BalloonProps {
  title: string;
  onClick?: () => void;
}

export default function Balloon({ title, onClick }: BalloonProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <CopyContainer onClick={onClick}>
        <MdCopyAll />
      </CopyContainer>
    </Container>
  );
}
