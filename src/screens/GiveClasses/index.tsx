import React from 'react';

import {
    Container,
    Background,
    Title,
    Description,
    ButtonOk,
    ButtonText
} from './styles';

import giveClassesbgImage from '../../assets/images/give-classes-background.png';
import { useNavigation } from '@react-navigation/native';

const GiveClasses: React.FC = () => {
    const { goBack } = useNavigation();
    return (
        <Container>
            <Background source={giveClassesbgImage}>
                <Title>Quer ser um Proffy?</Title>

                <Description>
                    PPara começar, você precisa se cadastrar como professor na
                    nossa plataforma web.
                </Description>
            </Background>

            <ButtonOk onPress={goBack}>
                <ButtonText>Tudo bem</ButtonText>
            </ButtonOk>
        </Container>
    );
};

export default GiveClasses;
