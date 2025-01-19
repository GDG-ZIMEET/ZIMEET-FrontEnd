import React, { useState } from 'react';
import * as S from './Styles';
import TeamMemberModal from '../../Modal/TeamMemberModal';
import { MyProfileData } from '../../Profile/ProfileData';

//친구추가
interface PeoplePlusButtonProps {
  onAddFriend: (friend: MyProfileData) => void;
  joinType: '2to2' | '3to3';
}

const PeoplePlusButton: React.FC<PeoplePlusButtonProps> = ({ onAddFriend, joinType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <S.PeoplePlusButtonLayout>
      {joinType !== '3to3' && (
        <S.Description>닉네임이나 전화번호로 검색할 수 있어요.</S.Description>
      )}
        <S.PlusTeamBox onClick={handleButtonClick}>팀원 추가하기</S.PlusTeamBox>
      </S.PeoplePlusButtonLayout>
      {isModalOpen && <TeamMemberModal onClose={handleCloseModal} onAddFriend={onAddFriend} />}
    </>
  );
};

export default PeoplePlusButton;