import styled from 'styled-components';

export const HelpLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
  margin-top: 5%;
  height: 10%;
  width: 100%;
`;

export const HelpContainer = styled.div<{ show: boolean }>`
  display: flex;
  font-size: 13px;
  color: #000000;
  font-weight: bold;
  height: 80%;
  box-shadow: 0 4px 8px rgba(0.1, 0.1, 0.1, 0.1);
  border-radius: 8%;
  justify-content: center;
  align-items: center;
  width: 27%;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')}; 
`;
