import React from 'react';
import * as I from '../../assets/Icons.ts'; 
import * as S from './Styles';
import { useNavigate, useLocation } from 'react-router-dom'; 

const NavigationBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const iconMapping = {
        '/': {
            selected: <I.Home />,
            default: <I.HomeWhite />,
        },
        '/meeting22': {
            selected: <I.MeetingHeart />,
            default: <I.Meeting />,
        },
        '/chatting': {
            selected: <I.Chatting />,
            default: <I.Chatting />,
        },
        '/myinformation': {
            selected: <I.MyInformation />,
            default: <I.MyInformation />,
        },
    };

    const getIcon = (path) => {
        return location.pathname === path
            ? iconMapping[path]?.selected
            : iconMapping[path]?.default;
    };

    return (
        <S.NavBarContainer>
            <S.NavItem onClick={() => navigate('/booth')}>
                <S.IconWrapper>
                    {getIcon('/')}
                </S.IconWrapper>
                홈
            </S.NavItem>
            <S.NavItem onClick={() => navigate('/meeting-random')}>
                <S.IconWrapper style={{ margin: location.pathname === '/meeting22' ? '5px' : '6px' }}>
                    {getIcon('/meeting22')}
                </S.IconWrapper>
                미팅
            </S.NavItem>
            <S.NavItem onClick={() => navigate('/chatting')}>
                <S.IconWrapper style={{ margin: '1px' }}>
                    {getIcon('/chatting')}
                </S.IconWrapper>
                채팅
            </S.NavItem>
            <S.NavItem>
                <S.IconWrapper style={{ margin: '5px' }}>
                    {getIcon('/myinformation')}
                </S.IconWrapper>
                내정보
            </S.NavItem>
        </S.NavBarContainer>
    );
};

export default NavigationBar;
