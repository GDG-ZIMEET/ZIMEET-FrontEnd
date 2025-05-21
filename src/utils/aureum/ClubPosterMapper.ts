import shield_poster from '../../assets/icon/boothDetail/aureum/poster/shield.jpg';
import gasik_poster from '../../assets/icon/boothDetail/aureum/poster/gasik.jpeg';
import administration_poster from '../../assets/icon/boothDetail/aureum/poster/administration.png';
import biomedical_poster from '../../assets/icon/boothDetail/aureum/poster/biomedical.jpeg';
import human_ecology_poster from '../../assets/icon/boothDetail/aureum/poster/human_ecology.jpg';
import psychology_poster from '../../assets/icon/boothDetail/aureum/poster/psychology.jpg';
import nonglak_poster from '../../assets/icon/boothDetail/aureum/poster/nonglak.jpeg';
import ccc_poster from '../../assets/icon/boothDetail/aureum/poster/ccc.png';
import obz_poster from '../../assets/icon/boothDetail/aureum/poster/obz.jpeg';
import human_rights_poster from '../../assets/icon/boothDetail/aureum/poster/human_rights.png';
import cukfriends_poster from '../../assets/icon/boothDetail/aureum/poster/cukfriends.jpeg';
import play_poster from '../../assets/icon/boothDetail/aureum/poster/play.jpeg';
import humanities_poster from '../../assets/icon/boothDetail/aureum/poster/humanities.png';
import caritas_poster from '../../assets/icon/boothDetail/aureum/poster/caritas.png';
import bastards_poster from '../../assets/icon/boothDetail/aureum/poster/bastards.jpeg';
import forlong_poster from '../../assets/icon/boothDetail/aureum/poster/forlong.png';
import science_poster from '../../assets/icon/boothDetail/aureum/poster/science.png';
import international_poster from '../../assets/icon/boothDetail/aureum/poster/international.jpg';
import special_education_poster from '../../assets/icon/boothDetail/aureum/poster/special_education.jpeg';
import judo_poster from '../../assets/icon/boothDetail/aureum/poster/judo.jpeg';
import hantteut_poster from '../../assets/icon/boothDetail/aureum/poster/hantteut.jpg';
import taekwondo_poster from '../../assets/icon/boothDetail/aureum/poster/taekwondo.jpg';
import media_poster from '../../assets/icon/boothDetail/aureum/poster/media.png';
import ai_poster from '../../assets/icon/boothDetail/aureum/poster/ai.jpeg';
import cbo_poster from '../../assets/icon/boothDetail/aureum/poster/cbo.jpeg';
import the_game_poster from '../../assets/icon/boothDetail/aureum/poster/the_game.png';
import social_plus_poster from '../../assets/icon/boothDetail/aureum/poster/social_plus.jpg';
import mp_poster from '../../assets/icon/boothDetail/aureum/poster/mp.jpg';
import physical_poster from '../../assets/icon/boothDetail/aureum/poster/physical.png';
import mir_poster from '../../assets/icon/boothDetail/aureum/poster/mir.png';
import cinephile_poster from '../../assets/icon/boothDetail/aureum/poster/cinephile.jpeg';
import kewl_poster from '../../assets/icon/boothDetail/aureum/poster/kewl.jpeg';
import nalagadae_poster from '../../assets/icon/boothDetail/aureum/poster/nalagadae.png';
import hoeg_poster from '../../assets/icon/boothDetail/aureum/poster/hoeg.png';
import pocu_poster from '../../assets/icon/boothDetail/aureum/poster/pocu.png';
import etude_poster from '../../assets/icon/boothDetail/aureum/poster/etude.jpg';
import chemical_poster from '../../assets/icon/boothDetail/aureum/poster/chemical.png';
import energy_environmental_poster from '../../assets/icon/boothDetail/aureum/poster/energy_environmental.png';
import chinese_poster from '../../assets/icon/boothDetail/aureum/poster/chinese.png';
import data_science_poster from '../../assets/icon/boothDetail/aureum/poster/data_science.jpg';
import gahong_poster from '../../assets/icon/boothDetail/aureum/poster/gahong.png';
import global_poster from '../../assets/icon/boothDetail/aureum/poster/global.png';
import gdgoc_poster from '../../assets/icon/boothDetail/aureum/poster/gdgoc.jpg';
import aiesec_poster from '../../assets/icon/boothDetail/aureum/poster/aiesec.png';
import computer_poster from '../../assets/icon/boothDetail/aureum/poster/computer.jpg';
import default_poster from '../../assets/icon/boothDetail/aureum/poster/default_poster.svg';

const posterMap: { [key: number]: string } = {
    1: hantteut_poster,
    2: mp_poster,
    3: default_poster, // 철의맛 (포스터 없음)
    4: special_education_poster,
    5: ccc_poster,
    6: default_poster, // A.L.A (포스터 없음)
    7: cbo_poster,
    8: kewl_poster,
    9: judo_poster,
    10: caritas_poster,
    11: gdgoc_poster,
    12: default_poster, // 제휴부스 (포스터 없음)
    13: pocu_poster,
    14: forlong_poster,
    15: default_poster, // FestiMate (포스터 없음)
    16: obz_poster,
    17: gahong_poster,
    18: science_poster,
    19: etude_poster,
    20: psychology_poster,
    21: default_poster, // 공과대학 (포스터 없음)
    22: nalagadae_poster,
    23: aiesec_poster,
    24: gasik_poster,
    25: cukfriends_poster,
    26: humanities_poster,
    27: default_poster, // MOD (포스터 없음)
    28: social_plus_poster,
    29: mir_poster,
    30: shield_poster,
    31: play_poster,
    32: default_poster, // 가대사랑 (포스터 없음)
    33: cinephile_poster,
    34: default_poster, // 중앙운영본부 (포스터 없음)
    35: chemical_poster,
    36: human_rights_poster,
    37: default_poster, // 텀블러즈 (포스터 없음)
    38: hoeg_poster,
    39: physical_poster,
    40: nonglak_poster,
    41: default_poster, // 국제교류처 (포스터 없음)
    42: default_poster, // 약학대 (포스터 없음)
    43: administration_poster,
    44: default_poster, // 국문 (포스터 없음)
    45: data_science_poster,
    46: default_poster, // 프문 (포스터 없음)
    47: computer_poster,
    48: default_poster, // 일문 (포스터 없음)
    49: default_poster, // 철학 (포스터 없음)
    50: international_poster,
    51: global_poster,
    52: taekwondo_poster,
    53: default_poster, // 국사 (포스터 없음)
    54: bastards_poster,
    55: energy_environmental_poster,
    56: biomedical_poster,
    57: global_poster,
    58: chinese_poster,
    59: global_poster,
    60: the_game_poster,
    61: human_ecology_poster,
    62: social_plus_poster,
    63: media_poster,
    64: default_poster, // 영문 (포스터 없음)
    65: chemical_poster,
    66: biomedical_poster,
    67: ai_poster,
    68: default_poster, // 유학생 (포스터 없음)
};

const getPosterComponent = (clubId: number) => {
    return posterMap[clubId] || default_poster; 
};

export { getPosterComponent }; 