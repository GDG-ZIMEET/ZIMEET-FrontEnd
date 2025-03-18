import styled from 'styled-components';

export const IteamLayout = styled.div`
  width: 90%; 
  height: 9%;
  margin: 3% auto 0 auto;
  border-radius: 0.8rem;
  display: flex;
  justify-content: center;
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
  flex: 1; 
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
  b{
    font-weight: 700;
    font-size: 14px;
  }
  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
      margin-right: 9%;
    }
  }
`;

export const BannerPriceWrapper = styled.div`
`;

export const OriginPrice = styled.p`
  font-size: 10px;
  color: white;
  white-space: nowrap;
  text-decoration: line-through;
  margin-left: 30%;
  margin-bottom: 0.3rem;
`;
export const DiscountPrice = styled.p`
  font-size: 14px;
  color: white;
  font-weight: 700;
`;