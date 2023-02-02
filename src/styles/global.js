import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color:  #000A0F;
    color: hsla(0, 0%, 100%, 1); 

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }
  
  button:hover, a:hover {
    filter: brightness(.9);
  }
`;