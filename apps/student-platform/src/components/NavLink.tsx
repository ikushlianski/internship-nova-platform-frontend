import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLinkProps {
  href: string;
  children?: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`${
        isActive
          ? "text-purple-600 border-b-2 border-purple-600"
          : "text-gray-600"
      } px-3 py-2 hover:text-purple-500`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
