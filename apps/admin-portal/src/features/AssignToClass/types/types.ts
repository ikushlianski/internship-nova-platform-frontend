export interface AssignClassButtonProps {
  classes: IClass[];
}

export interface IClass {
  id: number;
  name: string;
  pathId: number;
  teacherIds: number[];
  studentIds: number[];
  startDate: string;
  endDate: string;
}
