import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full flex justify-between items-center bg-slate-700">
      <div className="container flex justify-between items-center w-full max-w-xl m-auto gap-4">
        <Link href={"/"} className="text-2xl font-bold px-4 py-2">
          Nextjs
        </Link>
        <div className="flex gap-2">
          <Link href={"/nuevo"} className="px-4 py-3 rounded-md">
            Nuevo
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
