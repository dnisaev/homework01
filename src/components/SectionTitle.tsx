import styled from "styled-components";
import {portfolioTheme} from "../styles/PortfolioTheme";

export const SectionTitle = styled.h2`
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 5px;
  margin-bottom: 90px;
  
  position: relative;
  
  &::before {
    content: "";
    display: inline-block;
    height: 1px;
    width: 55px;
    background-color: ${portfolioTheme.colors.accent};
    
    position: absolute;
    left: 50%;
    bottom: -30px;
    transform: translateX(-50%);
  }
`