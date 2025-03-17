//학년
export const gradeOptions = ["FIRST", "SECOND", "THIRD", "FOURTH"];
export const gradeDisplayOptions = [1, 2, 3, 4];

export const mappinggrade = (grade: string): string => {
  const index = gradeOptions.indexOf(grade);
  return index !== -1 ? gradeDisplayOptions[index].toString() : '';
};

//학과
export const majorMap: { [key: string]: string } = {
  "인문계열": "인문계열",
  "국어국문학과": "국어국문",
  "철학과": "철학",
  "국사학과": "국사",
  "아동학과": "아동",
  "어문계열": "어문계열",
  "영어영문학부": "영문",
  "중국언어문화학과": "중문",
  "일어일본문화학과": "일문",
  "프랑스어문화학과": "프문",
  "음악과": "음악",
  "신학과": "신학",
  "사회과학계열": "사과계열",
  "사회복지학과": "사복",
  "심리학과": "심리",
  "사회학과": "사회",
  "특수교육과": "특교",
  "경영계열": "경영계열",
  "경영학과": "경영",
  "회계학과": "회계",
  "국제법정경계열": "국법정계열",
  "국제학부": "국제",
  "법학과": "법학",
  "경제학과": "경제",
  "행정학과": "행정",
  "글로벌경영학부": "글경",
  "자연과학계열": "자과계열",
  "화학과": "화학",
  "수학과": "수학",
  "물리학과": "물리",
  "생명과학계열": "생과계열",
  "공간디자인소비자학과": "공소",
  "의류학과": "의류",
  "식품영양학과": "식영",
  "의생명과학과": "의생명",
  "약학과": "약학",
  "간호학과": "간호",
  "의학과": "의대",
  "ICT공학계열": "ICT계열",
  "컴퓨터정보공학부": "컴공",
  "미디어기술콘텐츠학과": "미콘",
  "정보통신전자공학부": "정통",
  "바이오융합공학계열": "바융공계열",
  "바이오메디컬화학공학과": "바메화공",
  "에너지환경공학과": "에환공",
  "생명공학과": "생명",
  "인공지능학과": "인공지능",
  "데이터사이언스학과": "데사",
  "바이오메디컬소프트웨어학과": "바메솦",
  "자유전공학부": "자전",
  "자연공학계열": "자연공학",
  "인문사회과학계열": "인문사회"
};

  export const mappingMajor = (major: string): string => {
    return majorMap[major] || '';
  };
  
//mbti
export const mbtiOptions = [
    'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 
    'ISTP', 'ISFP', 'ESTP', 'ESFP', 
    'INTJ', 'INTP', 'ENTJ', 'ENTP', 
    'INFJ', 'INFP', 'ENFJ', 'ENFP'
];

//음악
export const musicMap: { [key: string]: string } = {
    'K-POP': 'KPOP',
    'POP': 'POP',
    '발라드': 'BALLAD',
    '힙합': 'HIPHOP',
    'J-POP': 'JPOP',
    '재즈': 'JAZZ',
    '밴드': 'BAND',
    '클래식': 'CLASSICAL',
  };
  
export const mappingMusic = (music: string): string => {
  return Object.keys(musicMap).find(key => musicMap[key] === music) || '';
};
  
  //스타일 
  export const styleMap: { [key: string]: string } = {
    '캐주얼': 'CASUAL',
    '스트릿': 'STREET',
    '단정': 'NEAT',
    '빈티지': 'VINTAGE',
    '힙': 'HEAP',
    '스포티': 'SPORTY',
    '포멀': 'FORMAL',
    '큐티': 'CUTIE',
  };
  
  export const mappingStyle = (style: string): string => {
    return Object.keys(styleMap).find(key => styleMap[key] === style) || '';
  };
  
  //이상형 나이 
  export const ageMap: { [key: string]: string } = {
    '연상': 'OLDER',
    '연하': 'YOUNGER',
    '동갑': 'SAME',
    '무관': 'NO_MATTER',
  };

  export const mappingAge = (age: string): string => {
    return Object.keys(ageMap).find(key => ageMap[key] === age) || '';
  };
  
  //이상형 유형
  export const faceMap: { [key: string]: string } = {
    '강아지': 'DOG',
    '고양이': 'CAT',
    '햄스터': 'HAMSTER',
    '여우': 'FOX',
    '곰': 'BEAR',
    '공룡': 'DINOSAUR',
    '토끼': 'RABBIT',
    '늑대': 'WOLF',
  };

  export const mappingFace = (face: string): string => {
    return Object.keys(faceMap).find(key => faceMap[key] === face) || '';
  };
  
  