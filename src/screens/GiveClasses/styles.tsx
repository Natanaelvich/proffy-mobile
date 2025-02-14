import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    background: #8257d5;
    flex: 1;
    justify-content: center;
    padding: 40px;
`;
export const Background = styled.ImageBackground.attrs({
    resizeMode: 'contain'
})`
    flex: 1;
    justify-content: center;
`;
export const Banner = styled.Image.attrs({
    resizeMode: 'contain'
})`
    width: 100%;
`;
export const Title = styled.Text`
    color: #fff;
    max-width: 180px;
    font-size: 32px;
    line-height: 37px;
    font-family: Archivo_700Bold;
`;
export const Description = styled.Text`
    margin-top: 24px;
    color: #d4c2ff;
    font-size: 16px;
    line-height: 26px;
    font-family: Poppins_400Regular;
    max-width: 240px;
`;

export const ButtonOk = styled(RectButton)`
    margin: 40px 0;
    background: #04d361;
    height: 58px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`;
export const ButtonText = styled.Text`
    color: #fff;
    font-size: 16px;
    font-family: Archivo_700Bold;
`;
