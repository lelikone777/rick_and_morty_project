import Link from "next/link";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex w-fit shrink-0 max-xs:w-full max-xs:justify-center"
    >
      <Image
        src="/imgs/Rick_and_Morty.png"
        alt="logo"
        width={160}
        height={40}
        className="w-auto"
        priority
      />
    </Link>
  );
};

export default Logo;
