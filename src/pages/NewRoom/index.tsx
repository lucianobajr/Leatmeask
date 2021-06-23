import React, { FormEvent, useState } from "react";

import illustrationImg from "../../assets/illustration.svg";
import logoImg from "../../assets/logo.svg";

import { Container, MainContent } from "./styles";

import Button from "../../components/Button";
import { Link, useHistory } from "react-router-dom";
import { database } from "../../services/firebase";
import { useAuth } from "../../hooks/useAuth";

const NewRoom: React.FC = () => {
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState("");

  const history = useHistory();

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === "") {
      return;
    }

    const roomRef = database.ref("rooms");

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <Container>
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas" />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>
      <main>
        <MainContent>
          <img src={logoImg} alt="Letmeask" />
          <h2>Crie uma nova sala</h2>

          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />
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
