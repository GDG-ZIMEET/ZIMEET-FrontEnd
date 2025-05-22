import styled from 'styled-components';
import notificationIcon from '../../../assets/icon/notification.svg';
import * as I from '../../../assets/Icons';

export const QnAContainer = styled.div`
    font-family: Pretendard, sans-serif;
    width: 90%;
    margin: 5% auto 0 auto;
`;

export const Title = styled.p`
    font-family: Pretendard, sans-serif;
    font-size: 15px;
    font-weight: 700;
    padding: 1% 0;

    @media (max-width: 350px) and (max-height: 600px) {
    font-size: 13px;
  }
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
    
    @media (max-width: 350px) and (max-height: 600px) {
        height:15%;
        padding: 4%;
  }
`;

export const QnAContent = styled.p`
    font-weight: 700;
    font-size: 15px;

    @media (max-width: 350px) and (max-height: 600px) {
    font-size: 12px;
  }
`;
export const MoveBtn = styled.button`
    align-self: flex-start;
    padding: 0;
    font-size: 20px;
    padding-bottom: 2%;
    font-weight: 700;
    border: 1px solid red;
`;

export const AlarmButton = styled.button`
    width: 100%;
    height: 18%;
    background-color: #EA4335;
    padding: 3.5%;
    border-radius: 0.8rem;
    margin: 3% 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
`;

export const NotificationIcon = styled.img.attrs({
    src: notificationIcon
})`
    width: 36px;
    height: 36px;
    margin-right: 10px;
    flex-shrink: 0;
    display: block;
`;

export const AlarmText = styled.span`
    color: white;
    font-size: 15px;
    font-weight: 700;
`;

export const View = styled(I.View)`
    width: 12px;
    @media (max-width: 350px) and (max-height: 600px) {
    width: 8px;
  }
`;