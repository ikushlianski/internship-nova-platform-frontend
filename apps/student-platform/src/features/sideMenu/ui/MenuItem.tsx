import Image from "next/image";
import NavLink from "@componentsNavLink";

export default function MenuItem({ img, title, link }: MenuItemProps) {
  return (
    <li className={"box-border flex w-52 p-3 hover:bg-sky-100 rounded-3xl "}>
      <Image
        src={img}
        alt={""}
        width={24}
        height={24}
        className={"w-6 h-6 bg-sky-100 rounded-full mr-3"}
      />
      <NavLink href={link}>{title}</NavLink>
    </li>
  );
}
