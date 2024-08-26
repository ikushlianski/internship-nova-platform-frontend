import React, { useEffect, useState } from 'react';
import HeroSection from '@/features/heroSection/ui/heroSection.component';
import { fetchCourseData } from '@/features/heroSection/logic/fetchCourseData.logic';


export default async function Page(){
  const courseData = await fetchCourseData();

  return (
    <div>
      <h1>Hello im B1 and B2 level course!!</h1>
      <div>
        <HeroSection
          finalCourseTitle={courseData.finalCourseTitle}
          courseLevel={courseData.courseLevel}
          courseDescription={courseData.courseDescription}
          courseStartDate={courseData.courseStartDate}
          courseImage={courseData.courseImage} 
        />
      </div>
    </div>
  );
}
