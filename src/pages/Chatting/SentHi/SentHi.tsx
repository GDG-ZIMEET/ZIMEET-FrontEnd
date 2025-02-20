import React from 'react';
import * as S from './Styles';
import ChattingInventoryTypeButton from '../../../components/Chatting/ChattingInventory/ChattingInventoryTypeButton/ChattingInventoryTypeButton';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';
import Teams from 'components/Chatting/SentHi/Teams/Teams';

const SentHi: React.FC = () => {
    return (
        <S.SentHiLayout>
            <S.SentHiTitle>팀 갤러리</S.SentHiTitle>
            <ChattingInventoryTypeButton />
            <S.SentHiExplanation>
                <strong>우리 팀이 보냈던 하이</strong><br />
                보낸 하이는 5시간 뒤에 상대방의 받은 하이 목록에서 사라져요.
            </S.SentHiExplanation>
            <Teams />
            <NavigationBar />
        </S.SentHiLayout>
    );
};

export default SentHi;