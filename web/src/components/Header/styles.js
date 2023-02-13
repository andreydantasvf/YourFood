import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  grid-area: header;

  position: fixed;
  z-index: 1;

  height: 10.4rem;

  background-color: #00111a;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;
  padding: 0 3rem;

  > div {
    max-width: 50%;
    display: flex;
    align-items: center;
    gap: 3.2rem;

    a {
      display: none;
    }
  }

  > div:has(input) {
    border: none;
    background-color: #0d1d25;

    display: none;
  }

  > .linksDishes {
    display: none;
    a {
      width: 21rem;
      height: 5.6rem;
      color: white;
      background-color: #750310;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      font-size: 1.6rem;
    }
  }

  @media (min-width: 1280px) {
    width: auto;
    position: initial;
    padding: 0 8rem;
    
    > div {
      a {
        display: inline-block;
      }
    }

    > div:has(input) {
      display: flex;
    }

    > .linksDishes {
      display: flex;
    }
  }
`;

export const Exit = styled.button`
  background: none;
  border: none;
  color: #fff;

  display: flex;
  align-items: center;
  gap: 1rem;

  > svg {
    font-size: 3rem;
  }
`;

export const Hamburger = styled.div`
  > button {
    background: none;
    border: none;
    font-size: 3rem;
    color: #fff;

    position: absolute;
    right: 20%;
    z-index: 1;
  }

  > nav {
    width: 100%;
    padding: 4rem 3rem 4rem;
    background-color: #00111a;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    position: fixed;
    left: 0;
    top: 0;

    a {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }

  @media (min-width: 1280px) {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;

    > button {
      display: none;
    }
  }
`;
