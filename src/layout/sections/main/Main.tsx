import React, {useState} from 'react';
import photo from '../../../assets/images/photo.jpg';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import { S } from './Main_Styles';

export const Main: React.FC = () => {

    const greetings = {
        first: "Hi There",
        second: "Hello my dear friend"
    };

    const [greeting, setGreeting] = useState(greetings.first);
    const changeGreeting = () => setGreeting(greetings.second);
    const changeGreetingBack = () => setGreeting(greetings.first);
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <S.MainText>
                        <S.Greeting>{greeting}</S.Greeting>
                        <S.Name>I am <span>Dmitriy Isaev</span></S.Name>
                        <S.MainTitle>A Front-end Developer.</S.MainTitle>
                    </S.MainText>
                    <S.PhotoWrapper>
                        <S.Photo onClick={changeGreeting} onDoubleClick={changeGreetingBack} src={photo} alt={""}/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};