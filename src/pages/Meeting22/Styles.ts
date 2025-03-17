import styled from 'styled-components';
import zimeetLoading from '../../assets/icon/zimeetLoading.svg';

export const Meeting22Layout = styled.div`
  padding: 6% 0% 0;
  background-color: #FFFFFF;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
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


export const Meeting22Title = styled.div`
  font-size: 15px;
  margin-left: 3%;
  color: #000000;
  font-weight: 700;
`;


export const Meeting22Container = styled.div`
  height: 78.5%;
`;
