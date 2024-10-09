import dynamic from 'next/dynamic';

export const SsrStageBanner = dynamic(
  () => import('./stageBanner.component').then((mod) => mod.StageBanner),
  {
    ssr: false,
  },
);
