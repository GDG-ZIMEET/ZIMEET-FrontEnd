import * as I from '../../assets/Icons.ts'; 
import * as S from './Styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from '../../recoil/state/authState.ts'; 

const NavigationBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isLoggedIn = useRecoilValue(authState);
    
    const iconMapping = {
        '/': {
            selected: <I.Home />,
            default: <I.HomeWhite />,
        },
        '/meeting22': {
            selected: <I.MeetingHeart />,
            default: <I.Meeting />,
        },
        '/chattingInventory': {
            selected: <I.Schatting />,
            default: <I.Chatting />,
        },
        '/mypage': {
            selected: <I.SmyInformation />,
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
                    {getIcon('/chattingInventory')}
                </S.IconWrapper>
                채팅
            </S.NavItem>
            <S.NavItem onClick={() => navigate('/mypage')}>
                <S.IconWrapper style={{ margin: '5px' }}>
                    {getIcon('/mypage')}
                </S.IconWrapper>
                내정보
            </S.NavItem>
        </S.NavBarContainer>
    );
};

export default NavigationBar;
