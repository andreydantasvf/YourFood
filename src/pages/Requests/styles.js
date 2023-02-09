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

    h2 {
      font-size: 3.2rem;
      margin: 3.4rem 0;
    }

    table {
      width: 100%;
      border: 2px solid #192227;

      th {
        border-bottom: 2px solid #192227;
        border-right: 2px solid #192227;
        padding: 2rem;
      }
    }
  }
`;
