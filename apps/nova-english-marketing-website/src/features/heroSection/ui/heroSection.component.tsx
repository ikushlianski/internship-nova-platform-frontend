// heroSection.component.tsx
import React from 'react';
import styles from './heroSection.module.css';
import { HeroSectionProps } from '../types/heroSection.types';

const HeroSection: React.FC<HeroSectionProps> = ({
  finalCourseTitle,
  courseLevel,
  courseDescription,
  courseStartDate,
  courseImage,
}) => {
  return (
    <section className={styles.courseSection}>
      <div className={styles.textContainer}>
        <p className={styles.courseLevel}>{courseLevel}</p>
        <h1 className={styles.courseTitle}>{finalCourseTitle}</h1>
        <p className={styles.courseSubtitle}>Онлайн курсы</p>
        <p className={styles.courseDescription}>{courseDescription}</p>
        <button className={styles.ctaButton}>ХОЧУ УЧИТЬСЯ</button>
        <p className={styles.courseStartDateText}>
          Дата начала курса:{' '}
          <span className={styles.courseStartDateValue}>{courseStartDate}</span>
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={courseImage}
          alt="Course illustration"
          className={styles.courseImage}
        />
      </div>
    </section>
  );
};

export default HeroSection;
