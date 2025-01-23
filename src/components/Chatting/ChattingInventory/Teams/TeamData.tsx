export interface Team {
  id: string;
  name: string;
  writeTime: string;
  join1: string;
  join2: string;
  join3?: string;
  joinType: '2to2' | '3to3';
  introduction: string;
}

export const teams: Team[] = [
  { id: '1', name: '만나서 놀아요!', writeTime: '오늘 19:28', joinType: '3to3', join1: '😸', join2: '⚾', join3: '🔥', introduction: '언제 만날까요? 장소는 여기가 좋을 것 같은데 괜찮으실까요?' },
  { id: '2', name: '야구보러갈래요', writeTime: '1/10 10:30', joinType: '2to2', join1: '🐶', join2: '⚾', introduction: '저는 야구 좋아하는데' },
  { id: '3', name: '팀 3', writeTime: '3일 전', joinType: '3to3', join1: '🐰', join2: '🦊', join3: '🐻', introduction: '이번 주말에 만나요!' },
  { id: '4', name: '팀 4', writeTime: '5일 전', joinType: '2to2', join1: '🐼', join2: '🐨', introduction: '다음 달에 만나요!' },
  { id: '5', name: '팀 5', writeTime: '1주일 전', joinType: '3to3', join1: '🦁', join2: '🐮', join3: '🐷', introduction: '언제 만날까요?' },
  { id: '6', name: '팀 6', writeTime: '2주일 전', joinType: '3to3', join1: '🐸', join2: '🐵', join3: '🐔', introduction: '장소는 어디가 좋을까요?' },
];