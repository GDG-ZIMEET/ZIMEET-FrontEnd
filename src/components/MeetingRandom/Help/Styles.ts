import styled from 'styled-components';
import { SpeechBubble } from 'assets/Icons';

export const HelpLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  width: 100%;

  @media (max-width: 350px) and (max-height: 600px) {
    height: 8%;
  }
`;

export const HelpContainer = styled.div`
  padding: 2%;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  color: #333;
  white-space: nowrap;

  @media (max-width: 350px) and (max-height: 600px) {
    font-size: 11px;
  }
`;

export const HelpIcon = styled(SpeechBubble)`
  margin: 1% 5% 0 0;
`;
