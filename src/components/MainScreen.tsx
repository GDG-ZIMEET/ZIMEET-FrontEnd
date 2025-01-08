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

  @media (min-width: 768px) {
    max-width: 768px;
    margin: 0 auto;
    padding: 16px;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }


  @media (max-width: 405px) {
    width: 100vw; 
    height: 100%;
    padding: 8px; /* 여백 추가 */
    box-sizing: border-box;
    font-size: 14px; /* 글자 크기 조정 */
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  overflow-y: auto; 
  overflow-x: hidden; 
  background-color: #FFFFFF;

  @media (max-width: 393px) {
    font-size: 12px; /* 작은 화면에서 글자 크기 축소 */
    padding: 4px; /* 내부 여백 조정 */
  }
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
