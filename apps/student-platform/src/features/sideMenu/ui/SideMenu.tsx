export default function SideMenu() {
  return (
    <div className={"box-border w-64 bg-sky-50 rounded-r-lg p-7"}>
      <div>
        <div className={"box-border flex w-52 p-3"}>
          <div className={"w-6 h-6 bg-sky-100 rounded-full mr-3"}></div>
          <p>Main page</p>
        </div>
        <div className={"box-border flex w-52 p-3"}>
          <div className={"w-6 h-6 bg-sky-100 rounded-full mr-3"}></div>
          <p>Home tasks</p>
        </div>
        <div className={"box-border flex w-52 p-3"}>
          <div className={"w-6 h-6 bg-sky-100 rounded-full mr-3"}></div>
          <p>Single lesson</p>
        </div>
        <div className={"box-border flex w-52 p-3"}>
          <div className={"w-6 h-6 bg-sky-100 rounded-full mr-3"}></div>
          <p>Calendar</p>
        </div>
        <div className={"box-border flex w-52 p-3"}>
          <div className={"w-6 h-6 bg-sky-100 rounded-full mr-3"}></div>
          <p>My Courses</p>
        </div>
        <div className={"box-border flex w-52 p-3"}>
          <div className={"w-6 h-6 bg-sky-100 rounded-full mr-3"}></div>
          <p>Store</p>
        </div>
      </div>

      <div className={"w-52 mt-7 mb-10"}>
        <div className={"w-52 h-72 rounded-lg bg-sky-100 mb-3.5"}></div>
        <div className={"flex justify-between"}>
          <div className={"w-8 h-8 rounded-full bg-sky-100"}></div>
          <div className={"w-8 h-8 rounded-full bg-sky-100"}></div>
          <div className={"w-8 h-8 rounded-full bg-sky-100"}></div>
          <div className={"w-8 h-8 rounded-full bg-sky-100"}></div>
          <div className={"w-8 h-8 rounded-full bg-sky-100"}></div>
        </div>
      </div>
      <div>
        <p>Settings</p>
        <div className={"box-border flex w-52 pt-3 pb-3"}>
          <div className={"w-6 h-6 bg-sky-100 mr-3"}></div>
          <p>Settings</p>
        </div>
        <div className={"box-border flex w-52 pt-3 pb-3"}>
          <div className={"w-6 h-6 bg-sky-100 mr-3"}></div>
          <p>Privacy policy</p>
        </div>
        <div className={"box-border flex w-52 pt-3 pb-3"}>
          <div className={"w-6 h-6 bg-sky-100 mr-3"}></div>
          <p>Log out</p>
        </div>
      </div>
    </div>
  );
}
