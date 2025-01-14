export interface Team {
  id: string;
  name: string;
  writeTime: string;
  join1: string;
  join2: string;
  join3?: string;
  joinType: '2to2' | '3to3';
  join1Major: string;
  join2Major: string;
  join3Major?: string;
  aveAge: number;
  musicStyles: string[];
}

export const teams: Team[] = [
  { id: '1', name: '만나서 놀아요!', writeTime: '4시간 50분', joinType: '3to3', join1: '😸', join2: '⚾', join3: '🔥', join1Major: '컴공', join2Major: '인공', join3Major: '데사', aveAge: 22.3, musicStyles: ['발라드', '밴드', '재즈'] },
  { id: '2', name: '야구보러갈래요', writeTime: '1/10 10:30', joinType: '2to2', join1: '🐶', join2: '⚾', join1Major: '경제', join2Major: '법학', aveAge: 23.1, musicStyles: ['힙합', '클래식'] },
  { id: '3', name: '팀 3', writeTime: '3일 전', joinType: '3to3', join1: '🐰', join2: '🦊', join3: '🐻', join1Major: '물리', join2Major: '화학', join3Major: '바공', aveAge: 21.5, musicStyles: ['록', '팝'] },
  { id: '4', name: '팀 4', writeTime: '5일 전', joinType: '2to2', join1: '🐼', join2: '🐨', join1Major: '수학', join2Major: '경영', aveAge: 24.0, musicStyles: ['발라드', '댄스'] },
  { id: '5', name: '팀 5', writeTime: '1주일 전', joinType: '3to3', join1: '🦁', join2: '🐮', join3: '🐷', join1Major: '철학', join2Major: '국사', join3Major: '문학', aveAge: 22.8, musicStyles: ['재즈', '클래식'] },
  { id: '6', name: '팀 6', writeTime: '2주일 전', joinType: '3to3', join1: '🐸', join2: '🐵', join3: '🐔', join1Major: '심리', join2Major: '사회', join3Major: '정치', aveAge: 23.4, musicStyles: ['힙합', '팝'] },
];