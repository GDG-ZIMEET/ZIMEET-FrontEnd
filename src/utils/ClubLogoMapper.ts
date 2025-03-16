// 로고 이미지 import
import ala_logo from '../assets/icon/boothDetail/logo/ala_logo.jpg';
import anicat_logo from '../assets/icon/boothDetail/logo/anicat_logo.png';
import bandsilhum_logo from '../assets/icon/boothDetail/logo/bandsilhum_logo.jpg';
import bastards_logo from '../assets/icon/boothDetail/logo/bastards_logo.jpeg';
import catfactory_logo from '../assets/icon/boothDetail/logo/catfactory_logo.png';
import catholic_logo from '../assets/icon/boothDetail/logo/catholic_logo.jpeg';
import cbo_logo from '../assets/icon/boothDetail/logo/cbo_logo.png';
import ccc_logo from '../assets/icon/boothDetail/logo/ccc_logo.png';
import cdz_logo from '../assets/icon/boothDetail/logo/cdz_logo.jpg';
import coma_logo from '../assets/icon/boothDetail/logo/coma_logo.png';
import coz_logo from '../assets/icon/boothDetail/logo/coz_logo.jpeg';
import etude_logo from '../assets/icon/boothDetail/logo/etude_logo.jpeg';
import evc_logo from '../assets/icon/boothDetail/logo/evc_logo.png';
import fom_logo from '../assets/icon/boothDetail/logo/fom_logo.jpg';
import gahyun_logo from '../assets/icon/boothDetail/logo/gahyun_logo.jpg';
import GDGlogo from '../assets/icon/boothDetail/logo/GDGlogo.svg';
import gigahits_logo from '../assets/icon/boothDetail/logo/gigahits_logo.jpg';
import hwarang_logo from '../assets/icon/boothDetail/logo/hwarang_logo.jpeg';
import kickoff_logo from '../assets/icon/boothDetail/logo/kickoff_logo.png';
import kusa_logo from '../assets/icon/boothDetail/logo/kusa_logo.jpg';
import nonglak_logo from '../assets/icon/boothDetail/logo/nonglak_logo.png';
import rotaract_logo from '../assets/icon/boothDetail/logo/rotaract_logo.jpg';
import sacred_logo from '../assets/icon/boothDetail/logo/sacred_logo.jpeg';
import shield_logo from '../assets/icon/boothDetail/logo/shield_logo.jpg';
import sophibara_logo from '../assets/icon/boothDetail/logo/sophibara_logo.png';
import ssgy_logo from '../assets/icon/boothDetail/logo/ssgy_logo.jpg';
import sunset_logo from '../assets/icon/boothDetail/logo/sunset_logo.jpeg';
import taekwondo_logo from '../assets/icon/boothDetail/logo/taekwondo_logo.jpg';
import tennis_logo from '../assets/icon/boothDetail/logo/tennis_logo.jpg';
import thebusking_logo from '../assets/icon/boothDetail/logo/thebusking_logo.jpeg';
import thegame_logo from '../assets/icon/boothDetail/logo/thegame_logo.png';
import tumblers_logo from '../assets/icon/boothDetail/logo/tumblers_logo.png';
import yudo_logo from '../assets/icon/boothDetail/logo/yudo_logo.jpg';

// 부스 clubId에 해당하는 로고 매핑
const logoMap: { [key: number]: string } = {
  0: GDGlogo,
  1: ala_logo,
  2: bandsilhum_logo,
  3: bastards_logo,
  4: catfactory_logo,
  5: catholic_logo,
  6: cbo_logo,
  7: ccc_logo,
  8: cdz_logo,
  9: coma_logo,
  10: coz_logo,
  11: etude_logo,
  12: evc_logo,
  13: fom_logo,
  14: gahyun_logo,
  15: gigahits_logo,
  16: hwarang_logo,
  17: kickoff_logo,
  18: kusa_logo,
  19: nonglak_logo,
  20: rotaract_logo,
  21: shield_logo,
  22: sophibara_logo,
  23: ssgy_logo,
  24: sunset_logo,
  25: taekwondo_logo,
  26: tennis_logo,
  27: thebusking_logo,
  28: thegame_logo,
  29: tumblers_logo,
  30: yudo_logo
};

const getLogoComponent = (clubId: number) => {
  return logoMap[clubId] || logoMap[0];
};

export { getLogoComponent };
