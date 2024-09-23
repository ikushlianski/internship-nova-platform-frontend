import { cn } from '@repo/ui/lib/utils.ts';

export const StageBanner = () => {
  const hostname = window.location.hostname;
  const lowerEnvironments = ['qa1.', 'qa2.', 'qa3.', 'dev.'];

  const params = lowerEnvironments.some((env) => hostname.includes(env))
    ? import.meta.env.VITE_APP_ENV
    : import.meta.env.VITE_APP_ENV;

  return (
    <div className={cn('static', 'w-full', 'h-10', 'text-center', 'mt-12', 'bg-amber-500')}>
      <span className={cn('absolute', 'text-gray-50', 'text-l', 'pt-2')}>you are in {params}</span>
    </div>
  );
};
