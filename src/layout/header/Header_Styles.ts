import styled from "styled-components";
import {portfolioTheme} from "../../styles/PortfolioTheme";

const Header = styled.header`
  background-color: rgba(31, 31, 32, 0.9);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  
  @media ${portfolioTheme.media.mobile} {
    background-color: transparent;
  }
`

export const S = {
    Header,
}