import React from 'react';
import * as S from './Styles';

const SentHiButton: React.FC = () => {
    return (
        <S.Wrapper>
            <S.Button>
                이미 하이를 보냈어요
            </S.Button>
        </S.Wrapper>
    );
};

export default SentHiButton;