import { describe, it, expect, vi } from 'vitest';
import { fetchCourseData } from './fetchCourseData.logic';
import { CourseLevel } from '../types/heroSection.types';

vi.mock('next/config', () => ({
  default: () => ({
    publicRuntimeConfig: {
      DEFAULT_HOST: 'test.com',
    },
  }),
}));

describe('fetchCourseData', () => {
  it('should return English for Tech when hostname does not end with .by or .ru', async () => {
    const courseData = await fetchCourseData();
    expect(courseData?.finalCourseTitle).toBe('English for Tech');
    expect(courseData?.courseLevel).toBe(CourseLevel.INTERMEDIATE);
    expect(courseData?.courseDescription).toBe('Научим уверенно проходить интервью и работать в международных проектах!');
    expect(courseData?.courseStartDate).toBe('15 октября 2024');
    expect(courseData?.courseImage).toBe('/man-and-woman-in-gadgets.svg');
  });

  it('should return Английский для IT when hostname ends with .by or .ru', async () => {
    vi.spyOn(process, 'env', 'get').mockReturnValue({ DEFAULT_HOST: 'example.by' });
    
    const courseData = await fetchCourseData();
    expect(courseData?.finalCourseTitle).toBe('Английский для IT');
  });

  it('should return Английский для IT when hostname ends with .ru', async () => {
    vi.spyOn(process, 'env', 'get').mockReturnValue({ DEFAULT_HOST: 'example.ru' });
    
    const courseData = await fetchCourseData();
    expect(courseData?.finalCourseTitle).toBe('Английский для IT');
  });
});
