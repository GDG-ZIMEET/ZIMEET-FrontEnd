import * as I from '../../assets/Icons.ts'; 
import * as S from './Styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from '../../recoil/state/authAtom.js'; 

const NavigationBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isLoggedIn = useRecoilValue(authState);
    
    console.log("로그인 상태:", isLoggedIn); 

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
            <S.NavItem onClick={() => navigate('/meeting22')}>
                <S.RedDotIconWrapper style={{ margin: location.pathname === '/meeting22' ? '5px' : '6px' }}>
                    {!isLoggedIn && <S.RedDot />} 
                    {getIcon('/meeting22')}
                </S.RedDotIconWrapper>
                미팅
            </S.NavItem>
            <S.NavItem onClick={() => navigate('/chattingInventory')}>
                <S.IconWrapper style={{ margin: '1px' }}>
                    {getIcon('/chatting')}
                </S.IconWrapper>
                채팅
            </S.NavItem>
            <S.NavItem onClick={() => navigate('/mypage')}>
                <S.IconWrapper style={{ margin: '5px' }}>
                    {getIcon('/myinformation')}
                </S.IconWrapper>
                내정보
            </S.NavItem>
        </S.NavBarContainer>
    );
};

export default NavigationBar;
