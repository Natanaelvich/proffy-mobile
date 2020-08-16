import React from 'react';

import {
    Container,
    ButtonGoBack,
    GoBackIcon,
    TopBar,
    Logo,
    Title
} from './styles';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';

interface PageheaderProps {
    title: string;
}

const Pageheader: React.FC<PageheaderProps> = ({ title }) => {
    const { navigate } = useNavigation();
    return (
        <Container>
            <TopBar>
                <ButtonGoBack onPress={() => navigate('Landing')}>
                    <GoBackIcon source={backIcon} />
                </ButtonGoBack>

                <Logo source={logoImg} />
            </TopBar>

            <Title>{title}</Title>
        </Container>
    );
};

export default Pageheader;
