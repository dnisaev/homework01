import React from 'react';
import styled, {css} from "styled-components";
import {portfolioTheme} from "../../../styles/PortfolioTheme";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={false}>
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
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`

  display: none;
  
  @media ${portfolioTheme.media.tablet} {
    
    display: block;
  }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(31, 31, 32, 0.9);
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 99999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${portfolioTheme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${portfolioTheme.colors.font};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        color: rgba(255, 255, 255, 0);
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${portfolioTheme.colors.font};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        color: rgba(255, 255, 255, 0);
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}
    }
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
  color: ${portfolioTheme.colors.accent};

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
    background-color: ${portfolioTheme.colors.accent};

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
      color: ${portfolioTheme.colors.font};

      & + ${Mask} {
        transform: skewX(12deg) translateX(-3px);
      }
    }


  }
`