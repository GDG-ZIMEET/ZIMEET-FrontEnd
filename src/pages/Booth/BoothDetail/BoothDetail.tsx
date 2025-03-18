import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './Styles';
import BackHeader from '../../../components/BoothDetail/BackHeader/BackHeader';
import AccountCopy from '../../../components/BoothDetail/AccountCopy/AccountCopy';
import ItemInventory from 'components/BoothDetail/ItemInventory/ItemInventory';
import Explanation from 'components/BoothDetail/Explanation/Explanation';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';
import GotoMeeting from 'components/GotoMeeting/GotoMeeting';
import { GetboothDetail } from '../../../api/booth/GetboothDetail';
import { getPosterComponent } from '../../../utils/ClubPosterMapper';
import { track } from '@amplitude/analytics-browser';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { boothDetailState } from 'recoil/state/boothState';

const BoothDetail: React.FC = () => {
  const { clubId } = useParams<{ clubId: string }>();
  const setRecoilBoothDetail = useSetRecoilState(boothDetailState);
  const boothDetail = useRecoilValue(boothDetailState);

  useEffect(() => {
    const fetchBoothDetail = async () => {
      if (clubId) {
        const response = await GetboothDetail(Number(clubId));
        if (response) {
          setRecoilBoothDetail(response);
        }
      }
    };

    fetchBoothDetail();
    track('[접속]부스_상세화면', { clubId: Number(clubId) });
  }, [clubId]);
  
  const PosterComponent = getPosterComponent(Number(clubId));

  return (
    <S.BoothDetailLayout>
      <BackHeader boothtype={boothDetail?.data.category}/>
      {PosterComponent && (
        <S.PosterComponent src={PosterComponent} alt="부스 포스터" />
      )}
      <AccountCopy clubId={clubId || '0'} />
      <ItemInventory />
      <Explanation />
      <NavigationBar />
      <GotoMeeting />
    </S.BoothDetailLayout>
  );
};

export default BoothDetail;
