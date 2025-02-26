// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Quicksand", serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }
  h1, h2, h3 {
    color: #333;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
