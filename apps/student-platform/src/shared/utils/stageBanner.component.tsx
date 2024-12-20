'use client';
import { cn } from '@sharedutils/cn';

export function StageBanner() {
  const hostname = window.location.hostname;
  const lowerEnvironments = ['qa1.', 'qa2.', 'qa3.', 'dev.'];

  const params = lowerEnvironments.some((env) => hostname.includes(env))
    ? process.env.NEXT_PUBLIC_VITE_APP_ENV
    : process.env.NEXT_PUBLIC_VITE_APP_ENV;

  return (
    <div className={cn('w-full', 'h-10', 'text-center', 'bg-amber-500')}>
      <span className={cn('absolute', 'text-gray-50', 'text-l', 'pt-2')}>you are in {params}</span>
    </div>
  );
}
