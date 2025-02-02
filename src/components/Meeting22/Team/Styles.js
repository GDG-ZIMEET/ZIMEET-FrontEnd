import styled from 'styled-components';

export const TeamLayOut = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;  
  width: 46%;
  height: 27.5%;
  border-radius: 10px;
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.15);
  margin: 1%;
  box-sizing: border-box;
`;

export const rowBox1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 48%;
  height: 26%;
  margin-right: 2%;
  `;

export const rowBox2 = styled.div`
display: flex;
align-items: center;
font-size: 12px;
font-weight: 400;
line-height: 30px;
`;

export const rowBox3= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:28%;
  box-sizing: border-box;
`;

export const MemberItem1 = styled.div`
  height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  display: flex;
  aspect-ratio:1;
  background-color: rgba(234, 67, 53, 0.08); 
  font-size: 16px;
  margin-right: -7%;
  border-radius: 50%;
`;

export const TeamName = styled.h3`
  color: #000;
  font-size: 13px;
  font-weight: 700;
  line-height: 30px;
`;

export const MajorDisplay = styled.div`
  display: flex;
  justify-contents: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 30px;
  word-spacing: 1%;
  color: #0;
  
`;


export const MemberInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const MemberItem2 = styled.div`
  display: flex;
  width:39.5%;
  color: #00AA47;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 19.5px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: #F5F5F5;
  padding: 2.5%;
  box-sizing: border-box;
  
`;

export const MusicGenresDiv = styled.div`
display: flex;
width:80%;
color: #00AA47;
font-size: 11px;
font-weight: 700;
line-height: 19.5px;
justify-content: center;
align-items: center;
border-radius: 20px;
background: #F5F5F5;
padding: 2.5%;
box-sizing: border-box;
`;