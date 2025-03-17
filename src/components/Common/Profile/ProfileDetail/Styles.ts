import styled from "styled-components";

export const ProfileDetailContainer = styled.div<{ $ischat?: boolean }>`
  width: ${({ $ischat }) => ($ischat ? '30%' : '25%')};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileDetailBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  position: relative;
  margin-bottom: 3%;
`;


export const Styles = styled.div<{ $isblue: boolean }>`
  width: 90%;
  aspect-ratio: 1;
  border-radius: 50%;
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ $isblue }) => ($isblue ? '#4285F4' : '#EA4335')};
  background-color: ${({ $isblue }) => ($isblue? 'rgba(66, 133, 244, 0.08)' : 'rgba(234, 67, 53, 0.08)')};

`;

export const InfoTitle = styled.div<{ $ischat?: boolean }>`
  color: #000000;
  font-size: 12px;
  margin-right: 1%;
  margin-bottom: ${({ $ischat }) => ($ischat ? '10%' : '0')};
`;
