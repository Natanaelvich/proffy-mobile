import React from 'react';

import { Container, List } from './styles';
import Pageheader from '../../components/Pageheader';
import TeacherItem from '../../components/TeacherItem/Index';

const TeacherList: React.FC = () => {
    return (
        <Container>
            <Pageheader title="Proffys disponíveis" />

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

export default TeacherList;
