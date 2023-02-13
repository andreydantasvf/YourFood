import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;

  background-color: hsla(354, 100%, 29%, 1);
  color: #FFF;

  border: none;
  padding: 1.2rem 3.2rem;
  border-radius: .5rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &:disabled {
    opacity: 0.5;
  }
`;