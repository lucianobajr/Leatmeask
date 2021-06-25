import { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export default function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <Container
      className={`${isOutlined ? "outlined" : ""}`}
      {...isOutlined}
      {...props}
    />
  );
}
