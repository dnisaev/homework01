import styled from "styled-components";
import {portfolioTheme} from "../../../styles/PortfolioTheme";


const Contact = styled.section`
  position: relative`

const Form = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
  align-items: center;

  textarea {
    resize: none;
    height: 155px;
  }
`

const Field = styled.input`
  width: 100%;
  background-color: ${portfolioTheme.colors.secondaryBg};
  border: 1px solid ${portfolioTheme.colors.border};
  padding: 7px 15px;

  font-family: Poppins, sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.6px;

  color: ${portfolioTheme.colors.font};

  &::placeholder {
    color: ${portfolioTheme.colors.placeholder};
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid ${portfolioTheme.colors.placeholder};
  }
`

export const S = {
    Contact,
    Form,
    Field
}