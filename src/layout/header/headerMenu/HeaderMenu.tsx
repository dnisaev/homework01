import React from 'react';
import styled from "styled-components";
import {PortfolioTheme} from "../../../styles/portfolioTheme";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {
                    props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <Link href={""}>
                                {item}
                                <Mask><span>{item}</span></Mask>
                                <Mask><span>{item}</span></Mask>
                            </Link>
                        </ListItem>
                    })
                }
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`

  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
  
  @media ${PortfolioTheme.media.tablet} {
    display: none;
  }
`

const Link = styled.a`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 30px;
  font-weight: 400;
  text-align: center;
  color: transparent;
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  //outline: 1px solid darkred;
  color: ${PortfolioTheme.colors.accent};
  
  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const ListItem = styled.li`
  position: relative;
  
  &::before {
    content: "";
    display: inline-block;
    height: 1px;
    background-color: ${PortfolioTheme.colors.accent};
    
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    
    transform: scale(0);
  }
  
  &:hover {
    
    &::before {
      transform: scale(1);
    }
    
    ${Mask} {
      transform: skewX(12deg) translateX(3px);
      color: ${PortfolioTheme.colors.font};
      
      & + ${Mask} {
        transform: skewX(12deg) translateX(-3px);
      }
    }
    
    
  }
`