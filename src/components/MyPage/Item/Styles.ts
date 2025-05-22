import styled from 'styled-components';

export const IteamLayout = styled.div`
  width: 90%; 
  height: 9%;
  margin: 3% auto 0 auto;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  background: linear-gradient(to right, #4285F4, #00AA47);

  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
      height: 9.8%;
      margin: 4% auto 0 auto;
    }
  }
`;


//아이템 

export const BannerContainer = styled.div`
  width: 90%; 
  border-radius: 0.8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 3%;
`;

export const BannerTitle = styled.p`
  color: white;
  font-size: 12px;
  line-height: 1.5;
  margin-left: 3.5%;
  font-family: Pretendard, sans-serif;
  b{
    font-weight: 700;
    font-size: 14px;

    @media (max-width: 350px) and (max-height: 600px) {
    font-size: 12px;
  }
  }
  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
      margin-right: 9%;
    }
  }
  @media (max-width: 350px) and (max-height: 600px) {
      font-size: 10px;
    }
  
`;

export const BannerPriceWrapper = styled.div`
  margin-left: auto;
  margin-right: 4.5%;
`;

export const OriginPrice = styled.p`
  font-size: 10px;
  color: white;
  white-space: nowrap;
  text-decoration: line-through;
  margin-left: 30%;
  margin-bottom: 0.3rem;
  font-family: Pretendard, sans-serif;

  @media (max-width: 350px) and (max-height: 600px) {
    font-size: 9px;
  }
`;
export const DiscountPrice = styled.p`
  font-size: 14px;
  color: white;
  font-weight: 700;
  font-family: Pretendard, sans-serif;

  @media (max-width: 350px) and (max-height: 600px) {
    font-size: 12px;
  }
`;