import styled from 'styled-components';

export const NavBarContainer = styled.nav`
  position: fixed;
  left: 0;
  width: 100%;
  height: 10%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #f0f0f0;
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
