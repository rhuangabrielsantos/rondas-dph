import React from "react";

export interface IButtonProps {
  style?: React.CSSProperties;
  enabled: boolean;
  text: string;
  onClick: () => void;
}
