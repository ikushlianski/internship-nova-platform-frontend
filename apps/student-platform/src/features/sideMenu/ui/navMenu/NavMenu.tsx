import MenuItem from "../menuItem/MenuItem";

export default function NavMenu() {
  return (
    <nav>
      <ul>
        <MenuItem title={"Main page"} link={"/"} img={"/#"} />
        <MenuItem title={"Home tasks"} link={"/tasks"} img={"/#"} />
        <MenuItem title={"Single lesson"} link={"/lesson"} img={"/#"} />
        <MenuItem title={"Calendar"} link={"/calendar"} img={"/#"} />
        <MenuItem title={"My Courses"} link={"/courses"} img={"/#"} />
        <MenuItem title={"Store"} link={"/store"} img={"/#"} />
      </ul>
    </nav>
  );
}
