import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background-color: #01072D;
    color: #fff;
  }

  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`

export default GlobalStyle