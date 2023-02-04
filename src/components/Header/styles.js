import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 10.4rem;

  background-color: #00111A;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;
  padding: 0 8rem;

  > div {
    max-width: 50%;
    display: flex;
    align-items: center;
    gap: 3.2rem;
  }

  > div:has(input) {
    border: none;
    background-color: #0D1D25;
  }

  > .linksDishes {
    a {
      width: 21rem;
      height: 5.6rem;
      color: white;
      background-color: #750310;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      font-size: 1.6rem;
    }
  }
`;

export const Exit = styled.button`
  background: none;
  border: none;
  color: #FFF;

  > svg {
    font-size: 3rem;
  }
`;