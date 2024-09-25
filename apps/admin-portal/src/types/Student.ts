export interface IStudent {
  id: number;
  user_email: string;
  first_name: string;
  last_name: string;
  phoneNumber?: string;
  userId: number; //user who is a student
}
