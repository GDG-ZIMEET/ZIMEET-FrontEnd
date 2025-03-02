import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import { getImageByEmoji } from 'utils/IconMapper';
import { getreceiveHi } from 'api/Hi/GetreceiveHi';
import { HiType } from 'recoil/type/Hi/HiType';

const Teams: React.FC = () => {
  const navigate = useNavigate();
  const [receiveHiList, setreceiveHiList] = useState<HiType[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchreceiveHiList = async () => {
      try {
        const response = await getreceiveHi();
        if (response) {
          setreceiveHiList(response.data);
        } else {
          setreceiveHiList(null);
        }
      } catch (error) {
        console.error('Error fetching receiveHi list:', error);
        setreceiveHiList(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchreceiveHiList();
  }, []);

  const handleTeamClick = () => {
    navigate(`/receiveHi/team`);
  };

  const emoji = ["Chick", "Clover", "Dog"];
  const major = ["바메화공", "ICT", "경영"];
  const music = ["발라드", "댄스", "힙합"];
  
  return (
    <S.TeamComponent>
      {isLoading ? (
        <S.LoadingContainer />
      ) : receiveHiList === null ? (
        <S.NoTeamsMessageContainer>
          <S.ZimeetLogo />
          <S.NoTeamsMessage>아직 받은 하이가 없네요!<br /> 팀을 만들어서 하이를 보내보세요!</S.NoTeamsMessage>
        </S.NoTeamsMessageContainer>
      ) : (
        receiveHiList.map(team => (
          <S.Team key={team.teamId} onClick={() => handleTeamClick()} >
            <S.TeamHeader>
              <S.TeamName>{team.teamName} 팀</S.TeamName>
              <S.WriteTime>{team.dateTime}</S.WriteTime>
            </S.TeamHeader>
            <S.JoinMembersAndIntroduction>
              <S.JoinMembers>
                {emoji.map((profile, index) => (
                  <S.JoinMemberBox key={index}>
                    <S.JoinMember>
                      <img src={getImageByEmoji(profile)} alt={profile} />
                    </S.JoinMember>
                  </S.JoinMemberBox>
                ))}
              </S.JoinMembers>
              <S.Introduction>
                <S.Major>
                  {major.join(' / ')} | {team.age}세
                </S.Major>
                <S.MusicStylesContainer>
                  <S.MusicEmoji/>
                  <S.MusicStyles>{music.join(', ')}</S.MusicStyles>
                </S.MusicStylesContainer>
              </S.Introduction>
            </S.JoinMembersAndIntroduction>
          </S.Team>
        ))
      )}
    </S.TeamComponent>
  );
};

export default Teams;
