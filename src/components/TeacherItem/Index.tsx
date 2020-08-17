import React from 'react';

import {
    Container,
    Avatar,
    Profile,
    Name,
    ProfileInfo,
    Subject,
    Bio,
    Footer,
    Price,
    PriceValue,
    ButtonsContainer,
    Icon,
    ContactButton,
    ContactButtonText,
    FavoriteButton
} from './styles';

import heartOulineicon from '../../assets/images/icons/heart-outline.png';
import favoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

const TeacherItem: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Avatar
                    source={{
                        uri:
                            'https://avatars3.githubusercontent.com/u/52014318?s=460&u=421a07220feea86f1c77c2fe365573413d010302&v=4'
                    }}
                />

                <ProfileInfo>
                    <Name>Natanael da silva</Name>
                    <Subject>Matematica</Subject>
                </ProfileInfo>
            </Profile>

            <Bio>
                Entusiasta das melhores tecnologias de química avançada.
                Apaixonado por explodir coisas em laboratório e por mudar a vida
                das pessoas através de experiências. Mais de 200.000 pessoas já
                passaram por uma das minhas explosões.
            </Bio>

            <Footer>
                <Price>
                    Preço/hora {'   '}
                    <PriceValue>R$ 20,00</PriceValue>
                </Price>

                <ButtonsContainer>
                    <FavoriteButton favorited>
                        {/* <Icon source={heartOulineicon} /> */}
                        <Icon source={favoriteIcon} />
                    </FavoriteButton>

                    <ContactButton>
                        <Icon source={whatsappIcon} />
                        <ContactButtonText>Entrar em contato</ContactButtonText>
                    </ContactButton>
                </ButtonsContainer>
            </Footer>
        </Container>
    );
};

export default TeacherItem;
