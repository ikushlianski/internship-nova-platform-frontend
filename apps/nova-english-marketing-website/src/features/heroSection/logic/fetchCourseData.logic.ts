import { NextRequest } from 'next/server';
import { CourseLevel, HeroSectionProps } from '../types/heroSection.types';

function getFinalCourseTitle(hostname: string): string {
  if (hostname.endsWith('.by') || hostname.endsWith('.ru')) {
    return 'Английский для IT';
  }
  return 'English for Tech';
}

export async function fetchCourseData(): Promise<HeroSectionProps | null> {
  const hostname = process.env.DEFAULT_HOST || 'localhost:8000';
  const finalCourseTitle = getFinalCourseTitle(hostname);

  const courseData: HeroSectionProps = {
    finalCourseTitle,
    courseLevel: CourseLevel.INTERMEDIATE,
    courseDescription: 'Научим уверенно проходить интервью и работать в международных проектах!',
    courseStartDate: '15 октября 2024',
    courseImage: '/man-and-woman-in-gadgets.svg', 
  };

  return courseData;
}
