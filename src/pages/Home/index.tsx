import React from "react";

import illustrationImg from "../../assets/illustration.svg";
import logoImg from "../../assets/logo.svg";
import googleIconImg from "../../assets/google-icon.svg";

import { Container, MainContent, Separator, CreateRoom } from "./styles";

import { Button } from "../../components";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks/useAuth";

const Home: React.FC = () => {
  const history = useHistory();

  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("rooms/new");
  }

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
          <CreateRoom onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </CreateRoom>
          <Separator>ou entre em uma sala</Separator>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </MainContent>
      </main>
    </Container>
  );
};

export default Home;
