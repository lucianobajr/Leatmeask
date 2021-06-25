import React from "react";

import { Container, Header, Main, QuestionList } from "./styles";

import logoImg from "../../assets/logo.svg";
import deleteImg from "../../assets/delete.svg";

import { Button, Question, RoomCode } from "../../components";
import { useHistory, useParams } from "react-router";
import { useRoom } from "../../hooks/useRoom";
import { database } from "../../services/firebase";

type RoomParams = { id: string };

const Admin: React.FC = () => {
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const history = useHistory();

  const { title, questions } = useRoom(roomId);

  async function handleEndRoom() {
    await database.ref(`/rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push('/');
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que você deseja excluir esta pergunta?")) {
      await database.ref(`/rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  return (
    <Container>
      <Header>
        <div className="content">
          <img src={logoImg} alt="Logo Leatmeask" />
          <div className="buttons">
            <RoomCode code={roomId} />
            <Button isOutlined={true} onClick={handleEndRoom}>
              Encerrar sala
            </Button>
          </div>
        </div>
      </Header>

      <Main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <QuestionList>
          {questions.map((question) => (
            <Question key={question.id} {...question}>
              <button
                type="button"
                onClick={() => handleDeleteQuestion(question.id)}
              >
                <img src={deleteImg} alt="Remover Pergunta" />
              </button>
            </Question>
          ))}
        </QuestionList>
      </Main>
    </Container>
  );
};

export default Admin;
