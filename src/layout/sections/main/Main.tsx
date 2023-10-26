import React from 'react';
import photo from '../../../assets/images/photo.jpg';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {portfolioTheme} from "../../../styles/PortfolioTheme";
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <MainText>
                        <Greeting>Hi There</Greeting>
                        <Name>I am <span>Dmitriy Isaev</span></Name>
                        <MainTitle>A Front-end Developer.</MainTitle>
                    </MainText>
                    <PhotoWrapper>
                        <Photo src={photo} alt={""}/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  display: flex;
  min-height: 100vh;
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  margin-top: 65px;

  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${portfolioTheme.colors.accent};
    z-index: -1;

    position: absolute;
    top: -24px;
    left: 24px;

    @media ${portfolioTheme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -17px;
      left: 20px;
    }
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;

  @media ${portfolioTheme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`

const MainTitle = styled.h1`
  ${font({weight: 400, fMax: 27, fMin: 20})}
`

const Name = styled.h2`
  ${font({family: "'Josefin Sans', sans-serif", weight: 700, fMax: 50, fMin: 36})}
  letter-spacing: 2.5px;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;

    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${portfolioTheme.colors.accent};
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }

  @media ${portfolioTheme.media.mobile} {

    margin: 15px 0 22px;
  }
`

const Greeting = styled.span`
  font-size: 14px;
  font-weight: 400;
`
const MainText = styled.div`
  @media ${portfolioTheme.media.mobile} {
    margin-top: 3%;
  }
`
