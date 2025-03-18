import React from 'react';
import { useRecoilValue } from 'recoil';
import * as S from './Styles';
import { boothDetailState } from '../../../recoil/state/boothState';

const Explanation: React.FC = () => {
   const boothDetail = useRecoilValue(boothDetailState);
    return (
        <S.ExplanationLayout>
            <S.ExplanationTitle>동아리 소개</S.ExplanationTitle>
            <S.Explanation>
                    {boothDetail?.data.info}
            </S.Explanation>
        </S.ExplanationLayout>
    );
}

export default Explanation;
