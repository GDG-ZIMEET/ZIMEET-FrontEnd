import { SearchTeamMemberType } from './SearchTeamMember';
import { UserType } from './UserType';

export interface TeamMemberWithProfileType extends SearchTeamMemberType {
  studentNumber: UserType['studentNumber'];
  gender: UserType['gender'];
  emoji: UserType['emoji'];
  age: UserType['age'];
  mbti: UserType['mbti'];
  style: UserType['style'];
  idealType: UserType['idealType'];
  idealAge: UserType['idealAge'];
  music: UserType['music'];
}