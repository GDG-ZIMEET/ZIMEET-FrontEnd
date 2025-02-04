import styled from "styled-components";
import * as I from "../../../../assets/Icons";

export const ProfileDetailContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    @supports (-webkit-touch-callout: none) {
      width: 23%;
      height: 100%;
    }
  }
`;

export const ProfileDetailBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  position: relative;
  margin-bottom: 3%;
`;

export const PinkCircle = styled(I.PinkCircle)`
  width: 93%;
  height: 93%;

  @media (max-width: 768px) {
    @supports (-webkit-touch-callout: none) {
      height: 85%;
      width: 85%;
    }
  }
`;

export const BlueCircle = styled(I.BlueCircle)`
  width: 93%;
  height: 93%;

  @media (max-width: 768px) {
    @supports (-webkit-touch-callout: none) {
      height: 85%;
      width: 85%;
    }
  }
`;

export const Styles = styled.div`
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  color: ${({ isBlue }) => (isBlue ? '#4285F4' : '#EA4335')};

  @media (max-width: 768px) {
    @supports (-webkit-touch-callout: none) {
      font-size: 12px;
    }
  }
`;

export const InfoTitle = styled.div`
  color: #000000;
  font-size: 12px;
  margin-right: 1%;

  @media (max-width: 768px) {
    @supports (-webkit-touch-callout: none) {
      font-size: 10px;
    }
  }
`;
