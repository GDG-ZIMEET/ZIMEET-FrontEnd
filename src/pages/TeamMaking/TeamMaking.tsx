import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './Styles';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';
import Teams from 'components/TeamMaking/Teams/Teams';
import Header from 'components/Common/Header/Header/Header';
import TeamName from 'components/TeamMaking/TeamName/TeamName';
import MakingButton from 'components/TeamMaking/Buttons/MakingButton/MakingButton';
import { TeamMemberWithProfileType } from 'recoil/type/TeamMaking/TeamMemberWithProfileType';
import { postTeamMake } from 'api/TeamMaking/PostTeamMaking';
import { track } from '@amplitude/analytics-browser';

const TeamMaking: React.FC = () => {
  const location = useLocation();
  const { teamType } = location.state || {};
  const navigate = useNavigate();
  const [situation, setSituation] = useState(1);
  const [teamName, setTeamName] = useState('');
  const [inputcolor, setinputColor] = useState('rgba(2, 32, 71, 0.05)');
  
  const [teamMembers, setTeamMembers] = useState<TeamMemberWithProfileType[]>([]);
  const teamMemberIds = teamMembers.map(member => member.userId);

  const handleMakingButtonClick = async () => {
    if (teamName.trim() === '') {
      setinputColor('red'); // 팀명이 입력되지 않은 경우 빨간색
      return;
    }

    const response = await postTeamMake(teamType, teamName, teamMemberIds);
    if (response) {
      navigate('/meeting22');
      if (teamType === 'THREE_TO_THREE') {
        track('[클릭]미팅_3대3_팀만들기_버튼');
      } else {
        track('[클릭]미팅_2대2_팀만들기_버튼');
      }
    } else {
      alert('팀 생성에 실패했습니다.');
      if (teamType === 'THREE_TO_THREE') {
        track('[통신]미팅_3대3_팀만들기_실패');
      } else {
        track('[통신]미팅_2대2_팀만들기_실패');
      }
    }
  };

  useEffect(() => {
    if (teamType === 'THREE_TO_THREE') {
      track('[접속]미팅_3대3_팀만들기');
    } else {
      track('[접속]미팅_2대2_팀만들기');
    }

    if (teamType === 'THREE_TO_THREE') {
      if (teamMembers.length === 0 && !teamName) {
        setSituation(1);
      } else if (teamMembers.length === 2 && !teamName) {
        setSituation(2);
      } else if (teamMembers.length === 0 && teamName) {
        setSituation(3);
      } else if (teamMembers.length === 1) {
        setSituation(4);
      } else {
        setSituation(5);
      }
    }
    else {
      if (teamMembers.length === 0 && !teamName) {
        setSituation(1);
      } else if (teamMembers.length === 1 && !teamName) {
        setSituation(2);
      } else if (teamMembers.length === 0 && teamName) {
        setSituation(3);
      } else {
        setSituation(5);
      } 
    }
  }, [teamMembers, teamName, teamType]);

  return (
    <S.TeamMakingLayout>
      <Header title='팀 만들기'/>
      <TeamName
        teamName={teamName}
        setTeamName={setTeamName}
        setinputColor={setinputColor}
        $inputcolor={inputcolor}
       />
      <Teams 
        teamMembersInfo={teamMembers}
        setTeamMembersInfo={setTeamMembers}
        teamType={teamType}
       />
      <MakingButton 
        situation={situation} 
        onClick={handleMakingButtonClick}/>
      <NavigationBar />
    </S.TeamMakingLayout>
  );
};

export default TeamMaking;