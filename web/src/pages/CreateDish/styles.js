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

export const Form = styled.form`
  width: 100%;
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;

  > h1 {
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.7rem;
    margin-bottom: 3.2rem;
  }

  > .row-1 {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    label[for="image"] {
      max-width: 23rem;
      display: flex;
      flex-direction: column;

      label {
        height: 4.8rem;
        padding: 1.2rem;
        border: 1px solid white;
        border-radius: 0.5rem;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 0.8rem;

        input {
          display: none;
        }
      }
    }

    label {
      width: 100%;
    }

    @media (min-width: 1280px) {
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      gap: 10rem;
    }
  }

  > .row-2 {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-top: 4rem;
    margin-bottom: 3.2rem;

    section {
      width: 100%;

      .ingredients {
        border: 1px solid white;
        border-radius: 0.5rem;
        padding: 0.8rem;

        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 2.4rem;
      }
    }

    label {
      max-width: 23rem;
      width: 100%;
    }

    @media (min-width: 1280px) {
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      gap: 10rem;
    }
  }

  > label[for="description"] {
    textarea {
      width: 100%;
      height: 17rem;

      background: transparent;
      color: white;
      border: 1px solid white;
      resize: none;
      border-radius: 1rem;
      padding: 1.6rem;
    }
  }

  > .buttons {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    margin-top: 2.4rem;
    margin-bottom: 7rem;

    select {
      padding: 1.2rem 1.6rem;
      background-color: rgba(255, 255, 255, 0.1);
      border: 1px solid white;
      border-radius: 0.5rem;
      color: white;
      font-family: "Poppins", sans-serif;

      & * {
        background: #1a2328;
      }

      @media (min-width: 1280px) {
        padding: 1.2rem 8.6rem;
      }
    }

    button {
      background-color: rgba(255, 255, 255, 0.1);
      border: 1px solid white;
      border-radius: 0.5rem;
      padding: 1.2rem 8.6rem;
      color: white;
    }

    @media (min-width: 1280px) {
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      gap: 0;
    }
  }
`;
