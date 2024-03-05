import React from "react";
import { ModeToggle } from "@/components/header/ModeToggle";

import NavMenu from "./NavMenu";
import Logo from "@/components/Logo";
import Sidebar from "@/components/header/Sidebar";

const Header = () => {
  return (
    <div className="inset-x-0 top-0 z-50 bg-white py-8 shadow-lg dark:bg-accent">
      <div className="container flex w-full flex-wrap items-center justify-between gap-6">
        <Logo />

        <div className="ml-auto flex shrink-0 items-center gap-x-6">
          <ModeToggle />
          <Sidebar />
        </div>

        <NavMenu area="header-menu" />
      </div>
    </div>
  );
};

export default Header;
