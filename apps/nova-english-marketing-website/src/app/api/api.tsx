import { Course } from '@/shared/types/zod.shemas';
import { Class } from '@repo/shared-types/class';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_V1_URL;

export const getAllClasses = async (): Promise<Class[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/curriculum/class`, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
      },
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      console.error(`Error fetching classes: ${response.status} - ${errorMessage}`);
      throw new Error(`Failed to fetch classes: ${errorMessage}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error in getAllClasses:', error);
    return [];
  }
};

export const getClassByID = async (classId: string): Promise<Class> => {
  console.log(`Fetching class data for ID: ${classId}`);
  try {
    const response = await fetch(`${API_BASE_URL}/curriculum/class/${classId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      console.error(`Error fetching class data: ${response.status} - ${errorMessage}`);
      throw new Error(`Failed to fetch class data: ${errorMessage}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error in getClassByID:', error);
    throw error;
  }
};

export const getAllCourses = async (): Promise<Course[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/curriculum/course`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      console.error(`Error fetching courses: ${response.status} - ${errorMessage}`);
      throw new Error(`Failed to fetch courses: ${errorMessage}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error in getAllCourses:', error);
    return [];
  }
};

export const getCourseByID = async (courseCode: string): Promise<Course> => {
  try {
    const response = await fetch(`${API_BASE_URL}/course/${courseCode}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      console.error(`Error fetching course data: ${response.status} - ${errorMessage}`);
      throw new Error(`Failed to fetch course data: ${errorMessage}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error in getCourseByID:', error);
    throw error;
  }
};
