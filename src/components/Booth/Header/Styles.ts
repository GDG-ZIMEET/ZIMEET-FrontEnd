import styled from 'styled-components';
import * as I from '../../../assets/Icons';

export const HeaderLayout = styled.div`
  display: flex;
  height: 7%;
  background-color: #ffffff;
  box-sizing: border-box;
  align-items: flex-end;
  svg {
    cursor: pointer;
  }

  .headerLogo {
    display: flex;
    align-items: center;
    margin-top: 0%
  }

  @media (max-width: 768px) {
    padding: 0 1%;
    gap: 4px;
    .headerLogo {
      margin-bottom: -1%; 
    }
  }

  @media (min-width: 768px) {
    padding: 0 1%;
    gap: 4px;
  }


  @media (max-width: 393px) {
    gap: 4px;
  }
`;

export const G = styled(I.G)`
  cursor: pointer;
`;

export const GGrey = styled(I.GGrey)`
  cursor: pointer;
`;

export const D = styled(I.D)`
  cursor: pointer;
`;

export const Dgrey = styled(I.DGrey)`
  cursor: pointer;
`;

export const G2 = styled(I.G)`
  cursor: pointer;
`;

export const Ateway = styled(I.ateway)`
`;

export const DGoc = styled(I.DGoCCUK)`
`;

export const HeaderLogo = styled(I.HeaderLogo)`
`;

export const Ating = styled(I.Ating)`
`;

export const DGoCCUK = styled(I.DGoCCUK)`
`;
