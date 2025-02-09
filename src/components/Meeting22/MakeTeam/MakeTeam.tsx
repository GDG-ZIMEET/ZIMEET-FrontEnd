import React, { useState, useEffect } from 'react';
import * as S from './Styles';
import TeamData from '../Team/TeamData';
import ViewMore from '../ViewMore/ViewMore';
import { getOurTeam } from '../../../api/Meeting/GetourTeam';
import { useNavigate } from 'react-router-dom';
import { OurTeamType } from 'recoil/type/Meeting/ourTeamType';
import { getImageByEmoji } from 'utils/IconMapper';

interface MakeTeamProps {
  teamType: string; 
}

const MakeTeam: React.FC<MakeTeamProps> = ({ teamType }) => {
  const navigate = useNavigate();
  const [ourteamData, setOurTeamData] = useState<OurTeamType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTeamData = async () => {
      setIsLoading(true);
      try {
        const response = await getOurTeam(teamType); 
        if (response?.data) {
          setOurTeamData(response.data);
        } else {
          setOurTeamData(null);
        }
      } catch (error) {
        console.error('Error fetching team data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeamData();
  }, [teamType]);

  const handleCreateTeam = () => {
    navigate('/teamMaking');
  };

  return (
    <S.CreateTeamLayOut>
      {isLoading ? (
        <p>로딩 중...</p> 
      ) : !ourteamData ? (
        <S.CreateTeamButton onClick={handleCreateTeam}>
          팀 만들기
        </S.CreateTeamButton>
        ) : (
        <S.CreateTeamBox>
          <S.TeamBox>
          {ourteamData.emoji.map((emoji, index) => (
              <S.Emoji key={index}><img src={getImageByEmoji(emoji)} alt={emoji} /></S.Emoji>
            ))}
            <S.TeamName>
              {ourteamData.name} (우리팀)
            </S.TeamName>
          </S.TeamBox> 
          <ViewMore />
        </S.CreateTeamBox>    
      )}
    </S.CreateTeamLayOut>
  );
};

export default MakeTeam;
