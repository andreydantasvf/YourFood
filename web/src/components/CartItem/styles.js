import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.6rem;

  > img {
    width: 7.2rem;
    height: 7.2rem;
    border-radius: 50%;
  }

  > div {
    h2 {
      font-size: 2rem;
      font-weight: 500;
      line-height: 160%;

      span {
        font-size: 1.2rem;
        font-weight: 400;
        color: #c4c4cc;
      }
    }

    button {
      background: none;
      border: none;
      color: #AB4D55;
    }
  }
`;
