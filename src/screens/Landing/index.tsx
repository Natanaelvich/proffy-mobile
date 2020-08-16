import React from 'react';
import {
    Container,
    Banner,
    Title,
    SubTitle,
    ButtonsContainer,
    ButtonPrimary,
    ButtonSecundary,
    GiveIcon,
    StudyIcon,
    ButtonText,
    TotalConnections,
    TotalConnectionsIcon
} from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClasses from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import { useNavigation } from '@react-navigation/native';

const Landing: React.FC = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <Banner source={landingImg} />

            <Title>Seja bem vindo,</Title>
            <SubTitle>O que deseja fazer?</SubTitle>

            <ButtonsContainer>
                <ButtonPrimary>
                    <ButtonText>Estudar</ButtonText>
                    <StudyIcon source={studyIcon} />
                </ButtonPrimary>
                <ButtonSecundary
                    onPress={() => navigation.navigate('GiveClasses')}
                >
                    <ButtonText>Dar aulas</ButtonText>
                    <GiveIcon source={giveClasses} />
                </ButtonSecundary>
            </ButtonsContainer>

            <TotalConnections>
                Total de 260 conexões já realizadas{' '}
                <TotalConnectionsIcon source={heartIcon} />
            </TotalConnections>
        </Container>
    );
};

export default Landing;
