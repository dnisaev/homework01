import styled, {css} from "styled-components";
import {portfolioTheme} from "../styles/PortfolioTheme";

export const Link = styled.a<{active?: boolean}>`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 9px 10px;

  position: relative;
  z-index: 0;
  
  &:hover {
    &::before{
      height: 10px;
    }
  }
  
  &::before {
    content: "";
    display: inline-block;
    
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    background-color: ${portfolioTheme.colors.accent};
    z-index: -1;
    
    ${props => props.active === true && css<{active?: boolean}>`
      height: 10px;
    `}
  }
`