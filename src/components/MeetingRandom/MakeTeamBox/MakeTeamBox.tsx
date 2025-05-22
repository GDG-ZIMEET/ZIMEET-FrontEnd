import React, { useEffect } from 'react';
import * as S from './Styles';
import { getImageByEmoji, getRandomEmoji } from 'utils/IconMapper';
import { RandomTeamType } from 'recoilStores/type/Meeting/RandomNowType';
import Nopeople from 'assets/icon/emoji/Nopeople.svg';
import { useNavigate } from 'react-router-dom';

interface MakeTeamBoxProps {
  isRandomLoading: boolean;
  randomNowData: RandomTeamType | null;
}

const MakeTeamBox: React.FC<MakeTeamBoxProps> = ({
  isRandomLoading,
  randomNowData,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (randomNowData?.matchingStatus === 'COMPLETE') {
      navigate('/chattingInventory');
    }
  }, [randomNowData, navigate]);

  const femaleUsers = randomNowData?.userList.filter(
    (user) => user.gender === 'FEMALE',
  );
  const maleUsers = randomNowData?.userList.filter(
    (user) => user.gender === 'MALE',
  );

  const femaleTeam = [
    ...(femaleUsers || []),
    ...Array(3 - (femaleUsers?.length || 0)).fill(null),
  ].slice(0, 2);
  const maleTeam = [
    ...(maleUsers || []),
    ...Array(3 - (maleUsers?.length || 0)).fill(null),
  ].slice(0, 2);

  return (
    <S.MakeTeamLayout>
      <S.explainComponent>
        <S.line1 $isRandomLoading={isRandomLoading}>
          {isRandomLoading
            ? '📌미팅참여하기 후 10초안에 이모지가 뜨지 않으면 \n새로고침 또는 어플을 다시 시작해주세요!'
            : '친구도 얻고, 연인도 얻고!'}
        </S.line1>
        <S.Line2 $isRandomLoading={isRandomLoading}>
          {isRandomLoading
            ? '티켓 개수는 줄어들지 않으니 걱정마세요☺️'
            : '랜덤 미팅은 1인 신청으로 빠르게 참여!'}
        </S.Line2>
      </S.explainComponent>
      <S.GirlComponent>{isRandomLoading && '여자'}</S.GirlComponent>
      <S.TeamRow $isRandomLoading={!isRandomLoading}>
        {femaleTeam.map((user, index) => (
          <S.FirstPerson key={`female-${index}`}>
            {isRandomLoading ? (
              <img
                src={user ? getImageByEmoji(user.emoji) : Nopeople}
                alt="female"
                style={user ? {} : { width: '40%' }}
              />
            ) : (
              <img src={getImageByEmoji(getRandomEmoji())} />
            )}
          </S.FirstPerson>
        ))}
      </S.TeamRow>
      {isRandomLoading ? <S.LoadingAfter /> : <S.LoadingBefore />}
      <S.BoyComponent>{isRandomLoading && '남자'}</S.BoyComponent>
      <S.TeamRow $isRandomLoading={!isRandomLoading}>
        {maleTeam.map((user, index) => (
          <S.FourthPerson key={`male-${index}`}>
            {isRandomLoading ? (
              <img
                src={user ? getImageByEmoji(user.emoji) : Nopeople}
                alt="male"
                style={user ? {} : { width: '40%' }}
              />
            ) : (
              <img src={getImageByEmoji(getRandomEmoji())} />
            )}
          </S.FourthPerson>
        ))}
      </S.TeamRow>
    </S.MakeTeamLayout>
  );
};

export default MakeTeamBox;
