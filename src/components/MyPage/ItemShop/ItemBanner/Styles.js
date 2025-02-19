import styled from 'styled-components';

export const BannerContainer = styled.div`
  width: 100%;
  height: ${({ isLoggedIn }) => (isLoggedIn ? '13%' : '55%')}; 
  border-radius: 0.8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5%;
  padding: 2%;
  background: linear-gradient(to right, #4285F4, #00AA47);
`;

export const BannerCommentWrapper = styled.div``;
export const BannerTitle = styled.p`
  color: white;
  font-weight: 700;
  font-size: 14px;
  padding: 1.5% 0;
`;
export const BannerText = styled.p`
  color: white;
  font-size: 12px;
  padding: 1.5% 0;
`;

export const BannerPriceWrapper = styled.div``;
export const OriginPrice = styled.p`
  font-size: 10px;
  color: white;
  text-decoration: line-through;
`;
export const DiscountPrice = styled.p`
  font-size: 14px;
  color: white;
  font-weight: 700;
`;
