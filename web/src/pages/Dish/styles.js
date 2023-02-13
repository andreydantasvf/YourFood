import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.4rem auto 10.4rem;
  grid-template-areas: "header" "content" "footer";

  > main {
    height: 100%;
    grid-area: content;
    margin-top: 3.2rem;
    padding: 0 2rem;

    @media (min-width: 1280px) {
      padding: 0 8rem;
    }
  }
`;

export const Content = styled.div`
  margin-top: 4.1rem;

  display: flex;
  flex-direction: column;
  gap: 10rem;

  > img {
    width: 20rem;
    height: 20rem;

    border-radius: 50%;
  }

  > div {
    h1 {
      font-size: 3rem;
      font-weight: 500;
      margin-bottom: 0.8rem;
    }

    p {
      font-size: 1.6rem;
      font-weight: 400;
      margin-bottom: 3.2rem;

      word-wrap: break-word;
    }

    .ingredients {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 2.1rem;
      margin-bottom: 4.7rem;
    }

    .buttons {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 7rem;

      span {
        font-size: 3.2rem;
        color: #82f3ff;
      }

      button {
        width: 15rem;
        border: none;
      }

      .include {
        display: flex;
        align-items: center;
        font-size: 2.5rem;

        .handle {
          background: none;
          width: fit-content;
          color: #fff;
          font-size: 2rem;
          margin-right: 1.7rem;
        }

        .handle:nth-child(2) {
          margin-left: 1.7rem;
        }
      }
    }
  }

  @media (min-width: 1280px) {
    flex-direction: row;

    > img {
      width: 38.9rem;
      height: 38.9rem;
    }

    > div {
      h1 {
        font-size: 4rem;
      }

      p {
        font-size: 2.4rem;
      }

      .buttons {
        flex-direction: row;
      }
    }
  }
`;
