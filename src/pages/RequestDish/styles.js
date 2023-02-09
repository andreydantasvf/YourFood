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
    padding: 0 8rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 8rem auto auto;
    grid-template-areas: "backButton BackButton" "request payment" "createDish none";

    .create-dish {
      grid-area: createDish;
      max-width: 50%;
    }
  }
`;

export const Request = styled.section`
  grid-area: request;

  > h2 {
    font-size: 3.2rem;
    margin-bottom: 4.8rem;
  }

  > span {
    font-size: 2rem;
    margin-top: 2rem;
  }
`;

export const Payment = styled.section`
  grid-area: payment;

  > h2 {
    font-size: 3.2rem;
    margin-bottom: 4.8rem;
  }

  > div {
    width: 70%;
    border: 1px solid #FFF;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2 {
      width: 100%;
      padding: 1.4rem 0;
      border-bottom: 1px solid #FFF;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    img {
      padding: 2rem;
    }
  }
`;
