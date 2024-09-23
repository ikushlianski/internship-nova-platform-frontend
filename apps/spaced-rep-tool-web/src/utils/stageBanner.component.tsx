import { cn } from '../shared/utils/cn.ts';

export const StageBanner = () => {
  const searchParams = window.location.hostname;
  const environments = ['qa1', 'qa2', 'qa3'];

  const params = environments.some((env) => searchParams.includes(env))
    ? import.meta.env.VITE_APP_ENV
    : import.meta.env.VITE_APP_ENV;

  return (
    <div className={cn('w-full', 'h-10', 'text-center', 'bg-amber-500')}>
      <span className={cn('absolute', 'text-gray-50', 'text-l', 'pt-2')}>you are in {params}</span>
    </div>
  );
};
