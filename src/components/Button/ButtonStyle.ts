import styled from "styled-components";

export const ButtonContainer = styled.button<{ enabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ enabled }) => (enabled ? "#e95814" : "#F08A5B")};
  color: #ffffff;

  width: 400px;
  height: 64px;
  border: 0;
  border-radius: 12px;
  padding: 24px, 48px, 24px, 48px;

  margin-top: 13px;

  font-size: 1rem;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: "-0.02em";
  text-align: center;
`;
