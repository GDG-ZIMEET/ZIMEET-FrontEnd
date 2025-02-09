import styled from 'styled-components';

export const OurTeamIntroLayout = styled.div`
    background-color: #FFFFFF;
    top: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

export const OurTeamIntroContainer = styled.div`
    overflow-y: auto;
    height: 72%;
    ::-webkit-scrollbar {
        display: none;
    }
`;