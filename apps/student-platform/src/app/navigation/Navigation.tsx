import Link from 'next/link';
import { ROUTES } from '@sharedroutes/routes';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href={ROUTES.HOME}>Dashboard</Link>
        </li>
        <li>
          <Link href={ROUTES.HOME_TASKS}>Home Tasks</Link>
        </li>
        <li>
          <Link href={ROUTES.CALENDAR}>Calendar</Link>
        </li>
        <li>
          <Link href={ROUTES.SETTINGS}>Settings</Link>
        </li>
        <li>
          <Link href={ROUTES.PRIVACY_POLICY}>Privacy Policy</Link>
        </li>
        <li>
          <Link href={ROUTES.STORE}>Store</Link>
        </li>
        <li>
          <Link href={ROUTES.MY_COURSES}>My Courses</Link>
        </li>
      </ul>
    </nav>
  );
}
