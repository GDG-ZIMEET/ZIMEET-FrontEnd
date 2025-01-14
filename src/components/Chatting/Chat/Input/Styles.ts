import { styled } from "styled-components";
import * as I from "../../../../assets/Icons";

export const InputContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 7.5%;
  display: flex;
  align-items: center;
  padding: 1%;
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
  width: 13%;
  height: 75%;
  background-color: #EA4335; 
  color: white;
  border-radius: 500px;
  cursor: pointer;
  margin-right: 3%;
`;

export const ChattingButton = styled(I.ChattingButton)`
  width: 90%;
  height: 90%;
  margin: 4% 0 0 0;
`;
