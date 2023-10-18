import React from 'react';
import photo from '../../../assets/images/photo.jpg';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <Greeting>Hi There</Greeting>
                        <Name>I am <span>Dmitriy Isaev</span></Name>
                        <MainTitle>A Front-end Developer.</MainTitle>
                    </div>
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
  
  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${Theme.colors.accent};
    z-index: -1;
    
    position: absolute;
    top: -24px;
    left: 24px;
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`

const MainTitle = styled.h1`
  font-size: 27px;
  font-weight: 400;
`

const Name = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 2.5px;
  margin: 10px 0;
  
  span {
    position: relative;
    z-index: 0;
    
    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${Theme.colors.accent};
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`

const Greeting = styled.span`
  font-size: 14px;
  font-weight: 400;
`
