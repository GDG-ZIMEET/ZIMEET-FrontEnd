import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';
import TypeButton from '../../components/Meeting22/TypeButton/TypeButton';
import MakeTeam from '../../components/Meeting22/MakeTeam/MakeTeam'; 
import TeamBox from '../../components/Meeting22/TeamBox/TeamBox';
import LoginPopUp from '../../components/Meeting22/LoginPopUp/LoginPopUp'; 
import { getTeamGallery } from 'api/Meeting/GetTeamGallery';
import { getOurTeam } from '../../api/Meeting/GetourTeam';
import { NonLoginDataTwoToTwo, NonLoginDataThreeToThree } from '../../data/NonLoginData';
import { OurTeamType } from '../../recoil/type/Meeting/ourTeamType';
import MeetingRandomMain from '../../components/MeetingRandom/MeetingRandomMain';
import { ourteamIds } from '../../recoil/state/ourTeamIds';
import NonLogInMeeting from '../../pages/NonMember/Meeting/Meeting';

const Meeting22 = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('accessToken') ? true : false;
  const [teamGalleryData, setTeamGalleryData] = useState<any | null>(null);
  const [teamType, setTeamType] = useState<string>('TWO_TO_TWO');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ourTeamData, setOurTeamData] = useState<OurTeamType | null>(null);
  const [teamIds, setTeamIds ] = useRecoilState(ourteamIds);
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (isLoggedIn && teamType !== 'Random') {
          const data = await getTeamGallery(teamType, 0);
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

    const fetchOurTeamData = async () => {
      try {
        if (isLoggedIn && teamType !== 'Random') {
          const response = await getOurTeam(teamType);
          setOurTeamData(response?.data || null);
          setTeamIds((prev) => {
            if (!response?.data) return prev;
            const newTeamIds: number[] = prev ? [...prev] : [0, 0];
            if (teamType === 'TWO_TO_TWO') {
              newTeamIds[0] = response.data.teamId;
            } else if (teamType === 'THREE_TO_THREE') {
              newTeamIds[1] = response.data.teamId;
            }
            return newTeamIds;
          });
        } else {
          if (teamType === 'TWO_TO_TWO') {
            setOurTeamData(null);
          } else if (teamType === 'THREE_TO_THREE') {
            setOurTeamData(null);
          }
        }
      } catch (error: any) {
          console.error("❌ 우리팀 데이터 가져오기 실패:", error);
          setOurTeamData(null);}
        
    };

    fetchData();
    fetchOurTeamData();
  }, [teamType, isLoggedIn]);

  
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <>  
      <NavigationBar />
      {!isLoggedIn && teamType !== 'Random' && (
      <LoginPopUp onClose={handleLogin} />
      )}
      <S.Meeting22Layout>
      <S.Meeting22Title>팀 갤러리</S.Meeting22Title>
      <TypeButton setSelectedTeamType={setTeamType} />
      <S.Meeting22Container>
        {teamType !== 'Random' ? (
        <>
          <MakeTeam teamType={teamType} ourTeamData={ourTeamData} />
          {isLoading ? (
          <S.LoadingContainer />
          ) : (
          <TeamBox teamData={teamGalleryData || []} ourTeamData={ourTeamData} teamType={teamType} />
          )}
        </>
        ) : (
        isLoggedIn ? <MeetingRandomMain /> : <NonLogInMeeting />
        )}
      </S.Meeting22Container>
      </S.Meeting22Layout>  
    </>
  );
};

export default Meeting22;
