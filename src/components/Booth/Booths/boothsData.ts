export const boothsData = [
  { who: '호우회', title: '솜사탕', category: '먹거리', accountNumber: '123-456-7890' },
  { who: '씨네필', title: '타투스티커', category: '물품판매', accountNumber: '234-567-8901' },
  { who: 'COMA', title: '코매칭', category: '물품판매', accountNumber: '345-678-9012' },
  { who: 'SHIELD', title: '방패', category: '물품판매', accountNumber: '456-789-0123' },
  { who: 'A.L.A', title: '영어회화', category: '이벤트', accountNumber: '567-890-1234' },
  { who: 'GDGoC', title: '❤️ 미팅 ❤️', category: '연애/팅', accountNumber: '678-901-2345' },
  { who: '애니캣', title: '어묵바,아이스티', category: '물품판매', accountNumber: '789-012-3456' },
  { who: '유도부', title: '유아정', category: '물품판매', accountNumber: '890-123-4567' },
  { who: '코트랑', title: '테니스공놀이', category: '이벤트', accountNumber: '901-234-5678' },
  { who: 'Kick-off', title: '축구공차기', category: '이벤트', accountNumber: '012-345-6789' },
  { who: '포토존', title: '포토존', category: '이벤트', accountNumber: '123-456-7891' },
  { who: '피아노부', title: '피아노연주', category: '이벤트', accountNumber: '234-567-8902' },
  { who: '피아노부', title: '피아노연주', category: '이벤트', accountNumber: '345-678-9013' },
  // ... 추가 부스 데이터
];

const categoryColors: { [key: string]: string } = {
  '연애/팅': '#ffcccb',
  '먹거리': 'rgba(249, 171, 0, 0.2)', 
  '물품판매': 'rgba(0, 128, 0, 0.1)', 
  '이벤트': 'rgba(66, 133, 244, 0.1)' 
};

const textColors: { [key: string]: string } = {
  '연애/팅': 'red',
  '먹거리': '#f9ab00',
  '물품판매': 'green',
  '이벤트': '#4285f4'
};

export const getBoothColor = (category: string) => categoryColors[category] || 'gray';
export const getTextColor = (category: string) => textColors[category] || 'black';
