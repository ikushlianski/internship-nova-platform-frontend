import { describe, it, expect, vi } from 'vitest';
import { fetchCourseData } from './fetchCourseData.logic';

describe('fetchCourseData', () => {
  it('should return the correct course data when hostname is localhost:8000', () => {
    const req = {
      headers: {
        get: vi.fn().mockReturnValue('localhost:8000'),
      },
    } as unknown as Request;

    const result = fetchCourseData(req);

    expect(result).toEqual({
      finalCourseTitle: 'Английский для IT',
      courseLevel: 'INTERMEDIATE — UPPER-INTERMEDIATE',
      courseDescription:
        'Научим уверенно проходить интервью и работать в международных проектах!',
      courseStartDate: '21 декабря 2024',
    });
  });

  it('should return the correct course data when hostname ends with .by', () => {
    const req = {
      headers: {
        get: vi.fn().mockReturnValue('example.by'),
      },
    } as unknown as Request;

    const result = fetchCourseData(req);

    expect(result).toEqual({
      finalCourseTitle: 'Английский для IT',
      courseLevel: 'INTERMEDIATE — UPPER-INTERMEDIATE',
      courseDescription:
        'Научим уверенно проходить интервью и работать в международных проектах!',
      courseStartDate: '21 декабря 2024',
    });
  });

  it('should return the correct course data when hostname ends with .ru', () => {
    const req = {
      headers: {
        get: vi.fn().mockReturnValue('example.ru'),
      },
    } as unknown as Request;

    const result = fetchCourseData(req);

    expect(result).toEqual({
      finalCourseTitle: 'Английский для IT',
      courseLevel: 'INTERMEDIATE — UPPER-INTERMEDIATE',
      courseDescription:
        'Научим уверенно проходить интервью и работать в международных проектах!',
      courseStartDate: '21 декабря 2024',
    });
  });

  it('should return the correct course data when hostname does not end with .by or .ru', () => {
    const req = {
      headers: {
        get: vi.fn().mockReturnValue('example.com'),
      },
    } as unknown as Request;

    const result = fetchCourseData(req);

    expect(result).toEqual({
      finalCourseTitle: 'English for Tech',
      courseLevel: 'INTERMEDIATE — UPPER-INTERMEDIATE',
      courseDescription:
        'Научим уверенно проходить интервью и работать в международных проектах!',
      courseStartDate: '21 декабря 2024',
    });
  });

  it('should default to "localhost:8000" if hostname is missing', () => {
    const req = {
      headers: {
        get: vi.fn().mockReturnValue(null),
      },
    } as unknown as Request;

    const result = fetchCourseData(req);

    expect(result).toEqual({
      finalCourseTitle: 'Английский для IT',
      courseLevel: 'INTERMEDIATE — UPPER-INTERMEDIATE',
      courseDescription:
        'Научим уверенно проходить интервью и работать в международных проектах!',
      courseStartDate: '21 декабря 2024',
    });
  });
});
