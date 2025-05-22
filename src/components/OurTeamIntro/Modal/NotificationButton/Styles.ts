import styled from 'styled-components';
import notificationIcon from '../../../../assets/icon/notification.svg';

export const NotificationLayout = styled.div`
    width: 88%;
    position: absolute;
    bottom: 10%;
    left: 6%;
    margin-bottom: 23.5%;
`;

export const NotificationButton = styled.button`
    width: 100%;
    height: 8.5%;
    background-color: #EA4335;
    padding: 3.5%;
    border-radius: 13px;
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

export const NotificationText = styled.span`
    color: white;
    font-size: 15px;
    font-weight: 700;
`; 