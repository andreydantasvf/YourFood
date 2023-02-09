import styled from "styled-components";

export const Container = styled.tr`
  > td {
    border-bottom: 2px solid #192227;
    border-right: 2px solid #192227;

    padding: 1.6rem 2.4rem;
    text-align: center;

    &.yellow, &.yellow * {
      color: #fba94c;
    }

    &.green, &.green * {
      color: #04d361;
    }

    &.red, &.red * {
      color: #ab222e;
    }

    select {
      padding: 1.2rem 8.6rem;
      background-color: rgba(255, 255, 255, 0.1);
      border: 1px solid white;
      border-radius: 0.5rem;
      font-family: "Poppins", sans-serif;

      & * {
        background: #1a2328;
      }
    }
  }
`;
