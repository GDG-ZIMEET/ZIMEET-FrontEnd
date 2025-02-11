import styled from 'styled-components';

export const ItemHi22Container = styled.div`
  width: 100%; height: 30%;
  background-color: #f6f5fa;
  padding: 3%;
  border-radius: 0.8rem;
  margin-top: 5%;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 12px;
  padding: 5% 2%;
`;

export const HiContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 3%; 
  height: 72%;
`;

export const HiWrpper = styled.div`
  width: 100%; height: 100%;
  align-items: center;
  text-align: center;
  border-radius: 0.8rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 2%;
`;

export const HiQuantity = styled.div`
  height: 65%;
  background-color: black;
  padding: 11%;
  border-top-left-radius: 0.8rem; border-top-right-radius: 0.8rem;
`;

export const HiQuantityText = styled.p`
  color: white;
  font-size: 12px;
  font-weight: 700;
`;

export const HiPrice = styled.div`
  height: 35%;
  background-color: white;
  font-size: 12px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-bottom-left-radius: 0.8rem; border-bottom-right-radius: 0.8rem;
`;
export const OriginPrice = styled.p`
  text-decoration: line-through;
  padding: 2%;
`;
export const DiscountPrice = styled.p`
  font-weight: 700;
  color: #eb4335;
  padding: 2%;
`;