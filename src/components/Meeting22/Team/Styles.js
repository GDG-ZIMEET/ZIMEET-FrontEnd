import styled from 'styled-components';

export const TeamLayOut = styled.div`
  display: flex;
  flex-direction: column;
   justify-content: space-evenly;  
  align-items: center;  
  width: 49%;
  height: 40%;
  border-radius: 10px;
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.15);
`;

export const rowBox = styled.div`
  display: flex;
  align-items: center;
  `;

export const MemberItem1 = styled.div`
  display: flex;
  background-color: rgba(234, 67, 53, 0.08); 
  font-size: 2rem;
  border-radius: 23.5px;
  margin: 0;
  &:hover {
  background-color: rgba(234, 67, 53, 0.2); 
  }
  padding: 5%;
`;

export const TeamName = styled.h3`
  color: #000;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
`;

export const MajorDisplay = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: #0;
`;

export const AverageAge = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: #000;
`;

export const MemberInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const MemberItem2 = styled.div`
  display: flex;
  color: #00AA47;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  border-radius: 20px;
  background: #F5F5F5;
  padding: 5%;
`;