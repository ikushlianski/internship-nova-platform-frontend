export type Nullable<T> = T | null;

export type UserResponse = {
  user_email: string;
  created_at: string;
  updated_at: string;
  first_name: string;
  last_name: string;
  nickname: Nullable<string>;
  deleted: boolean;
};
