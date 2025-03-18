import styled from 'styled-components';
import * as I from '../../../../assets/Icons';

export const ItemHi22Container = styled.div`
  width: 100%; 
  height: 20%;
  background-color: #f6f5fa;
  padding: 4% 4% 4% 4%;
  border-radius: 0.8rem;
  margin-top: 3%;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 12px;
  margin-bottom: 2%;
`;

export const HiContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 3%; 
  height: 72%;
`;

export const HiWrpper = styled.div`
  width: 100%; 
  flex: 1;
  align-items: center;
  text-align: center;
  border-radius: 0.8rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
`;

export const HiQuantity = styled.div`
  height: 65%;
  background-color: black;
  padding: 10% 10% 10% 10%;
  border-top-left-radius: 0.8rem; 
  border-top-right-radius: 0.8rem;
`;

export const HiQuantityText = styled.p`
  color: white;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 2%;
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

export const Hi1 = styled(I.Hi1)`
  width: 63%;
  height: 90%;
`;

export const Hi3 = styled(I.Hi3)`
  width: 100%;
  height: 70%;
  margin-top: 5%;
`;

export const Hi10 = styled(I.Hi10)`
  width: 90%;
  height: 85%;
  margin-top: 2%;
`;

export const T1 = styled(I.Ticket1)`
  width: 63%;
  height: 90%;
`;

export const T3 = styled(I.Ticket3)`
  width: 100%;
  height: 70%;
  margin-top: 5%;
`;

export const T8 = styled(I.Ticket8)`
  width: 90%;
  height: 85%;
  margin-top: 2%;
`;
export const TicketsContainer = styled.div`
  width: 100%; 
  height: 20%;
  background-color: #f6f5fa;
  padding: 5% 5% 3% 5%;
  border-radius: 0.8rem;
  margin-top: 3%;
`;