import React, { useState } from 'react';
import * as S from './Styles';
import BackHeader from '../../../components/BoothDetail/BackHeader/BackHeader';
import AccountCopy from '../../../components/BoothDetail/AccountCopy/AccountCopy';
import ItemInventory from 'components/BoothDetail/ItemInventory/ItemInventory';
import Explanation from 'components/BoothDetail/Explanation/Explanation';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import GotoMeeting from 'components/GotoMeeting/GotoMeeting';

const BoothDetail: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePosterClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <S.BoothDetailLayout>
      <BackHeader />
      <S.PosterDetail onClick={handlePosterClick} />
      <AccountCopy />
      <ItemInventory />
      <Explanation />
      {isModalOpen && (
        <S.ModalOverlay onClick={handleCloseModal}>
          <S.ModalContent>
            <S.PosterDetail />
          </S.ModalContent>
        </S.ModalOverlay>
      )}
      <NavigationBar />
      <GotoMeeting />
    </S.BoothDetailLayout>
  );
};

export default BoothDetail;
