import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Inter; 
    src: url('/fonts/Inter.ttf')
  }
 
  body {
    font-family: Inter, Sans-Serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`
