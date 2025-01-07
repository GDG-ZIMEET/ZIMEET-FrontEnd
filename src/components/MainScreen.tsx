import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import NavigationBar from './NavigationBar/NavigationBar';

const PhoneContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhoneScreen = styled.div`
  height: 100%;
  width: auto;
  background-color: #FFFFFF;
  overflow: hidden;
  position: relative; /* navbar를 phonescreen 영역 내 고정 */
  aspect-ratio: 393 / 852;
  flex-direction: column;

  @media only screen and (max-width: 393px) {
    width: 100%;
    height: 100%;
    aspect-ratio: auto;
  }
`;

const Content = styled.div`
  flex:1;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #FFFFFF;
  // padding-bottom: 65px;
`;

interface SmartphoneScreenProps {
  children: React.ReactNode;
}

const MainScreen: React.FC<SmartphoneScreenProps> = ({ children }) => {
  const location = useLocation();

  const excludeNavBarPaths = ['/login']; 

  return (
    <PhoneContainer>
      <PhoneScreen>
        <Content>{children}</Content>
        {!excludeNavBarPaths.includes(location.pathname) && <NavigationBar />}
      </PhoneScreen>
    </PhoneContainer>
  );
};

export default MainScreen;
