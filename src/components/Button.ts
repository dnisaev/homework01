import styled from "styled-components";
import {portfolioTheme} from "../styles/PortfolioTheme";

export const Button = styled.button`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 170px;
  height: 32px;
  position: relative;
  z-index: 0;
  
  &:hover{
    &::before {
      width: 100%;
      height: 100%;
    }
  }
  
  &::before {
    content: "";
    display: inline-block;
    height: 10px;
    width: 50%;
    background-color: ${portfolioTheme.colors.accent};
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: -1;
    transform: translateX(-50%);
    transition: ${portfolioTheme.animations.transition};
  }
`