import styled from 'styled-components';
import { darken } from 'polished';
import RandomJoin from '../../../assets/icon/MeetingRandom/RandomJoin.svg?react';

export const ButtonLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 15%;
  margin-top: -3%;

  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
    height: 13%;
  }}
`;

export const Button = styled.button<{ $isRandomLoading: boolean }>`
  background-color: ${({ $isRandomLoading }) => ($isRandomLoading ? '#F2F2F2' : '#000000')};
  color: ${({ $isRandomLoading }) => ($isRandomLoading ? '#909090' : 'white')};
  border-radius: 10px; 
  cursor: pointer;
  display: block;
  height: 63%;
  width: 80%;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
    height: 60%;
    width: 80%;
  }}

  &:hover {
    background-color: ${({ $isRandomLoading }) => ($isRandomLoading ? darken(0.1, '#F2F2F2') : darken(0.1, '#000000'))}; 
  }
`;

export const WaitPeople = styled.div`
  font-size: 12px;
  color: #333;
  height: 17%;
  margin-bottom: 2%;
`;

export const RandomJoinIcon = styled(RandomJoin)`
  height: 40%;
  margin-right: 2%;
`;

export const RandomJoinText = styled.div`
  font-size: 17px;
  font-weight: bold;
`;
