import styled from 'styled-components';

export const Container = styled.div`
    padding: 6% 3% 0;
    background-color: #FFFFFF;
    top: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
  color: #333;
  text-align: center;
`;

export const Section = styled.div`
  margin-top: 20px;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.isPremium ? '#FF5733' : '#4CAF50')};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }
`;

export const Content = styled.p`
  font-size: 18px;
  line-height: 1.6;
`;