import React from 'react';
<<<<<<< Updated upstream
import { Meeting22Container, Meeting22Title } from './Styles';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import TypeButton from '../../components/Meeting22/TypeButton/TypeButton';
import MakeTeam from '../../components/Meeting22/MakeTeam/MakeTeam'; 
=======
import { useRecoilState } from 'recoil';
import { authState } from '../../recoil/state/authAtom';
import { Meeting22Container, Meeting22Title} from './Styles';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import TypeButton from '../../components/Meeting22/TypeButton/TypeButton';
import MakeTeam from '../../components/Meeting22/MakeTeam/MakeTeam'; 
import TeamBox from '../../components/Meeting22/TeamBox/TeamBox';
import LoginPopUp from '../../components/Meeting22/LoginPopUp/LoginPopUp'; 
>>>>>>> Stashed changes

const Meeting22 = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(authState);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
<<<<<<< Updated upstream
    <Meeting22Container>
      <Meeting22Title>팀 갤러리 </Meeting22Title>
      <TypeButton/>
      <MakeTeam/>
      
    <NavigationBar/>
    </Meeting22Container>
=======
    <>
      {!isLoggedIn && (
        <LoginPopUp message="ZI밋에서 지금 바로 미팅하려면,로그인이 필요해요!" onClose={handleLogin} />
      )}      
        <Meeting22Container isLoggedIn={isLoggedIn}>
          <Meeting22Title>팀 갤러리</Meeting22Title>
          <TypeButton />
          <MakeTeam />
          <TeamBox />
        <NavigationBar />
        </Meeting22Container>   
    </>
>>>>>>> Stashed changes
  );
};

export default Meeting22;
