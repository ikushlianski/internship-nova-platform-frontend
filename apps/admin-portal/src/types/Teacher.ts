export interface ITeacher {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  lessonRate: number;
  telegramNickname?: string;
  expertise: string;
  userId: number; //user who is a teacher
  pathIds: number[]; //courses in which the teacher is employed
  classIds: number[]; //classes taught by a teacher
  studentIds: number[];
}
