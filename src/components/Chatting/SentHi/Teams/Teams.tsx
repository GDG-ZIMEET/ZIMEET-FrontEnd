import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import { getImageByEmoji } from 'utils/IconMapper';
import { getsendHi } from 'api/Hi/GetsendHi';
import { HiType } from 'recoilStores/type/Hi/HiType';
import { track } from '@amplitude/analytics-browser';
import { mappingMajor } from 'data/SignUpData';

const Teams: React.FC = () => {
  const navigate = useNavigate();
  const [sendHiList, setsendHiList] = useState<HiType[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const isLoggedIn = localStorage.getItem('accessToken') ? true : false;

  useEffect(() => {
    setIsLoading(true);
    const fetchsendHiList = async () => {
      try {
        const response = await getsendHi();
        if (response) {
          setsendHiList(response.data);
        } else {
          setsendHiList(null);
        }
      } catch (error) {
        console.error('Error fetching sendHi list:', error);
        setsendHiList(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchsendHiList();
  }, []);

  const handleTeamClick = (teamId: number) => {
    const selectedTeam = sendHiList?.find((team) => team.teamId === teamId);
    if (selectedTeam) {
      navigate(`/teamintro/${teamId}`, { state: { from: 'sendHi' } });
      track('[클릭]채팅_보낸하이_팀', {
        teamId: teamId,
      });
    }
  };

  console.log('sendHiList:', sendHiList);
  return (
    <S.TeamComponent>
      {!isLoggedIn || sendHiList?.length === 0 || sendHiList === null ? (
        <S.NoTeamsMessageContainer>
          <S.ZimeetLogo />
          <S.NoTeamsMessage>
            아직 보낸 하이가 없네요!
            <br /> 팀을 만들고 적극적으로 하이를 보내보세요!
          </S.NoTeamsMessage>
        </S.NoTeamsMessageContainer>
      ) : isLoading ? (
        <S.LoadingContainer />
      ) : (
        sendHiList?.map((team) => (
          <S.Team
            key={team.teamId}
            onClick={() => handleTeamClick(team.teamId)}
          >
            <S.TeamHeader>
              <S.TeamName>
                {team.teamName} {team.userProfileDtos.length === 1 ? '' : '팀'}
              </S.TeamName>
              <S.WriteTime>{team.dateTime}</S.WriteTime>
              <S.ViewIcon />
            </S.TeamHeader>
            <S.JoinMembersAndIntroduction>
              <S.JoinMembers $memberCount={team.userProfileDtos.length}>
                {team.userProfileDtos.map((profile, index) => (
                  <S.JoinMemberBox key={index}>
                    <S.JoinMember>
                      <img
                        src={getImageByEmoji(profile.emoji)}
                        alt={profile.emoji}
                      />
                    </S.JoinMember>
                  </S.JoinMemberBox>
                ))}
              </S.JoinMembers>
              <S.Introduction $memberCount={team.userProfileDtos.length}>
                <S.Major $memberCount={team.userProfileDtos.length}>
                  {team.userProfileDtos
                    .map((profile) => mappingMajor(String(profile.major)))
                    .join(' / ')}{' '}
                  | {team.age}세
                </S.Major>
                <S.MusicStylesContainer
                  $memberCount={team.userProfileDtos.length}
                >
                  <S.MusicEmoji />
                  <S.MusicStyles>
                    {team.userProfileDtos
                      .map((profile) => profile.music)
                      .join(', ')}
                  </S.MusicStyles>
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
