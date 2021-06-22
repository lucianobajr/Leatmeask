import { ButtonHTMLAttributes } from "react";

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  return <Container {...props} />;
}
