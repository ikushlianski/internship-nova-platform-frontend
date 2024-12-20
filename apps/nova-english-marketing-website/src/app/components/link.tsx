'use client';

import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

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

export const LinkComponent = ({ className, navLink }: LinkProps) => {
  const router = useRouter();
  return (
    <ul>
      {navLink.map((link, index) => (
        <li key={index}>
          <a
            href={link.path}
            className={`${className} hover:text-secondary-foreground`}
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
