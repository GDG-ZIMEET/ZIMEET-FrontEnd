import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { authState } from '../../recoil/state/authState';
import { Meeting22Layout, Meeting22Title, Meeting22Container} from './Styles';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import TypeButton from '../../components/Meeting22/TypeButton/TypeButton';
import MakeTeam from '../../components/Meeting22/MakeTeam/MakeTeam'; 
import TeamBox from '../../components/Meeting22/TeamBox/TeamBox';
import LoginPopUp from '../../components/Meeting22/LoginPopUp/LoginPopUp'; 
import { getTeamGallery } from 'api/Meeting/GetTeamGallery';
import { NonLoginDataTwoToTwo, NonLoginDataThreeToThree } from '../../data/NonLoginData';

const Meeting22 = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(authState); 
  const isLoggedIn = !!auth?.accessToken;
  const [teamGalleryData, setTeamGalleryData] = useState<any | null>(null);
  const [teamType, setTeamType] = useState<string>('TWO_TO_TWO');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (isLoggedIn) {
          const data = await getTeamGallery(teamType, 1);
          setTeamGalleryData(data?.data.teamList || []);
        } else {
          if (teamType === 'TWO_TO_TWO') {
            setTeamGalleryData(NonLoginDataTwoToTwo);
          } else if (teamType === 'THREE_TO_THREE') {
            setTeamGalleryData(NonLoginDataThreeToThree);
          }
        }
      } catch (error) {
        console.error('데이터 가져오기 실패:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [teamType, isLoggedIn]);

  
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <>  <NavigationBar />
    {!isLoggedIn && (
      <LoginPopUp
        onClose={handleLogin} 
      />
    )}
        <Meeting22Layout>
          <Meeting22Title>팀 갤러리</Meeting22Title>
          <TypeButton selectedTeamType={teamType} setSelectedTeamType={setTeamType}/>
          <Meeting22Container>
            <MakeTeam />
            {isLoading ? (
            <p>데이터를 불러오는 중입니다...</p>
          ) : (
            <TeamBox teamData={teamGalleryData || []} />
          )}
          </Meeting22Container>
        </Meeting22Layout>  
    </>
  );
};

export default Meeting22;
