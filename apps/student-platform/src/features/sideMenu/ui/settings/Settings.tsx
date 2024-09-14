import MenuItem from '../menuItem/MenuItem';
import { ROUTES } from '@sharedroutes/routes';

export default function Settings() {
  return (
    <>
      <p>Settings</p>
      <nav>
        <ul>
          <MenuItem img={'/#'} title={'Settings'} link={ROUTES.SETTINGS} />
          <MenuItem img={'/#'} title={'Privacy policy'} link={ROUTES.PRIVACY_POLICY} />
          <MenuItem img={'/#'} title={'Log out'} link={'/logout'} />
        </ul>
      </nav>
    </>
  );
}
