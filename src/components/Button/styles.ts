import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: #835afd;
  color: #fff;
  padding: 0 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  img {
    margin-right: 8px;
  }

  transition: all 0.3s ease-in-out 0s;
  &:not(:disabled):hover {
    background: ${darken(0.1, "#835afd")};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &.outlined {
    background: #fff;
    border: 1px solid #835afd;
    color: #835afd;
    &:hover {
      background: ${darken(0.1, "#fff")};
    }
  }
`;
