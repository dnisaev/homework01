import React, {ElementRef, useRef} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import { S } from './Contact_Styles';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {

    const form = useRef<ElementRef<"form">>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if(!form.current) return;

        emailjs.sendForm('service_6s7x30t', 'template_kw1i1fg', form.current, 'TG_B9fQlKoqpwlgRc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <S.Contact id={"contact"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field placeholder={"name"} name={"user_name"} required />
                    <S.Field placeholder={"email"} name={"user_email"} required />
                    <S.Field placeholder={"message"} as={"textarea"} name={"user_message"} required />
                    <Button type={"submit"}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};