import { StageBanner } from '../../utils/stageBanner.component.tsx';

export const Main = () => {
  return (
    <>
      {import.meta.env.VITE_APP_ENV !== 'prod' && <StageBanner />}
      This the main page!
    </>
  );
};
