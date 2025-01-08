import React from 'react';
import * as S from './Styles';

const Explanation: React.FC = () => {
    return (
        <S.ExplanationLayout>
            <S.ExplanationTitle>동아리 소개</S.ExplanationTitle>
            <S.Explanation>
                    Google Developer Groups on Campus CUK는 IT에 관심있는 학생들이 모여있는 학생 개발자 그룹입니다.<br />
                    가톨릭대학교 최대 IT Community가 되겠다는 비전을 갖고, '네트워크와 성장'을 목표로 다양한 스터디를 진행하고 있습니다.<br />
                    <br />
                    GDGoC의 CUK의 스터디는 특별하게 "내가 커리큘럼을 만드는 스터디"를 진행하고 있습니다. 커리큘럼을 정해두고 인원을 모집하는 다른 동아리와는 달리, 정말 배우고 싶었던 스터디를 할 수 있다는 것이 가장 큰 차별 점입니다.<br />
                    <br />
                    좋은 사람들과의 네트워크, 스터디를 통한 남다른 성장, 특색있는 활동들로 채워진 고도화 과정을 원하신다면 GDGoC CUK에서 만나요!👋
            </S.Explanation>
        </S.ExplanationLayout>
    );
}

export default Explanation;
