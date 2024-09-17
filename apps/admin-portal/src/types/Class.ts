export interface IClass {
  id: number;
  name: string;
  pathId: number; //what course is this class in
  studentIds: number[]; //  students of this class only
  teacherIds: number[]; // teachers of this class only
  startDate: string;
  endDate: string;
}
