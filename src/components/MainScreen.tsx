import React from 'react';
import styled from 'styled-components';

const PhoneContainer = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: center;
  align-items: center; 
`;

const PhoneScreen = styled.div`
  height: 100%;
  width: 100%;
  background-color: #FFFFFF;
  overflow: hidden;
  aspect-ratio: 393 / 852;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #FFFFFF;
`;

interface SmartphoneScreenProps {
  children: React.ReactNode;
}

const MainScreen: React.FC<SmartphoneScreenProps> = ({ children }) => {

  return (
    <PhoneContainer >
      <PhoneScreen >
        <Content>{children}</Content>
      </PhoneScreen>
    </PhoneContainer>
  );
};

export default MainScreen;
