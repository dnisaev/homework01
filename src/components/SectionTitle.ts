import styled from "styled-components";
import {portfolioTheme} from "../styles/PortfolioTheme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2`
  ${font({
    family: "'Josefin Sans', sans-serif",
    weight: 600,
    fMax: 36,
    fMin: 30,
  })}
  
  text-align: center;
  letter-spacing: 5px;
  margin-bottom: 90px;  
  position: relative;
  
  @media ${portfolioTheme.media.mobile} {
    margin-bottom: 50px;
  }
  
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
    
    @media ${portfolioTheme.media.mobile} {
      bottom: -24px;
    }
  }
`