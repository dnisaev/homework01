import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {portfolioTheme} from "../../../../styles/PortfolioTheme";

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                    <Icon iconId={props.iconId}/>
                </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 330px;
  flex-grow: 1;
  padding: 42px 20px 52px;
  
  @media ${portfolioTheme.media.mobile} {
    padding: 62px 0 40px;
  }
`
const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`
const SkillText = styled.p`
  font-family: Poppins, sans-serif;
  text-align: center;
`

export const IconWrapper = styled.div`
  position: relative;
  
  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    background-color: rgba(255,255,255,0.1);
    
    position: absolute;
    transform: rotate(45deg) translateX(-25%);
  }
`