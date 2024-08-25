'use client';

import { ReactNode } from 'react';
import styles from './button.module.css';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  appName: string;
  form: 'REC' | 'ROUND';
  size: 'L' | 'S';
  imageLink?: string;
  outline?: string;
}

export const Button = ({
  children,
  className,
  appName,
  form = 'REC',
  size = 'L',
  imageLink,
  outline,
}: ButtonProps) => {
  return (
    <button
      className={`${className || ''} ${styles.button} ${form === 'REC' ? size === 'L' ? styles.large :styles.small : styles.round} ${outline ? styles.outline : ''}`}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
      {imageLink && (
        <img
          src={imageLink}
          alt="Button Icon"
          className={`${styles.image} ${form === 'REC' ? size === 'L' ? styles.recl : styles.recs : size === 'L' ? styles.roundl : styles.rounds } ${className || ''}`}
        />
      )}
    </button>
  );
};
