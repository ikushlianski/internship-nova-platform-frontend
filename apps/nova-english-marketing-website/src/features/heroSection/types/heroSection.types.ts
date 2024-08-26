
export enum CourseLevel {
  INTERMEDIATE = 'INTERMEDIATE — UPPER-INTERMEDIATE',
}
export interface HeroSectionProps {
  finalCourseTitle: string;
  courseLevel: CourseLevel;
  courseDescription: string;
  courseStartDate: string;
  courseImage: string;
}
