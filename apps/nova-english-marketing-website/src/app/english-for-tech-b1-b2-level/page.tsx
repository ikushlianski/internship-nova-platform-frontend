import React from 'react';
import HeroSection from '@/features/heroSection/ui/heroSection.component';
import { fetchCourseData } from '@/features/heroSection/logic/fetchCourseData.logic';

export default function Page() {
  const courseData = fetchCourseData(new Request('http://localhost:8000'));

  return (
    <div>
      <h1>Hello im B1 and B2 level course!!</h1>
      <div>
        <HeroSection
          finalCourseTitle={courseData.finalCourseTitle}
          courseLevel={courseData.courseLevel}
          courseDescription={courseData.courseDescription}
          courseStartDate={courseData.courseStartDate}
        />
      </div>
    </div>
  );
}
