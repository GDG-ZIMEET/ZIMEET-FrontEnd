import { styled } from "styled-components";
import * as I from "../../../assets/Icons";

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  width: 86%;
`;
export const BackButton = styled(I.Back)`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const Title = styled.h2`
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  margin-left: 1%;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
`;

export const DeleteIcon = styled.img`
  width: 25px;
  height: 25px;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 10px;
  border-radius: 5px;
  padding: 10px;
`;

export const DropdownItem = styled.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 30px;
  background-color:  #f5f5f5;
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const TrashIcon = styled.img`
  width: 12px;
  height: 12px;
  
`;