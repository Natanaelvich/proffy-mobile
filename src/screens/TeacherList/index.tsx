import React from 'react';

import { Container, Title } from './styles';
import Pageheader from '../../components/Pageheader';

const TeacherList: React.FC = () => {
    return (
        <Container>
            <Pageheader title="Proffys disponíveis" />
            <Title>Teacher</Title>
        </Container>
    );
};

export default TeacherList;
