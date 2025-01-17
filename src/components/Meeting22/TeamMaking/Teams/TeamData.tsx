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

export const teams: Team[] = [];