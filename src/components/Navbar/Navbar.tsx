"use client";

import Link from "next/link";
import { NavbarController } from "./NavbarController";

import { Menu } from "lucide-react";
import { NavbarLinks } from "@constants/StaticData";
import { ThemeButton } from "@components/ui/themeButton";

const Navbar: React.FC = () => {
  const { toggleSidebar, sidebarRef, navbarRef } = NavbarController();

  return (
    <div className="fixed w-full z-[10] px-5 xl:px-0">
      <div
        className="flex-between max-w-wrapper p-3 py-4 px-5 mt-5 rounded-2xl transition-all"
        ref={navbarRef}
      >
        <h1 className="font-bold">Nextra.</h1>
        <div className="flex-3">
          <ul className="hidden lg:flex items-center gap-3">
            {NavbarLinks.map((link, id) => (
              <li key={id}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>

          <div className="flex lg:hidden cursor-pointer">
            <Menu onClick={toggleSidebar} />
          </div>
          <ThemeButton />
        </div>
        <div className="flex lg:hidden sidebar" ref={sidebarRef}></div>

      </div>
    </div>
  );
};

export default Navbar;
