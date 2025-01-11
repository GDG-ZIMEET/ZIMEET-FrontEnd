import React from 'react';
import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';

const PhoneContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhoneScreen = styled.div<{ isChatting: boolean }>`
  height: 100%;
  width: auto;
  background-color: #FFFFFF;
  overflow: hidden;
  aspect-ratio: 393 / 852;
  display: flex;
  flex-direction: column;

  ${({ isChatting }) =>
    isChatting &&
    css`
      @media (max-width: 768px) {
        @supports (-webkit-touch-callout: none) {
          width: 100%;
          height: 100%;
        }
      }
    `}

  ${({ isChatting }) =>
    !isChatting &&
    css`
      @media (max-width: 768px) {
        @supports (-webkit-touch-callout: none) {
          width: 100%;
          height: 87%;
          margin-top: -24%;
        }
      }
    `}
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #FFFFFF;

  @media (max-width: 768px) {
    @supports (-webkit-touch-callout: none) {
      .container {
        height: -webkit-fill-available;
      }
    }
  }
`;

interface SmartphoneScreenProps {
  children: React.ReactNode;
}

const MainScreen: React.FC<SmartphoneScreenProps> = ({ children }) => {
  const location = useLocation();
  const isChatting = location.pathname.includes('/chatting');

  return (
    <PhoneContainer>
      <PhoneScreen isChatting={isChatting}>
        <Content>{children}</Content>
      </PhoneScreen>
    </PhoneContainer>
  );
};

export default MainScreen;
