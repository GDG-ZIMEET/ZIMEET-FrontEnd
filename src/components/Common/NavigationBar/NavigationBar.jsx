import * as I from '../../../assets/Icons'; 
import * as S from './Styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from '../../../recoil/state/authState.ts';
import { track } from '@amplitude/analytics-browser';

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
        if (path === '/') {
            return location.pathname === '/booth' || location.pathname === '/'
                ? iconMapping[path].selected
                : iconMapping[path].default;
        }
        return location.pathname === path
            ? iconMapping[path]?.selected
            : iconMapping[path]?.default;
    };

    return (
        <S.NavBarContainer>
            <S.NavItem onClick={() => {
                track('[클릭]홈');
                navigate('/booth');
            }}>
                <S.IconWrapper>
                    {getIcon('/')}
                </S.IconWrapper>
                홈
            </S.NavItem>
            <S.NavItem onClick={() => {
                track('[클릭]미팅');
                navigate('/meeting22');
            }}>
                <S.RedDotIconWrapper style={{ margin: location.pathname === '/meeting22' ? '5px' : '6px' }}>
                    {!isLoggedIn && <S.RedDot />} 
                    {getIcon('/meeting22')}
                </S.RedDotIconWrapper>
                미팅
            </S.NavItem>
            <S.NavItem onClick={() => {
                track('[클릭]채팅');
                navigate('/chattingInventory');
            }}>
                <S.IconWrapper style={{ margin: '1px' }}>
                    {getIcon('/chattingInventory')}
                </S.IconWrapper>
                채팅
            </S.NavItem>
            <S.NavItem onClick={() => {
                track('[클릭]내정보');
                navigate('/mypage');
            }}>
                <S.IconWrapper style={{ margin: '5px' }}>
                    {getIcon('/mypage')}
                </S.IconWrapper>
                내정보
            </S.NavItem>
        </S.NavBarContainer>
    );
};

export default NavigationBar;
