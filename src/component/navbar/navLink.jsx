import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      className="${text-basetext-black-950} ${pathName===item.title}"
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
