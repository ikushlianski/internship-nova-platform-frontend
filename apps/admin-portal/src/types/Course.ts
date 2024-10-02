export interface Course {
  title: string;
  modules: number;
  lessons: number;
  intensity?: string;
}

export enum CourseLevel {
  A1 = 'A1',
  A1PLUS = 'A1+',
  A2 = 'A2',
  A2PLUS = 'A2+',
  B1 = 'B1',
  B1PLUS = 'B1+',
  B2 = 'B2',
  B2PLUS = 'B2+',
  C1 = 'C1',
  C1PLUS = 'C1+',
}
