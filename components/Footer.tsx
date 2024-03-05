import React from "react";
import Link from "next/link";
import {
  myGithub,
  myLinkedin,
  myServer,
  myTelegram,
  myWhatsapp,
} from "@/constants";
import { FaGithub, FaLinkedin, FaWhatsapp, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="inset-x-0
    top-0 z-50 flex flex-col items-center justify-center gap-y-4 bg-white py-8 shadow-top-lg dark:bg-accent"
    >
      <p className="text-2xl">
        Powered and Developed by{" "}
        <Link href={myServer} target="_blank">
          <strong className="hover-underline text-2xl underline underline-offset-4">
            Aleksei Kalinin&copy;
          </strong>
        </Link>
      </p>
      <div className="flex items-center justify-center gap-x-4">
        <Link
          href={myGithub}
          target="_blank"
          className="hover-underline text-3xl"
        >
          <FaGithub />
        </Link>
        <Link
          href={myLinkedin}
          target="_blank"
          className="hover-underline text-3xl"
        >
          <FaLinkedin />
        </Link>

        <Link
          href={myWhatsapp}
          target="_blank"
          className="hover-underline text-3xl"
        >
          <FaWhatsapp />
        </Link>

        <Link
          href={myTelegram}
          target="_blank"
          className="hover-underline text-3xl"
        >
          <FaTelegram />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
