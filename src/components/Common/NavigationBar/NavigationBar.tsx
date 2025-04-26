import * as S from './Styles';
import { JSX } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from '../../../recoilStores/state/authState';
import { track } from '@amplitude/analytics-browser';


const NavigationBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isLoggedIn = useRecoilValue(authState);
    
    type Path = '/' | '/meeting22' | '/chattingInventory' | '/mypage' | '/setlist';
    const iconMapping: Record<Path, { selected: JSX.Element; default: JSX.Element }> = {
        '/': {
            selected: <S.Home />,
            default: <S.HomeWhite />,
        },
        '/meeting22': {
            selected: <S.MeetingHeart />,
            default: <S.Meeting />,
        },
        '/chattingInventory': {
            selected: <S.Schatting />,
            default: <S.Chatting />,
        },
        '/mypage': {
            selected: <S.SmyInformation />,
            default: <S.MyInformation />,
        },
        '/setlist': {
            selected: <S.TimeLine />,
            default: <S.TimeLineWhite />,
        },
    };

    const getIcon = (path: Path) => {
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
                track('[클릭]무대셋리스트');
                navigate('/setlist');
            }}>
                <S.IconWrapper>
                    {getIcon('/setlist')}
                </S.IconWrapper>
                공연
            </S.NavItem>
            <S.NavItem onClick={() => {
                track('[클릭]미팅');
                navigate('/meeting22');
            }}>
                <S.RedDotIconWrapper>
                    {!isLoggedIn && <S.RedDot />} 
                    {getIcon('/meeting22')}
                </S.RedDotIconWrapper>
                미팅
            </S.NavItem>
            <S.NavItem onClick={() => {
                track('[클릭]채팅');
                navigate('/chattingInventory');
            }}>
                <S.IconWrapper>
                    {getIcon('/chattingInventory')}
                </S.IconWrapper>
                채팅
            </S.NavItem>
            <S.NavItem onClick={() => {
                track('[클릭]내정보');
                navigate('/mypage');
            }}>
                <S.IconWrapper>
                    {getIcon('/mypage')}
                </S.IconWrapper>
                내정보
            </S.NavItem>
        </S.NavBarContainer>
    );
};

export default NavigationBar;
