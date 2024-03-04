import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/header/ModeToggle";
import React from "react";
import { PiHamburgerLight } from "react-icons/pi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavMenu from "./header/NavMenu";

const Header = () => {
  return (
    <div className="inset-x-0 top-0 z-50 bg-white py-8 shadow-lg dark:bg-accent">
      <div className="container flex w-full flex-wrap items-center justify-between gap-6">
        <Link href="/" className="flex w-fit shrink-0">
          <Image
            src="/imgs/Rick_and_Morty.png"
            alt="logo"
            width={160}
            height={40}
          />
        </Link>

        <div className="ml-auto flex shrink-0 items-center gap-x-6">
          <ModeToggle />
          <Sheet>
            <SheetTrigger>
              <div className="inline-flex size-10 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background text-xl font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:hidden">
                <PiHamburgerLight />
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription>
                  <NavMenu area="header-sidebar" />
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <NavMenu area="header-menu" />
      </div>
    </div>
  );
};

export default Header;
