// 로고 이미지 import (경로 수정됨)
import ala_logo from '../../assets/icon/boothDetail/neulpum/logo/ala_logo.jpg';
import anicat_logo from '../../assets/icon/boothDetail/neulpum/logo/anicat_logo.png';
import bandsilhum_logo from '../../assets/icon/boothDetail/neulpum/logo/bandsilhum_logo.jpg';
import bastards_logo from '../../assets/icon/boothDetail/neulpum/logo/bastards_logo.jpeg';
import catfactory_logo from '../../assets/icon/boothDetail/neulpum/logo/catfactory_logo.png';
import catholic_logo from '../../assets/icon/boothDetail/neulpum/logo/catholic_logo.jpeg';
import cbo_logo from '../../assets/icon/boothDetail/neulpum/logo/cbo_logo.png';
import ccc_logo from '../../assets/icon/boothDetail/neulpum/logo/ccc_logo.png';
import cdz_logo from '../../assets/icon/boothDetail/neulpum/logo/cdz_logo.jpg';
import coma_logo from '../../assets/icon/boothDetail/neulpum/logo/coma_logo.png';
import coz_logo from '../../assets/icon/boothDetail/neulpum/logo/coz_logo.jpeg';
import etude_logo from '../../assets/icon/boothDetail/neulpum/logo/etude_logo.jpeg';
import evc_logo from '../../assets/icon/boothDetail/neulpum/logo/evc_logo.png';
import fom_logo from '../../assets/icon/boothDetail/neulpum/logo/fom_logo.jpg';
import gahyun_logo from '../../assets/icon/boothDetail/neulpum/logo/gahyun_logo.jpg';
import GDGlogo from '../../assets/icon/boothDetail/neulpum/logo/GDGlogo.svg';
import gigahits_logo from '../../assets/icon/boothDetail/neulpum/logo/gigahits_logo.jpg';
import hwarang_logo from '../../assets/icon/boothDetail/neulpum/logo/hwarang_logo.jpeg';
import kickoff_logo from '../../assets/icon/boothDetail/neulpum/logo/kickoff_logo.png';
import kusa_logo from '../../assets/icon/boothDetail/neulpum/logo/kusa_logo.jpg';
import nonglak_logo from '../../assets/icon/boothDetail/neulpum/logo/nonglak_logo.png';
import rotaract_logo from '../../assets/icon/boothDetail/neulpum/logo/rotaract_logo.jpg';
import sacred_logo from '../../assets/icon/boothDetail/neulpum/logo/sacred_logo.jpeg';
import shield_logo from '../../assets/icon/boothDetail/neulpum/logo/shield_logo.jpg';
import sophibara_logo from '../../assets/icon/boothDetail/neulpum/logo/sophibara_logo.png';
import ssgy_logo from '../../assets/icon/boothDetail/neulpum/logo/ssgy_logo.jpg';
import sunset_logo from '../../assets/icon/boothDetail/neulpum/logo/sunset_logo.jpeg';
import taekwondo_logo from '../../assets/icon/boothDetail/neulpum/logo/taekwondo_logo.jpg';
import tennis_logo from '../../assets/icon/boothDetail/neulpum/logo/tennis_logo.jpg';
import thebusking_logo from '../../assets/icon/boothDetail/neulpum/logo/thebusking_logo.jpeg';
import thegame_logo from '../../assets/icon/boothDetail/neulpum/logo/thegame_logo.png';
import tumblers_logo from '../../assets/icon/boothDetail/neulpum/logo/tumblers_logo.png';
import yudo_logo from '../../assets/icon/boothDetail/neulpum/logo/yudo_logo.jpg';

const logoMap: { [key: number]: string } = {
  0: GDGlogo, // 기본 로고
  1: coz_logo,
  2: sunset_logo,
  3: thebusking_logo,
  4: gahyun_logo,
  5: kusa_logo,
  6: GDGlogo,
  7: catfactory_logo,
  8: hwarang_logo,
  9: fom_logo,
  10: ssgy_logo,
  11: GDGlogo, // 총동연 (x)
  12: GDGlogo, // 루이너스 (x)
  13: cbo_logo,
  14: cdz_logo,
  15: gigahits_logo,
  16: sacred_logo,
  17: evc_logo,
  18: tumblers_logo,
  19: coma_logo,
  20: ccc_logo,
  21: rotaract_logo,
  22: GDGlogo, // 협찬예정 (x)
  23: bandsilhum_logo,
  24: yudo_logo,
  25: bastards_logo,
  26: tennis_logo,
  27: GDGlogo,
  28: taekwondo_logo,
  29: thegame_logo,
  30: ala_logo,
  31: etude_logo,
  32: sophibara_logo,
  33: kickoff_logo,
  34: shield_logo,
  35: catholic_logo,
  36: nonglak_logo,
  37: anicat_logo,
  38: GDGlogo, // 스플렌디드 (x)
  39: GDGlogo, // 푸드1 (서우푸드)
  40: GDGlogo, // 푸드4 (써니푸드)
  41: GDGlogo, // 푸드2 (나드리)
  42: GDGlogo, // 푸드5 (요기푸드)
  43: GDGlogo, // 푸드3 (윤셰프)
  44: GDGlogo, // 푸드6 (김군네초밥)
};

const getLogoComponent = (clubId: number) => {
  return logoMap[clubId] || logoMap[0];
};

export { getLogoComponent };
