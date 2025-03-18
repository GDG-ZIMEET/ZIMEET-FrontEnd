// 포스터 이미지 import
import ala_poster from '../assets/icon/boothDetail/poster/ala_poster.png';
import bandsilhum_poster from '../assets/icon/boothDetail/poster/bandsilhum_poster.png';
import bastards_poster from '../assets/icon/boothDetail/poster/bastards_poster.jpeg';
import catfactory_poster from '../assets/icon/boothDetail/poster/catfactory_poster.png';
import catholic_poster from '../assets/icon/boothDetail/poster/catholic_poster.png';
import cbo_poster from '../assets/icon/boothDetail/poster/cbo_poster.jpg';
import ccc_poster from '../assets/icon/boothDetail/poster/ccc_poster.png';
import cdz_poster from '../assets/icon/boothDetail/poster/cdz_poster.png';
import cinephile_poster from '../assets/icon/boothDetail/poster/cinephile_poster.jpeg';
import coma_poster from '../assets/icon/boothDetail/poster/coma_poster.jpg';
import coz_poster from '../assets/icon/boothDetail/poster/coz_poster.jpeg';
import default_poster from '../assets/icon/boothDetail/poster/default_poster.svg';
import etude_poster from '../assets/icon/boothDetail/poster/etude_poster.png';
import evc_poster from '../assets/icon/boothDetail/poster/evc_poster.png';
import fom_poster from '../assets/icon/boothDetail/poster/fom_poster.jpeg';
import gahyun_poster from '../assets/icon/boothDetail/poster/gahyun_poster.jpg';
import gdgoc_poster from '../assets/icon/boothDetail/poster/gdgoc_poster.png';
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

const posterMap: { [key: number]: string } = {
  0: default_poster, // 기본 포스터
  1: coz_poster,
  2: sunset_poster,
  3: thebusking_poster,
  4: gahyun_poster,
  5: kusa_poster,
  6: gdgoc_poster,
  7: catfactory_poster,
  8: hwarang_poster,
  9: fom_poster,
  10: ssgy_poster,
  11: default_poster, // 총동연 (x)
  12: default_poster, // 루이너스 (x)
  13: cbo_poster,
  14: cdz_poster,
  15: gigahits_poster,
  16: default_poster, // 세이크리드 (x)
  17: evc_poster,
  18: tumblers_poster,
  19: coma_poster,
  20: ccc_poster,
  21: rotarack_poster,
  22: default_poster, // 협찬예정 (x)
  23: bandsilhum_poster,
  24: yudo_poster,
  25: bastards_poster,
  26: tennis_poster,
  27: cinephile_poster,
  28: taekwondo_poster,
  29: thegame_poster,
  30: ala_poster,
  31: etude_poster,
  32: sophibara_poster,
  33: kickoff_poster,
  34: shield_poster,
  35: catholic_poster,
  36: nonglak_poster,
  37: default_poster, // 애니캣 (x)
  38: default_poster, // 스플렌디드 (x)
  39: default_poster, // 푸드1 (서우푸드)
  40: default_poster, // 푸드4 (써니푸드)
  41: default_poster, // 푸드2 (나드리)
  42: default_poster, // 푸드5 (요기푸드)
  43: default_poster, // 푸드3 (윤셰프)
  44: default_poster, // 푸드6 (김군네초밥)
};

const getPosterComponent = (clubId: number) => {
  return posterMap[clubId] || posterMap[0];
};

export { getPosterComponent };
