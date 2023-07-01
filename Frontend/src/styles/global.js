import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
  body, html {
    height: 100%;
    background-color: #01072D;
  }
`;
