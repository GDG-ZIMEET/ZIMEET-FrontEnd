import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import NavigationBar from './NavigationBar/NavigationBar';

const PhoneContainer = styled.div`
  width: 100vw; 
  height: 100vh; 
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhoneScreen = styled.div`
  width: 100%;
  height: 100%;
  max-width: 768px; 
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 480px) {
    width: 100vw; 
    height: 100%;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  overflow-y: auto; 
  overflow-x: hidden; 
  background-color: #FFFFFF;
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
