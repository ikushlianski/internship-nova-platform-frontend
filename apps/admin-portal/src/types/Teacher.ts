export interface ITeacher {
  id: number;
  expertise: string;
  userId: number; //user who is a teacher
  pathIds: number[]; //courses in which the teacher is employed
  classIds: number[]; //classes taught by a teacher
  studentIds: number[];
}
