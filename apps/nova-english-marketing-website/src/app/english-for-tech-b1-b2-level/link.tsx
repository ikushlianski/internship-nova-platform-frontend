'use client';

import { ReactNode } from 'react';
import styles from './link.module.css';
import { useRouter } from 'next/navigation';

interface Link {
  title: string;
  path: string;
}

interface LinkProps {
  children?: ReactNode;
  className?: string;
  appName: string;
  navLink: Link[];
}

export const LinkComponent = ({ children, className, appName, navLink }: LinkProps) => {
  const router = useRouter();
  return (
    <ul>
      {navLink.map((link, index) => (
        <li key={index}>
          <a
            href={link.path}
            className={`${className} ${styles.link}`}
            onClick={(e) => {
              e.preventDefault();
              router.push(link.path);
            }}
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
