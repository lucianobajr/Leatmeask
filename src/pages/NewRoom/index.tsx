import React from "react";

import illustrationImg from "../../assets/illustration.svg";
import logoImg from "../../assets/logo.svg";

import { Container, MainContent } from "./styles";

import Button from "../../components/Button";
import { Link } from "react-router-dom";

const NewRoom: React.FC = () => {
  return (
    <Container>
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <MainContent>
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>

          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique Aqui</Link>
          </p>
        </MainContent>
      </main>
    </Container>
  );
};

export default NewRoom;
