import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const Logo: React.FC = () => {
    return (
        <StyledLogo>
            <Icon iconId={"code"}/>
        </StyledLogo>
    );
};

const StyledLogo = styled.a``