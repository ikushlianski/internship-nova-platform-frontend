import MenuItem from "../menuItem/MenuItem";

export default function NavMenu() {
  return (
    <nav>
      <ul>
        <MenuItem title={"Main page"} link={"/"} img={"/#"} />
        <MenuItem title={"Home tasks"} link={"/home-tasks"} img={"/#"} />
        <MenuItem title={"Single lesson"} link={"/lessons"} img={"/#"} />
        <MenuItem title={"Calendar"} link={"/calendar"} img={"/#"} />
        <MenuItem title={"My Courses"} link={"/my-courses"} img={"/#"} />
        <MenuItem title={"Store"} link={"/store"} img={"/#"} />
      </ul>
    </nav>
  );
}
