import { styled } from "styled-components";
import * as I from "../../../../assets/Icons";

export const InputContainer = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 7.5%;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background-color: #EFEFEF;
  justify-content: space-between; 
  z-index: 1000; 
`;

export const ChatInput = styled.input`
  border-radius: 8px;
  height: 100%;
  width: 80%;
  font-size: 17px; 
`;

export const SendButton = styled.button`
  width: 15%;
  height: 75%;
  background-color: #FF6B6A; 
  color: white;
  border-radius: 500px;
  cursor: pointer;
  margin-right: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChattingButton = styled(I.ChattingButton)`
  width: 70%;
  height: 70%;
`;
