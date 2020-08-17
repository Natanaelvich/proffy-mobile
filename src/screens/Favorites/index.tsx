import React from 'react';

import { Container, List } from './styles';
import Pageheader from '../../components/Pageheader';
import TeacherItem from '../../components/TeacherItem/Index';

const Favorites: React.FC = () => {
    return (
        <Container>
            <Pageheader title="Meus Proffys favoritos" />
            <List>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </List>
        </Container>
    );
};

export default Favorites;
