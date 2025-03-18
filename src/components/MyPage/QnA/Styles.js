import styled from 'styled-components';

export const QnAContainer = styled.div`
    font-family: Pretendard;
    width: 90%;
    margin: 5% auto 0 auto;
`;

export const Title = styled.p`
    font-family: Pretendard;
    font-size: 15px;
    font-weight: 700;
    padding: 1% 0;
`;

export const QnAs = styled.div`
    width: 100%; 
    height:18%;
    background-color: #f6f5fa;
    padding: 5%;
    border-radius: 0.8rem;
    margin: 3% 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const QnAContent = styled.p`
    font-weight: 700;
    font-size: 15px;
`;
export const MoveBtn = styled.button`
    align-self: flex-start;
    padding: 0;
    font-size: 20px;
    padding-bottom: 2%;
    font-weight: 700;
    border: 1px solid red;
`;
