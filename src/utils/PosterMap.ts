import * as I from '../assets/Icons';

// 부스 clubId에 해당하는 포스터 매핑
const posterMap: { [key: number]: React.FunctionComponent<React.SVGProps<SVGSVGElement>> } = {
  1: I.Houh,
  2: I.SSine,
  3: I.Coma,
  4: I.Shield,
  5: I.Ala,
  6: I.Gdgoc,
  7: I.Anicat,
  8: I.Youdo,
  9: I.Cotrang,
  10: I.KickOff,
  11: I.PhotoZone,
  12: I.Piano,
};

// 부스 clubId에 해당하는 로고 매핑
const logoMap: { [key: number]: React.FunctionComponent<React.SVGProps<SVGSVGElement>> } = {
  6: I.CircleLogo,
};

const getPosterComponent = (clubId: number) => {
  return posterMap[clubId];
};

//로고 기본값 설정
const getLogoComponent = (clubId: number) => {
  return logoMap[clubId] || I.NonLogo;
};

export { getPosterComponent, getLogoComponent };