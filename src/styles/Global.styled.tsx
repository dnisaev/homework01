import {createGlobalStyle} from "styled-components";
import {PortfolioTheme} from "./portfolioTheme";

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
    color: ${PortfolioTheme.colors.font};
    line-height: 1.2;
  }
  
  a {
    text-decoration: none;
    color: ${PortfolioTheme.colors.font};
    cursor: pointer;
  }
  
  ul {
    list-style: none;
  }
  
  button {
    background-color: unset;
    border: none;
    cursor: pointer;
    color: ${PortfolioTheme.colors.font};
  }
  
  // Для всех секций
  section {
    padding: 100px 0;
  }
  
  // Для нечетных секций
  section:nth-of-type(odd) {
    background-color: ${PortfolioTheme.colors.primaryBg};
  }
  
  // Для четных секций
  section:nth-of-type(even) {
    background-color: ${PortfolioTheme.colors.secondaryBg};
  }
  
  h3 {
    font-family: Josefin Sans, sans-serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
  }
  
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  }
`