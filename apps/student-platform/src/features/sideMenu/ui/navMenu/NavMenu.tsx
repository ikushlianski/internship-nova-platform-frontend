import MenuItem from "../menuItem/MenuItem";
import { ROUTES } from "@sharedroutes/routes";

export default function NavMenu() {
  return (
    <nav>
      <ul>
        <MenuItem title={"Main page"} link={ROUTES.HOME} img={"/#"} />
        <MenuItem title={"Home tasks"} link={ROUTES.HOME_TASKS} img={"/#"} />
        <MenuItem title={"Single lesson"} link={ROUTES.LESSON} img={"/#"} />
        <MenuItem title={"Calendar"} link={ROUTES.CALENDAR} img={"/#"} />
        <MenuItem title={"My Courses"} link={ROUTES.MY_COURSES} img={"/#"} />
        <MenuItem title={"Store"} link={ROUTES.STORE} img={"/#"} />
      </ul>
    </nav>
  );
}
