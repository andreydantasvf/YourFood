import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;

  height: 10.4rem;

  background-color: #00111a;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;

  > h2 {
    color: rgba(255, 255, 255, 0.3);
  }

  > span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (min-width: 1280px) {
    padding: 0 8rem;
  }
`;
