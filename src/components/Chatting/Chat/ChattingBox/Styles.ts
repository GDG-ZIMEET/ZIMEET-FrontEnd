import styled from 'styled-components';

export const ChattingBox = styled.div`
  margin-top: 15%;
  margin-bottom: 13%;
  height: 70%;
  width: 100%;
  flex: 1;
  padding: 3%;
  overflow-y: auto;
`;

export const MessageContainer = styled.div<{ isMine: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ isMine }) => (isMine ? 'flex-end' : 'flex-start')};
`;

export const Avatar = styled.div<{ show: boolean }>`
  width: 40px;
  height: 35px;
  border-radius: 50%;
  margin: 0 1% 7% 1%;
  background-color: rgba(234, 67, 53, 0.08);
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MessageContent = styled.div<{ isMine: boolean }>`
  padding: 2%;
  margin-left: ${({ isMine }) => (isMine ? '0' : '-1%')};
  margin-right: ${({ isMine }) => (isMine ? '-1%' : '0')};
  margin-bottom: 3%;
  height: auto;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: ${({ isMine }) => (isMine ? 'flex-end' : 'flex-start')};
`;

export const MessageUser = styled.strong`
  display: flex;
  font-size: 12px;
  margin-bottom: 3%;
  height: 20%;
`;

export const MessageText = styled.span<{ isMine: boolean; isSameUser: boolean }>`
  display: inline-block;
  font-size: 14px;
  background-color: ${({ isMine }) => (isMine ? '#EA4335' : '#EFEFEF')};
  color: ${({ isMine }) => (isMine ? 'white' : 'black')};
  border-radius: 20px;
  padding: 5%;
  width: fit-content;
  max-width: 100%;
  word-break: break-word;
  ${({ isSameUser }) => isSameUser && 'margin-top: -6%;'}
`;

export const MessagesEnd = styled.div`
  height: 1px;
`;
