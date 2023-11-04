import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {portfolioTheme} from "../../../styles/PortfolioTheme";
import {Link} from "../../../components/Link";
import {Button} from "../../../components/Button";

const Works = styled.section`
  position: relative;
  ${FlexWrapper} {
    gap: 30px;
  }
`

const Work = styled.div`
  background-color: ${portfolioTheme.colors.secondaryBg};
  width: 330px;
  flex-grow: 1;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }
  
  @media ${portfolioTheme.media.desktop} {
    max-width: 540px;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  
  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-40%);
    transition: ${portfolioTheme.animations.transition};

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(2px);
    opacity: 0;
    transition: ${portfolioTheme.animations.transition};
  }
  
  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
      transform: translateX(-50%) translateY(-50%);
    }
  }

  @media ${portfolioTheme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Description = styled.div`
  padding: 25px 20px;
`

const Title = styled.h3``

const Text = styled.p`
  margin: 14px 0 10px;
`

export const S = {
    Works,
    Work,
    ImageWrapper,
    Image,
    Description,
    Title,
    Text
}