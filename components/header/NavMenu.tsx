"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavMenu = ({ area }: { area: string }) => {
  const router = usePathname();

  return (
    <nav
      className={`${area === "header-menu" ? "hidden md:flex" : ""}  ${area === "header-sidebar" ? "w-full" : "w-fit"} `}
    >
      <ul
        className={`flex items-center text-2xl font-bold text-foreground ${area === "header-sidebar" ? "w-full flex-col justify-center gap-x-0 space-y-6 pt-8" : "gap-x-6"}`}
      >
        <li className={router === "/" ? "border-b-4 border-underline" : ""}>
          <Link href="/" className="hover-simple">
            Characters
          </Link>
        </li>
        <li
          className={
            router === "/episodes" ? "border-b-4 border-underline" : ""
          }
        >
          <Link href="/episodes" className="hover-simple">
            Episodes
          </Link>
        </li>
        <li
          className={
            router === "/locations" ? "border-b-4 border-underline" : ""
          }
        >
          <Link href="/locations" className="hover-simple">
            Locations
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
