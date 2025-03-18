import React, { useState } from 'react';
import * as S from './Styles';
import TeamMemberModal from '../../Modal/TeamMemberModal';
import { SearchTeamMemberType } from 'recoil/type/TeamMaking/SearchTeamMember';

//친구추가
interface PeoplePlusButtonProps {
  teamMembers: SearchTeamMemberType[];
  setTeamMembers: React.Dispatch<React.SetStateAction<SearchTeamMemberType[]>>;
  teamType: string;
}

const PeoplePlusButton: React.FC<PeoplePlusButtonProps> = ({ teamMembers, setTeamMembers, teamType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 친구 추가 함수
  const handleAddFriend = (friend: SearchTeamMemberType) => {
    // 이미 추가된 팀원인지 확인
    if (!teamMembers.some(member => member.userId === friend.userId)) {
      setTeamMembers(prevMembers => [...prevMembers, friend]);
    } else {
      alert('이미 추가된 팀원입니다.');
    }
  };

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <S.PeoplePlusButtonLayout>
      {teamMembers.length < 1 && (
        <S.Description>닉네임이나 전화번호로 검색할 수 있어요.</S.Description>
      )}
        <S.PlusTeamBox onClick={handleButtonClick}>팀원 추가하기</S.PlusTeamBox>
      </S.PeoplePlusButtonLayout>
      {isModalOpen && <TeamMemberModal onClose={handleCloseModal} onAddFriend={handleAddFriend}  teamType={ teamType}/>}
    </>
  );
};

export default PeoplePlusButton;