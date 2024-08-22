export function fetchCourseData(req: Request) {
  let hostname = req.headers.get('host') || '';

  if (!hostname) {
    hostname = 'localhost:8000';
  }

  let finalCourseTitle = 'Английский для IT';

  if (hostname === 'localhost:8000') {
    finalCourseTitle = 'Английский для IT';
  } else if (!hostname.endsWith('.by') && !hostname.endsWith('.ru')) {
    finalCourseTitle = 'English for Tech';
  }

  const courseData = {
    finalCourseTitle,
    courseLevel: 'INTERMEDIATE — UPPER-INTERMEDIATE',
    courseDescription:
      'Научим уверенно проходить интервью и работать в международных проектах!',
    courseStartDate: '21 декабря 2024',
  };

  return courseData;
}
