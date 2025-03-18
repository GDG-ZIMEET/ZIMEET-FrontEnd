import styled from 'styled-components';

export const SentHiLayout = styled.div`
    padding: 6% 3% 0;
    background-color: #FFFFFF;
    top: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: Pretendard, sans-serif;
`;

export const SentHiTitle = styled.h1`
    font-size: 15px;
    color: #000000;
    font-weight: bold; 
`;

export const SentHiExplanation = styled.div`
  font-size: 13px;
  color: #000000;
  margin: 5% 0 3% 0;
  line-height: 1.5;

  strong {
    font-weight: bold;
  }

  span {
    color: #FA2D4C;
    text-decoration: underline; // 밑줄 추가
  }
`;