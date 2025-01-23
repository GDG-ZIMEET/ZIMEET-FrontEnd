import styled from 'styled-components';

export const EventContainer = styled.div`
  width: 90%; height: 5%;
  background-color: black;
  border-radius: 0.8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1%;
`;
export const EventLogo = styled.div`
  width: 15%;
  text-align: center;
  svg {
    width: 100%;
    height: 100%;
  }
`;
export const EventCommentWrapper = styled.div``;
export const EventTitle = styled.p`
  color: white;
  font-family: Pretendard;
  font-weight: 700;
  font-size: 14px;
  padding: 1.5% 0;
`;
export const EventText = styled.p`
  color: white;
  font-family: Pretendard;
  font-size: 12px;
  padding: 1.5% 0;
`;
export const EventTextBold = styled.span`
  font-weight: 700;
  font-size: 12px;
  white-space: nowrap; //줄바꿈 방지
`;
export const MoveBtn = styled.button`
  color: white;
  align-self: flex-start;
  padding: 3% 0 0 0;
`;