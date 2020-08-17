import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #f0f0f7;
`;
export const List = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingHorizontal: 16,
        paddingBottom: 24
    }
})`
    margin-top: -60px;
`;
