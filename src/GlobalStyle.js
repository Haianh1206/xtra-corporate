import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    background-color: #fff;
    color: #333;
    overflow-x: hidden;
    width: 100%;
  }
    #root {
   width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
