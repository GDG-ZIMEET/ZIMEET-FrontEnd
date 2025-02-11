import styled from 'styled-components';

export const TeamIntroLayout = styled.div`
    background-color: #FFFFFF;
    top: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const TeamIntroContainer = styled.div<{ $isPremium: boolean }>`
    overflow-y: auto;
    height: ${({ $isPremium }) => ($isPremium ? '72%' : '63%')};
    ::-webkit-scrollbar {
        display: none;
    }
`;