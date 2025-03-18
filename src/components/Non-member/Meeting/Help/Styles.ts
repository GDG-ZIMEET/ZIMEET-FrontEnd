import styled from 'styled-components';

export const HelpLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
  margin-top: 1%;
  height: 10%;
  width: 100%;
  font-family: Pretendard, sans-serif;
`;

export const HelpContainer = styled.div<{ show: boolean }>`
  display: ${props => (props.show ? 'block' : 'none')};
  padding: 2%;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  color: #333;
`;
