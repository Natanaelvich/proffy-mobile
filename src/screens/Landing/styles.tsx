import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    background: #8257d5;
    flex: 1;
    justify-content: center;
    padding: 40px;
`;
export const Banner = styled.Image.attrs({
    resizeMode: 'contain'
})`
    width: 100%;
`;
export const Title = styled.Text`
    color: #fff;
    font-size: 20px;
    line-height: 30px;
    margin-top: 80px;
    font-family: Poppins_400Regular;
`;
export const SubTitle = styled(Title)`
    margin-top: 0;
    font-family: Archivo_700Bold;
`;

export const ButtonsContainer = styled.View`
    flex-direction: row;
    margin-top: 40px;
    justify-content: space-between;
`;
export const Button = styled(RectButton)`
    height: 150px;
    width: 48%;
    border-radius: 8px;
    padding: 24px;
    justify-content: space-between;
`;
export const ButtonText = styled.Text`
    font-family: Archivo_700Bold;
    color: #fff;
    font-size: 20px;
`;
export const ButtonPrimary = styled(Button)`
    background: #9871f5;
`;
export const ButtonSecundary = styled(Button)`
    background: #04d361;
`;
export const StudyIcon = styled.Image``;
export const GiveIcon = styled.Image``;
export const TotalConnections = styled.Text`
    font-family: Poppins_400Regular;
    color: #d4c2ff;
    font-size: 12px;
    line-height: 20px;
    max-width: 140px;
    margin-top: 40px;
`;
export const TotalConnectionsIcon = styled.Image``;
