import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-white shadow-lg dark:bg-accent">
      <div className="container flex h-20 w-full items-center justify-between">
        <Link href="/">
          <Image
            src="/imgs/Rick_and_Morty.png"
            alt="logo"
            width={160}
            height={40}
          />
        </Link>

        <nav className="w-fit">
          <ul className="flex space-x-6 text-2xl font-bold">
            <li>
              <Link href="">Characters</Link>{" "}
            </li>
            <li>Episodes</li>
            <li>Locations</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
