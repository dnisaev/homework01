import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {portfolioTheme} from "../../../styles/PortfolioTheme";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <Field placeholder={"name"}/>
                    <Field placeholder={"email"}/>
                    <Field placeholder={"message"} as={"textarea"}/>
                    <Button type={"submit"}>Send message</Button>
                </StyledForm>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section``

const StyledForm = styled.form`
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