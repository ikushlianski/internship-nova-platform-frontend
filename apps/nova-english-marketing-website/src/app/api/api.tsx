const API_BASE_URL = process.env.NEXT_PUBLIC_API_V1_URL;
console.log('API Base URL:', API_BASE_URL);

export const getAllClasses = async () => {
  console.log(`${API_BASE_URL}/curriculum/class`);
  const response = await fetch(`${API_BASE_URL}/curriculum/class`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  console.log('Response Status:', response.status);
  console.log('Response Status Text:', response.statusText);
  if (!response.ok) {
    throw new Error('Failed to fetch classes');
  }

  return await response.json();
};

export const getClassByID = async (classId: string) => {
  const response = await fetch(`${API_BASE_URL}/curriculum/class/${classId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  console.log('Response Status:', response.status);
  console.log('Response Status Text:', response.statusText);
  if (!response.ok) {
    throw new Error('Failed to fetch class data');
  }

  return await response.json();
};

export const getAllCourses = async () => {
  const response = await fetch(`${API_BASE_URL}/curriculum/course`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch courses');
  }

  return await response.json();
};

export const getCourseByID = async (courseCode: string) => {
  const response = await fetch(`${API_BASE_URL}/course/${courseCode}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch course data');
  }

  return await response.json();
};
