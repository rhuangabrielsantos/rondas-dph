import { ButtonContainer } from "./ButtonStyle";
import { IButtonProps } from "./ButtonInterface";

export default function Button({ enabled, text, onClick }: IButtonProps) {
  return (
    <ButtonContainer enabled={enabled} onClick={enabled ? onClick : () => {}}>
      {text}
    </ButtonContainer>
  );
}
