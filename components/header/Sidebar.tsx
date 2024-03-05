import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PiHamburgerLight } from "react-icons/pi";
import NavMenu from "@/components/header/NavMenu";
import React from "react";

const Sidebar = () => {
  return (
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
  );
};

export default Sidebar;
