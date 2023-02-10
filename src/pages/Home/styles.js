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

export const Banner = styled.div`
  display: none;

  margin-top: 16.4rem;
  width: 100%;
  height: 26rem;
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);

  position: relative;

  > img {
    position: absolute;
    left: -6rem;
    bottom: 0;
  }

  > .content {
    padding: 0 4.6rem;

    h2 {
      font-size: 4rem;
      line-height: 140%;
    }

    span {
      font-size: 1.6rem;
    }
  }

  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content: end;
  }
`;
