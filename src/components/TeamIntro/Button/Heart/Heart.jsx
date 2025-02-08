import React from 'react';
import { HeartButton, HeartLayOut, Hi, SendText } from './Styles';
import hiIcon from '../../../../assets/icon/TeamInfo/HiIcon.svg';



const Heart = ({ onClick }) => {
  return (
    <HeartLayOut>
      <HeartButton onClick={onClick}> 
      <Hi><img src={hiIcon} /></Hi><SendText>보내기</SendText>
      </HeartButton>
    </HeartLayOut>
  );
};

export default Heart;
