import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`  
  *,
  *::before,
  &::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${Theme.colors.font};
  }
  
  a {
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
  
  button {
    background-color: unset;
    border: none;
  }
  
  // Для нечетных фонов
  section:nth-of-type(odd) {
    background-color: ${Theme.colors.primaryBg};
  }
  
  // Для четных фонов
  section:nth-of-type(even) {
    background-color: ${Theme.colors.secondaryBg};
  }
`