export type Nullable<T> = T | null;

export type ClassesResponse = {
  id: number;
  name: string;
  pathId: number;
  teacherIds: number[];
  studentIds: number[];
  startDate: string;
  endDate: string;
};
