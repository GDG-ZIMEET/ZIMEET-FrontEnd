import styled from 'styled-components';

export const TeamIntroLayout = styled.div`
    background-color: #FFFFFF;
    top: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const TeamIntroContainer = styled.div`
    overflow-y: auto;
    height: 72%;
    ::-webkit-scrollbar {
        display: none;
    }
`;