import styled from "styled-components";
import {portfolioTheme} from "../../styles/PortfolioTheme";

const Slider = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  //border: 1px solid red;
`

const Slide = styled.div`
  text-align: center;
`

const Text = styled.p``

const Name = styled.span`
  font-family: Josefin Sans, sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 22px 0 32px;
  display: inline-block;
`

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    
    & + span {
      margin-left: 5px;
    }
    
    &.active {
      background-color: ${portfolioTheme.colors.accent};
      width: 20px;
    }
  }
`

export const S = {
    Slider,
    Slide,
    Name,
    Pagination,
    Text
}