import React from 'react';
import * as S from './Styles';
import View from '../../../assets/icon/Meeting22/View.svg?react';

interface ViewMoreProps {
  onClick?: () => void;
}

const ViewMore: React.FC<ViewMoreProps> = ({ onClick, ...props }) => {
return (
  <S.ViewMoreButton onClick={onClick} {...props}>
    더보기 <View/>
  </S.ViewMoreButton>
);
};

export default ViewMore;
