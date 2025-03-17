// 포스터 이미지 import
import ala_poster from '../assets/icon/boothDetail/poster/ala_poster.png';
import bandsilhum_poster from '../assets/icon/boothDetail/poster/bandsilhum_poster.png';
import bastards_poster from '../assets/icon/boothDetail/poster/bastards_poster.jpeg';
import catfactory_poster from '../assets/icon/boothDetail/poster/catfactory_poster.png';
import catholic_poster from '../assets/icon/boothDetail/poster/catholic_poster.png';
import cbo_poster from '../assets/icon/boothDetail/poster/cbo_poster.jpg';
import ccc_poster from '../assets/icon/boothDetail/poster/ccc_poster.png';
import cdz_poster from '../assets/icon/boothDetail/poster/cdz_poster.png';
import coma_poster from '../assets/icon/boothDetail/poster/coma_poster.jpg';
import coz_poster from '../assets/icon/boothDetail/poster/coz_poster.jpeg';
import default_poster from '../assets/icon/boothDetail/poster/default_poster.svg';
import etude_poster from '../assets/icon/boothDetail/poster/etude_poster.png';
import evc_poster from '../assets/icon/boothDetail/poster/evc_poster.png';
import fom_poster from '../assets/icon/boothDetail/poster/fom_poster.jpeg';
import gahyun_poster from '../assets/icon/boothDetail/poster/gahyun_poster.jpg';
import gigahits_poster from '../assets/icon/boothDetail/poster/gigahits_poster.jpg';
import hwarang_poster from '../assets/icon/boothDetail/poster/hwarang_poster.png';
import kickoff_poster from '../assets/icon/boothDetail/poster/kickoff_poster.png';
import kusa_poster from '../assets/icon/boothDetail/poster/kusa_poster.png';
import nonglak_poster from '../assets/icon/boothDetail/poster/nonglak_poster.png';
import rotarack_poster from '../assets/icon/boothDetail/poster/rotarack_poster.jpg';
import shield_poster from '../assets/icon/boothDetail/poster/shield_poster.jpg';
import sophibara_poster from '../assets/icon/boothDetail/poster/sophibara_poster.png';
import ssgy_poster from '../assets/icon/boothDetail/poster/ssgy_poster.jpg';
import sunset_poster from '../assets/icon/boothDetail/poster/sunset_poster.jpeg';
import taekwondo_poster from '../assets/icon/boothDetail/poster/taekwondo_poster.jpg';
import tennis_poster from '../assets/icon/boothDetail/poster/tennis_poster.png';
import thebusking_poster from '../assets/icon/boothDetail/poster/thebusking_poster.jpeg';
import thegame_poster from '../assets/icon/boothDetail/poster/thegame_poster.jpg';
import tumblers_poster from '../assets/icon/boothDetail/poster/tumblers_poster.jpeg';
import yudo_poster from '../assets/icon/boothDetail/poster/yudo_poster.jpg';

// 부스 clubId에 해당하는 상세 포스터 매핑
const posterMap: { [key: number]: string } = {
  0: default_poster,
  1: ala_poster,
  2: bandsilhum_poster,
  3: bastards_poster,
  4: catfactory_poster,
  5: catholic_poster,
  6: cbo_poster,
  7: ccc_poster,
  8: cdz_poster,
  9: coma_poster,
  10: coz_poster,
  11: etude_poster,
  12: evc_poster,
  13: fom_poster,
  14: gahyun_poster,
  15: gigahits_poster,
  16: hwarang_poster,
  17: kickoff_poster,
  18: kusa_poster,
  19: nonglak_poster,
  20: rotarack_poster,
  21: shield_poster,
  22: sophibara_poster,
  23: ssgy_poster,
  24: sunset_poster,
  25: taekwondo_poster,
  26: tennis_poster,
  27: thebusking_poster,
  28: thegame_poster,
  29: tumblers_poster,
  30: yudo_poster
};

const getPosterComponent = (clubId: number) => {
  return posterMap[clubId] || posterMap[0];
};

export { getPosterComponent };
