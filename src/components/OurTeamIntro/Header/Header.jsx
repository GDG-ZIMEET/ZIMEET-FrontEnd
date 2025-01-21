import React, { useState } from 'react';
import * as S from './Styles';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '../../../assets/icon/TeamInfo/DeleteIcon.svg'
import Trash from '../../../assets/icon/TeamInfo/Trash.svg'
import DeleteModal from '../Modal/DeleteModal/DeleteModal'; 

const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDeleteConfirm = () => {
    setIsModalOpen(true);
    setIsDropdownOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <S.Header>
      <S.HeaderWrapper>
        <S.BackButton onClick={() => navigate(-1)} />
        <S.Title>우리팀 소개</S.Title>
      </S.HeaderWrapper>
      <S.DeleteButton onClick={handleDeleteClick}>
        <S.DeleteIcon src={DeleteIcon} alt="Delete" />
      </S.DeleteButton>

      {isDropdownOpen && (
        <S.DropdownMenu>
          <S.DropdownItem onClick={handleDeleteConfirm}>
          <S.TrashIcon src={Trash} alt="Trash" />팀 삭제하기</S.DropdownItem>
        </S.DropdownMenu>
      )}

      {isModalOpen && <DeleteModal onClose={handleCloseModal} />}
    </S.Header>
  );
};

export default Header;
