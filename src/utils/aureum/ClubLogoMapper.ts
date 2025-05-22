import shield_logo from '../../assets/icon/boothDetail/aureum/logo/shield.jpg';
import gasik_logo from '../../assets/icon/boothDetail/aureum/logo/gasik.jpeg';
import administration_logo from '../../assets/icon/boothDetail/aureum/logo/administration.jpg';
import biomedical_logo from '../../assets/icon/boothDetail/aureum/logo/biomedical.png';
import human_ecology_logo from '../../assets/icon/boothDetail/aureum/logo/human_ecology.png';
import psychology_logo from '../../assets/icon/boothDetail/aureum/logo/psychology.jpg';
import nonglak_logo from '../../assets/icon/boothDetail/aureum/logo/nonglak.jpeg';
import ccc_logo from '../../assets/icon/boothDetail/aureum/logo/ccc.png';
import obz_logo from '../../assets/icon/boothDetail/aureum/logo/obz.jpeg';
import human_rights_logo from '../../assets/icon/boothDetail/aureum/logo/human_rights.png';
import cukfriends_logo from '../../assets/icon/boothDetail/aureum/logo/cukfriends.png';
import play_logo from '../../assets/icon/boothDetail/aureum/logo/play.jpg';
import humanities_logo from '../../assets/icon/boothDetail/aureum/logo/humanities.png';
import caritas_logo from '../../assets/icon/boothDetail/aureum/logo/caritas.png';
import bastards_logo from '../../assets/icon/boothDetail/aureum/logo/bastards.jpeg';
import forlong_logo from '../../assets/icon/boothDetail/aureum/logo/forlong.png';
import science_logo from '../../assets/icon/boothDetail/aureum/logo/science.jpg';
import international_logo from '../../assets/icon/boothDetail/aureum/logo/international.jpg';
import special_education_logo from '../../assets/icon/boothDetail/aureum/logo/special_education.jpeg';
import judo_logo from '../../assets/icon/boothDetail/aureum/logo/judo.jpeg';
import hantteut_logo from '../../assets/icon/boothDetail/aureum/logo/hantteut.png';
import taekwondo_logo from '../../assets/icon/boothDetail/aureum/logo/taekwondo.jpg';
import media_logo from '../../assets/icon/boothDetail/aureum/logo/media.jpg';
import ai_logo from '../../assets/icon/boothDetail/aureum/logo/ai.png';
import cbo_logo from '../../assets/icon/boothDetail/aureum/logo/cbo.jpeg';
import the_game_logo from '../../assets/icon/boothDetail/aureum/logo/the_game.png';
import street_of_blue_logo from '../../assets/icon/boothDetail/aureum/logo/street_of_blue.jpg';
import social_plus_logo from '../../assets/icon/boothDetail/aureum/logo/social_plus.jpg';
import mp_logo from '../../assets/icon/boothDetail/aureum/logo/mp.jpg';
import physical_logo from '../../assets/icon/boothDetail/aureum/logo/physical.jpeg';
import mir_logo from '../../assets/icon/boothDetail/aureum/logo/mir.jpg';
import cinephile_logo from '../../assets/icon/boothDetail/aureum/logo/cinephile.jpeg';
import kewl_logo from '../../assets/icon/boothDetail/aureum/logo/kewl.jpeg';
import nalagadae_logo from '../../assets/icon/boothDetail/aureum/logo/nalagadae.png';
import hoeg_logo from '../../assets/icon/boothDetail/aureum/logo/hoeg.png';
import pocu_logo from '../../assets/icon/boothDetail/aureum/logo/pocu.png';
import etude_logo from '../../assets/icon/boothDetail/aureum/logo/etude.jpg';
import chemical_logo from '../../assets/icon/boothDetail/aureum/logo/chemical.jpeg';
import energy_environmental_logo from '../../assets/icon/boothDetail/aureum/logo/energy_environmental.jpg';
import chinese_logo from '../../assets/icon/boothDetail/aureum/logo/chinese.jpeg';
import data_science_logo from '../../assets/icon/boothDetail/aureum/logo/data_science.jpeg';
import gahong_logo from '../../assets/icon/boothDetail/aureum/logo/gahong.png';
import global_logo from '../../assets/icon/boothDetail/aureum/logo/global.jpeg';
import gdgoc_logo from '../../assets/icon/boothDetail/aureum/logo/gdgoc.png';
import aiesec_logo from '../../assets/icon/boothDetail/aureum/logo/aiesec.png';
import computer_logo from '../../assets/icon/boothDetail/aureum/logo/computer.png';

const logoMap: { [key: number]: string } = {
    1: hantteut_logo,
    2: mp_logo,
    3: gdgoc_logo, // 철의맛 (로고 없음)
    4: special_education_logo,
    5: ccc_logo,
    6: gdgoc_logo, // A.L.A (로고 없음)
    7: cbo_logo,
    8: kewl_logo,
    9: judo_logo,
    10: caritas_logo,
    11: gdgoc_logo,
    12: gdgoc_logo, // 제휴부스 (로고 없음)
    13: pocu_logo,
    14: forlong_logo,
    15: gdgoc_logo, // FestiMate (로고 없음)
    16: obz_logo,
    17: gahong_logo,
    18: science_logo,
    19: etude_logo,
    20: psychology_logo,
    21: gdgoc_logo, // 공과대학 (로고 없음)
    22: nalagadae_logo,
    23: aiesec_logo,
    24: gasik_logo,
    25: cukfriends_logo,
    26: humanities_logo,
    27: gdgoc_logo, // MOD (로고 없음)
    28: social_plus_logo,
    29: mir_logo,
    30: shield_logo,
    31: play_logo,
    32: gdgoc_logo, // 가대사랑 (로고 없음)
    33: cinephile_logo,
    34: gdgoc_logo, // 중앙운영본부 (로고 없음)
    35: chemical_logo,
    36: human_rights_logo,
    37: gdgoc_logo, // 텀블러즈 (로고 없음)
    38: hoeg_logo,
    39: physical_logo,
    40: nonglak_logo,
    41: gdgoc_logo, // 국제교류처 (로고 없음)
    42: gdgoc_logo, // 약학대 (로고 없음)
    43: administration_logo,
    44: gdgoc_logo, // 국문 (로고 없음)
    45: data_science_logo,
    46: gdgoc_logo, // 프문 (로고 없음)
    47: computer_logo,
    48: gdgoc_logo, // 일문 (로고 없음)
    49: gdgoc_logo, // 철학 (로고 없음)
    50: international_logo,
    51: global_logo,
    52: taekwondo_logo,
    53: gdgoc_logo, // 국사 (로고 없음)
    54: bastards_logo,
    55: energy_environmental_logo,
    56: biomedical_logo,
    57: global_logo,
    58: chinese_logo,
    59: global_logo,
    60: street_of_blue_logo,
    61: human_ecology_logo,
    62: social_plus_logo,
    63: media_logo,
    64: gdgoc_logo, // 영문 (로고 없음)
    65: chemical_logo,
    66: biomedical_logo,
    67: ai_logo,
    68: gdgoc_logo, // 유학생 (로고 없음)
};

const getLogoComponent = (clubId: number) => {
    return logoMap[clubId] || gdgoc_logo;
};

export { getLogoComponent }; 