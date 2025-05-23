import styled from 'styled-components';

export const TeamIntroLayout = styled.div`
    background-color: #FFFFFF;
    top: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: Pretendard, sans-serif;
`;

export const TeamIntroContainer = styled.div<{ $isPremium: boolean }>`
    overflow-y: auto;
    height: ${({ $isPremium }) => ($isPremium ? '72%' : '63%')};
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const ButtonWrapper = styled.div`
    width: 85%;
    height: 6.5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    margin-top: 3%;
    margin-bottom: 5%;
    position: absolute;  
    bottom: 11%;
    left: 7.5%;
`;

export const RefuseButton = styled.button`
    width: 32%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F5F5F5;
    color: #A6A6A6;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 700;
`;

export const Button = styled.button`
    width: 66%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EA4335;
    color: #FFFFFF;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 700;
`;