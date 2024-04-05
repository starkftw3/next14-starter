import Link from "next/link";

const Links = () => {
  const links = [
    {
      title: "HomePage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  return (
    <div className="flex flex-row gap-11">
      {links.map((link) => (
        <Link href={link.path} key={link.title}>
          <div className="text-base text-black-950 hover:bg-blue-700 active:bg-blue-700">
            {link.title}
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Links;
