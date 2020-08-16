import React from 'react';

import { Container, Title } from './styles';
import Pageheader from '../../components/Pageheader';

const Favorites: React.FC = () => {
    return (
        <Container>
            <Pageheader title="Meus Proffys favoritos" />
            <Title>Favorites</Title>
        </Container>
    );
};

export default Favorites;
