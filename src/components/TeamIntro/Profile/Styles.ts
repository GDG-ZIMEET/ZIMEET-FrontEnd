import styled from "styled-components";

export const MyprofileLayout = styled.div`
  display: flex;
  justify-content: center;
  height: 35%;
  margin-top: 1%;
  margin-bottom: 2%;
  @media (max-width: 768px) {
    @supports (-webkit-touch-callout: none) {
      height: 36%;
      margin-top: 2%;
    }
  }
`;

export const MyProfileContainer = styled.div`
  height: 100%;
  width: 88%;
  padding: 0 2.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.15);
`;

export const MyProfileBox1 = styled.div`
  width: 100%;
  height: 35%;
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
  width: 95%;
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
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


export const Avatar = styled.div`
  width: 70%;
  border-radius: 50%;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(234, 67, 53, 0.08);
  position: absolute;
  img {
    width: 60%;
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
