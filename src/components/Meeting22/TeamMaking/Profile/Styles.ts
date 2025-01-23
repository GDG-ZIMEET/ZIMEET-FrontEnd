import styled from "styled-components";
import * as I from "../../../../assets/Icons";

export const MyprofileLayout = styled.div`
  display: flex;
  justify-content: center;
  height: 43%;
  margin-top: 3%;
  margin-bottom: 2%;

  @media (max-width: 768px) {
    @supports (-webkit-touch-callout: none) {
      height: 45%;
    }
  }
`;

export const MyProfileContainer = styled.div`
  height: 100%;
  width: 88%;
  padding: 0 2.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #000000;
`;

export const MyProfileBox1 = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 1% 0 -8% 0;

  @media (max-width: 768px) {
    @supports (-webkit-touch-callout: none) {
      margin: 3% 0 -3% 0;
      width: 95%;
    }
  }
`;

export const MyProfileBox2 = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 3%;
`;

export const ProfileIMG = styled.div`
  height: 70%;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 2%;
`;

export const ProfileCircle = styled(I.ProfileCircle)`
  width: 80%;
  height: 80%;

  @media (max-width: 768px) {
    @supports (-webkit-touch-callout: none) {
      height: 85%;
      width: 85%;
    }
  }
`;

export const Avatar = styled.div`
  position: absolute;
  font-size: 20px;
  font-family: 'TossFaceFontMac', sans-serif;

  @media (max-width: 768px) {
    @supports (-webkit-touch-callout: none) {
      font-size: 14px;
    }
  }
`;

export const Style = styled.div`
  color: #000000;
  font-size: 12px;
  margin-right: 1%;
  margin-bottom: 3%;
`;

export const IdealType = styled.div`
  color: #000000;
  font-size: 12px;
  margin-right: 1%;
  margin-bottom: 3%;
`;

export const PreferredAge = styled.div`
  color: #000000;
  font-size: 12px;
  margin-right: 1%;
  margin-bottom: 3%;
`;
