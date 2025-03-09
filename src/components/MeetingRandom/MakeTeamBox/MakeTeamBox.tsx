import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import { getImageByEmoji, getRandomEmoji } from 'utils/IconMapper';
import { getRandomNow } from 'api/Meeting/GetRandomnow';
import { User } from 'recoil/type/Meeting/RandomNowType';

interface MakeTeamBoxProps {
  isRandomLoading: boolean;
}

const MakeTeamBox: React.FC<MakeTeamBoxProps> = ({ isRandomLoading }) => {
  const [randomNowData, setRandomNowData] = useState<User[] | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await getRandomNow();
      if (response) {
        setRandomNowData(response.data.userList);
      }
    };
    fetchData();
  }
  , []);

  return (
    <S.MakeTeamLayout>
       <S.explainComponent>
         <S.line1 $isRandomLoading={!isRandomLoading}>친구도 얻고, 연인도 얻고!</S.line1>
         <S.Line2 $isRandomLoading={!isRandomLoading}>랜덤 미팅은 1인 신청으로 빠르게 참여!</S.Line2>
      </S.explainComponent>
      <S.GirlComponent>{isRandomLoading && '여자'}</S.GirlComponent>
      <S.TeamRow>
        <S.FirstPerson><img src={getImageByEmoji(getRandomEmoji())}/></S.FirstPerson>
        <S.SecondPerson><img src={getImageByEmoji(getRandomEmoji())}/></S.SecondPerson>
        <S.ThirdPerson><img src={getImageByEmoji(getRandomEmoji())}/></S.ThirdPerson>
      </S.TeamRow>
      {isRandomLoading ? <S.LoadingAfter /> :<S.LoadingBefore /> }
      <S.BoyComponent>{isRandomLoading && '남자'}</S.BoyComponent>
      <S.TeamRow>
        <S.FourthPerson><img src={getImageByEmoji(getRandomEmoji())}/></S.FourthPerson>
        <S.FifthPerson><img src={getImageByEmoji(getRandomEmoji())}/></S.FifthPerson>
        <S.SixthPerson><img src={getImageByEmoji(getRandomEmoji())}/></S.SixthPerson>
      </S.TeamRow>
    </S.MakeTeamLayout>
  );
};

export default MakeTeamBox;
