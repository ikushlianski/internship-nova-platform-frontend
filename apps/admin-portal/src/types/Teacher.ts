export interface ITeacher {
  id: number;
  user_email: string;
  first_name: string;
  last_name: string;
  phoneNumber?: string;
  lessonRate: number;
  telegramNickname?: string;
  userId: number; //user who is a teacher
}
