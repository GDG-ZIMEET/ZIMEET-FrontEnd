import styled from 'styled-components';

export const NavBarContainer = styled.nav`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 12%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #f0f0f0;
  
  //마이페이지 navbar 중간에 위치함 수정용
  position: fixed; 
  z-index: 100; 
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 12px;
  color: #151515;
  text-align: center;
  cursor: pointer;
  padding: 5px 0;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RedDotIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RedDot = styled.div`
  position: absolute;
  top: 10%;   
  left: 34%;  
  width: 8px;
  height: 8px;
  background-color: red;
  border-radius: 50%;
  z-index: 10;
`;
