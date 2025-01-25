import React from 'react';
import { useRecoilState } from 'recoil';
import { authState } from '../../recoil/state/authAtom';
import { Meeting22Layout, Meeting22Title, Meeting22Container} from './Styles';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import TypeButton from '../../components/Meeting22/TypeButton/TypeButton';
import MakeTeam from '../../components/Meeting22/MakeTeam/MakeTeam'; 
import TeamBox from '../../components/Meeting22/TeamBox/TeamBox';
import LoginPopUp from '../../components/Meeting22/LoginPopUp/LoginPopUp'; 

const Meeting22 = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(authState);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
        {!isLoggedIn && (
          <LoginPopUp message="ZI밋에서 지금 바로 미팅하려면,로그인이 필요해요!" onClose={handleLogin} />
        )}    
        <Meeting22Layout isLoggedIn={isLoggedIn}>
          <Meeting22Title>팀 갤러리</Meeting22Title>
          <TypeButton />
          <Meeting22Container>
            <MakeTeam />
            <TeamBox />
          </Meeting22Container>
        <NavigationBar />
        </Meeting22Layout>  
    </>
  );
};

export default Meeting22;
