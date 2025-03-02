import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    top: 0;
    background-color: #FFFFFF;
`;

export const TeamIntroContainer = styled.div<{ $isPremium: boolean }>`
    overflow-y: auto;
    height: ${({ $isPremium }) => ($isPremium ? '72%' : '63%')};
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const NopremiumContainer = styled.div`
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
    border: 1px solid red;
`;

export const NopremiumMessage = styled.div`
    font-size: 14px;
    color: #000000;
    text-align: center;
    line-height: 1.5;
`;

export const NopremiumButton = styled.button`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EA4335;
    color: #FFFFFF;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 700;
    margin-top: 2%;
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