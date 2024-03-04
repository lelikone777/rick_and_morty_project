import Link from "next/link";
import React from "react";

const NavMenu = ({ area }: { area: string }) => {
  return (
    <nav
      className={` gap-x-6 ${area === "header-menu" ? "hidden md:flex" : ""}  ${area === "header-sidebar" ? "w-full" : "w-fit"} `}
    >
      <ul
        className={`flex items-center text-2xl font-bold ${area === "header-sidebar" ? "w-full flex-col justify-center gap-x-0 space-y-6 pt-8" : "gap-x-6"}`}
      >
        <li>
          <Link href="">Characters</Link>
        </li>
        <li>
          <Link href="">Episodes</Link>
        </li>
        <li>
          <Link href="">Locations</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
