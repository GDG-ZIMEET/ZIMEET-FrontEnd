import styled from 'styled-components';
import zimeetLoading from '../../../assets/icon/zimeetLoading.svg';

export const ChattingContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

export const LoadingContainer = styled.img.attrs({
  src: zimeetLoading
})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 60%;
  margin: 0 auto;
`;