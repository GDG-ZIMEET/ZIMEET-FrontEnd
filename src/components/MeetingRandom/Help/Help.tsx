import React from 'react';
import * as S from './Styles';
import { RandomTeamType } from 'recoilStores/type/Meeting/RandomNowType';

interface HelpProps {
  isRandomLoading: boolean;
  randomNowData: RandomTeamType | null;
  navigateOnComplete: boolean;
}

const Help: React.FC<HelpProps> = ({ isRandomLoading, randomNowData, navigateOnComplete }) => {
  return (
    <>
      {randomNowData?.matchingStatus === 'COMPLETE' && !navigateOnComplete && (
        <div style={{ margin: '5% 0', textAlign: 'center'}}>
          매칭이 완료됐어요! 채팅 탭에서 대화를 시작해보세요🩶
        </div>
      )}
    </>
  );
};

export default Help;
