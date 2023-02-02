import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  
  background: transparent;
  border-radius: .5rem;
  border: 1px solid #FFF;
  color: #FFF;

  > input {
    height: 4.8rem;
    width: 100%;

    padding: 1.2rem 1.4rem;

    background: transparent;
    border: none;
    color: #FFF;

    &:placeholder {
      color: #7C7C8A;
    }
  }
`;