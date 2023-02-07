import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin-top: 4.8rem;
  margin-bottom: 4.2rem;

  > h2 {
    font-weight: 500;
    font-size: 3.2rem;
    margin-bottom: 3.9rem;
  }

  > .dishes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
  }
`;
