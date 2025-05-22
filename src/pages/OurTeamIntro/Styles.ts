import styled from 'styled-components';
import zimeetLoading from '../../assets/icon/zimeetLoading.svg';

export const OurTeamIntroLayout = styled.div`
    background-color: #FFFFFF;
    top: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-family: Pretendard, sans-serif;
`;

export const OurTeamIntroContainer = styled.div`
    overflow-y: auto;
    height: 72%;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const LoadingContainer = styled.img.attrs({
    src: zimeetLoading
  })`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
    width: 32%;
    margin: 0 auto;
  `;