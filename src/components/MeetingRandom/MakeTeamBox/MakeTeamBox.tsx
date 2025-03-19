import React ,{ useEffect } from 'react';
import * as S from './Styles';
import { getImageByEmoji, getRandomEmoji } from 'utils/IconMapper';
import { RandomTeamType } from 'recoil/type/Meeting/RandomNowType';
import Nopeople  from 'assets/icon/emoji/Nopeople.svg';
import { useNavigate } from "react-router-dom";

interface MakeTeamBoxProps {
  isRandomLoading: boolean;
  setIsRandomLoading : React.Dispatch<React.SetStateAction<boolean>>;
  randomNowData: RandomTeamType | null; 
  setRandomNowData: React.Dispatch<React.SetStateAction<RandomTeamType | null>>;
}

const MakeTeamBox: React.FC<MakeTeamBoxProps> = ({ isRandomLoading, setIsRandomLoading ,randomNowData, setRandomNowData }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const savedRandomNowData = localStorage.getItem("randomNowData");
    if (savedRandomNowData) {
      setRandomNowData(JSON.parse(savedRandomNowData));
    }

    const savedLoadingState = localStorage.getItem("isRandomLoading");
    if (savedLoadingState === "true") {
      setIsRandomLoading(true);
    }
  }, []);

  useEffect(() => {
    console.log("랜덤데이터", randomNowData);

    if (randomNowData) {
      localStorage.setItem("randomNowData", JSON.stringify(randomNowData)); 
    }

    if (randomNowData?.matchingStatus === "WAITING") {
      setIsRandomLoading(true);
      localStorage.setItem("isRandomLoading", "true"); 
    } else if (randomNowData?.matchingStatus === "COMPLETE") {
      localStorage.removeItem("isRandomLoading");
      localStorage.removeItem("randomNowData"); 
      navigate("/chattingInventory");
    }
  }, [randomNowData, navigate]);

  console.log(isRandomLoading);
  const femaleUsers = randomNowData?.userList.filter(user => user.gender === 'FEMALE');
  const maleUsers = randomNowData?.userList.filter(user => user.gender === 'MALE');

  const femaleTeam = [...(femaleUsers || []), ...Array(3 - (femaleUsers?.length || 0)).fill(null)].slice(0, 3);
  const maleTeam = [...(maleUsers || []), ...Array(3 - (maleUsers?.length || 0)).fill(null)].slice(0, 3);

  return (
    <S.MakeTeamLayout>
       <S.explainComponent>
         <S.line1 $isRandomLoading={!isRandomLoading}>친구도 얻고, 연인도 얻고!</S.line1>
         <S.Line2 $isRandomLoading={!isRandomLoading}>랜덤 미팅은 1인 신청으로 빠르게 참여!</S.Line2>
      </S.explainComponent>
      <S.GirlComponent>{isRandomLoading && '여자'}</S.GirlComponent>
      <S.TeamRow>
        {femaleTeam.map((user, index) => (
          <S.FirstPerson key={`female-${index}`}>
            {isRandomLoading? 
            <img src={user ? getImageByEmoji(user.emoji) : Nopeople} alt="female" style={user ? {} : { width: '40%' }} /> :
            <img src={getImageByEmoji(getRandomEmoji())}/>}
          </S.FirstPerson>
        ))}
      </S.TeamRow>
      {isRandomLoading ? <S.LoadingAfter /> :<S.LoadingBefore /> }
      <S.BoyComponent>{isRandomLoading && '남자'}</S.BoyComponent>
      <S.TeamRow>
        {maleTeam.map((user, index) => (
            <S.FourthPerson key={`male-${index}`}>
              {isRandomLoading? 
              <img src={user ? getImageByEmoji(user.emoji) : Nopeople} alt="male" style={user ? {} : { width: '40%' }}/> :
              <img src={getImageByEmoji(getRandomEmoji())}/>}
            </S.FourthPerson>
          ))}
      </S.TeamRow>
    </S.MakeTeamLayout>
  );
};

export default MakeTeamBox;
