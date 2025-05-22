import React from 'react';
import * as S from './Styles';
import { getImageByEmoji, getRandomEmoji } from 'utils/IconMapper';

const MakeTeamBox: React.FC = () => {
  return (
    <S.MakeTeamLayout>
      <S.explainComponent>
        <S.line1 />
        <S.Line2 />
      </S.explainComponent>
      <S.TeamRow>
        <S.FirstPerson>
          <img src={getImageByEmoji(getRandomEmoji())} />
        </S.FirstPerson>
        <S.SecondPerson>
          <img src={getImageByEmoji(getRandomEmoji())} />
        </S.SecondPerson>
      </S.TeamRow>
      <S.LoadingBefore />
      <S.TeamRow>
        <S.FourthPerson>
          <img src={getImageByEmoji(getRandomEmoji())} />
        </S.FourthPerson>
        <S.FifthPerson>
          <img src={getImageByEmoji(getRandomEmoji())} />
        </S.FifthPerson>
      </S.TeamRow>
    </S.MakeTeamLayout>
  );
};

export default MakeTeamBox;
