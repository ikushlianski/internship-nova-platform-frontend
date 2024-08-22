import React from 'react';
import './heroSection.css';
import { HeroSectionProps } from '../types/heroSection.types';

const HeroSection: React.FC<HeroSectionProps> = ({
  finalCourseTitle,
  courseLevel,
  courseDescription,
  courseStartDate,
}) => {
  return (
    <section className="course-section">
      <div className="text-container">
        <p className="course-level">{courseLevel}</p>
        <h1 className="course-title">{finalCourseTitle}</h1>
        <p className="course-subtitle">Онлайн курсы</p>
        <p className="course-description">{courseDescription}</p>
        <button className="cta-button">ХОЧУ УЧИТЬСЯ</button>
        <p className="course-start-date-text">
          Дата начала курса:{' '}
          <span className="course-start-date-value">{courseStartDate}</span>
        </p>
      </div>
      <div className="image-container">
        <img
          src="/man-and-woman-in-gadgets.svg"
          alt="Course illustration"
          className="course-image"
        />
      </div>
    </section>
  );
};

export default HeroSection;
