export interface IStudent {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  userId: number; //user who is a student
  pathId: number; //this student's course
  teacherId: number; //this student's teacher
}
