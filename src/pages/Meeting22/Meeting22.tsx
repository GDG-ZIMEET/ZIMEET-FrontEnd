import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { authState } from '../../recoil/state/authState';
import { Meeting22Layout, Meeting22Title, Meeting22Container, TicketCount} from './Styles';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';
import TypeButton from '../../components/Meeting22/TypeButton/TypeButton';
import MakeTeam from '../../components/Meeting22/MakeTeam/MakeTeam'; 
import TeamBox from '../../components/Meeting22/TeamBox/TeamBox';
import LoginPopUp from '../../components/Meeting22/LoginPopUp/LoginPopUp'; 
import { getTeamGallery } from 'api/Meeting/GetTeamGallery';
import { getOurTeam } from '../../api/Meeting/GetourTeam';
import { NonLoginDataTwoToTwo, NonLoginDataThreeToThree } from '../../data/NonLoginData';
import { OurTeamType } from '../../recoil/type/Meeting/ourTeamType';
import MakeTeamBox from '../../components/MeetingRandom/MakeTeamBox/MakeTeamBox';
import Help from '../../components/MeetingRandom/Help/Help';
import JoinRandomMeetingButton from '../../components/MeetingRandom/JoinButton/JoinRandomMeetingButton';
import Modal from '../../components/MeetingRandom/Modal/Modal';
import { getImageByEmoji } from 'utils/IconMapper';

const Meeting22 = () => {
  const navigate = useNavigate();
  const [auth,] = useRecoilState(authState); 
  const isLoggedIn = !!auth?.accessToken;
  const [teamGalleryData, setTeamGalleryData] = useState<any | null>(null);
  const [teamType, setTeamType] = useState<string>('TWO_TO_TWO');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRandomLoading, setIsRandomLoading] = useState<boolean>(false);
  const [ourTeamData, setOurTeamData] = useState<OurTeamType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleHelpClick = () => {
    navigate('/help');
  };
  const handleJoinClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleConfirm = () => {
    setIsModalOpen(false);
    setIsRandomLoading(true);
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
          <TypeButton setSelectedTeamType={setTeamType}/>
          <Meeting22Container>
           {teamType !== 'Random' ? (
            <>
              <MakeTeam teamType={teamType} ourTeamData={ourTeamData} />
              {isLoading ? (
                <p>데이터를 불러오는 중입니다...</p>
              ) : (
                <TeamBox teamData={teamGalleryData || []} ourTeamData={ourTeamData} teamType={teamType} />
              )}
            </>
          ) : (
            <>
              <MakeTeamBox isRandomLoading={isRandomLoading}/>
              <Help isRandomLoading={!isRandomLoading} onClick={handleHelpClick} />
              <TicketCount $isRandomLoading={isRandomLoading}>남은 티켓 : 2개</TicketCount>
              <JoinRandomMeetingButton isRandomLoading={isRandomLoading} onClick={handleJoinClick} />
              {isModalOpen && <Modal onClose={handleCloseModal} onConfirm={handleConfirm} />}
            </>
          )}
          </Meeting22Container>
        </Meeting22Layout>  
    </>
  );
};

export default Meeting22;
