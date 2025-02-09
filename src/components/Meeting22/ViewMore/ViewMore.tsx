import React from 'react';
import * as S from './Styles';
import {ReactComponent as View} from '../../../assets/icon/Meeting22/View.svg'
const ViewMore = () => {
return (
  <S.ViewMoreButton>
    더보기 <View/>
  </S.ViewMoreButton>
);
};

export default ViewMore;
