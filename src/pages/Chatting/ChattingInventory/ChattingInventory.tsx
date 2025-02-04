import React from 'react';
import * as S from './Styles';
import ChattingInventoryTypeButton from '../../../components/Chatting/ChattingInventory/ChattingInventoryTypeButton/ChattingInventoryTypeButton';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import Teams from 'components/Chatting/ChattingInventory/Teams/Teams';

const ChattingInventory: React.FC = () => {
  return (
    <>
    <S.ChattingInventoryLayout>
      <S.ChattingInventoryTitle>팀 갤러리</S.ChattingInventoryTitle>
      <ChattingInventoryTypeButton />
      <Teams />
    </S.ChattingInventoryLayout>
    <NavigationBar />
    </>
  );
};

export default ChattingInventory;