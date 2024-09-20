export interface AssignClassButtonProps {
  classes: Class[];
}

export interface Class {
  id: number;
  name: string;
  pathId: number;
  teacherIds: number[];
  studentIds: number[];
  startDate: string;
  endDate: string;
}
