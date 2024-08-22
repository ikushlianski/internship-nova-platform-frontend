import Image from "next/image";

export default function SideMenu() {
  return (
    <div>
      <div>Main page</div>
      <div>Home tasks</div>
      <div>Single lesson</div>
      <div>Calendar</div>
      <div>My Courses</div>
      <div>Store</div>
      <Image src={"/#"} alt={""} width={50} height={50} />
      <div>
        <div>Settings</div>
        <div>Privacy policy</div>
        <div>Log out</div>
      </div>
    </div>
  );
}
