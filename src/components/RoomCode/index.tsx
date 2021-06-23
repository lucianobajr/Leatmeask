import React from "react";

import { Container } from "./styles";

import copyImg from "../../assets/copy.svg";

type RoomCodeProps = {
  code: string;
};

export default function RoomCode(props: RoomCodeProps) {
  function copy() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <Container onClick={copy}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </Container>
  );
}
