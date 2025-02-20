import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import * as S from './Styles';
import BackHeader from '../../../components/BoothDetail/BackHeader/BackHeader';
import AccountCopy from '../../../components/BoothDetail/AccountCopy/AccountCopy';
import ItemInventory from 'components/BoothDetail/ItemInventory/ItemInventory';
import Explanation from 'components/BoothDetail/Explanation/Explanation';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';
import GotoMeeting from 'components/GotoMeeting/GotoMeeting';
import { GetboothDetail } from '../../../api/booth/GetboothDetail';
import { boothDetailState } from '../../../recoil/state/boothState';
import { getPosterComponent } from '../../../utils/PosterMap';


const BoothDetail: React.FC = () => {
  const { clubId } = useParams<{ clubId: string }>();
  const [, setBoothDetail] = useRecoilState(boothDetailState);

  useEffect(() => {
    const fetchBoothDetail = async () => {
      if (clubId) {
        const response = await GetboothDetail(Number(clubId));
        if (response) {
          setBoothDetail(response);
        }
      }
    };

    fetchBoothDetail();
  }, [clubId, setBoothDetail]);
  
  const PosterComponent = getPosterComponent(Number(clubId));

  return (
    <S.BoothDetailLayout>
      <BackHeader />
      {PosterComponent && (
        <S.PosterComponent as={PosterComponent} />
      )}
      <AccountCopy />
      <ItemInventory />
      <Explanation />
      <NavigationBar />
      <GotoMeeting />
    </S.BoothDetailLayout>
  );
};

export default BoothDetail;
