import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  flex-direction: column;

  @media(min-width: 1280px) {
    gap: 32rem;
    flex-direction: row;
  }
`;

export const Form = styled.form`
  max-width: 47rem;
  width: 90%;
  padding: 6.4rem 3.2rem;
  background: #001119;
  border-radius: 1.6rem;

  > h2 {
    text-align: center;
    margin-bottom: 3.2rem;
  }

  > div {
    margin-bottom: 3.2rem;
    width: auto;
  }

  > a {
    display: block;
    margin-top: 3.2rem;
    color: #FFF;
    text-align: center;
  }

  @media(min-width: 1280px) {
    width: 100%;
  }
`;