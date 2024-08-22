"use client";

import Link from "next/link";
import useTranslation from '@hooks/useTranslation'

import { NavbarController } from "./NavbarController";

import { Menu } from "lucide-react";
import { NavbarLinks } from "@constants/StaticData";
import { ThemeButton } from "@components/ui/themeButton";

import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@components/ui/button";

const Navbar: React.FC = () => {
  
  const { user } = useUser();
  const { t } = useTranslation();
  const { toggleSidebar, sidebarRef, navbarRef } = NavbarController();

  const nLinks = NavbarLinks(t)

  return (
    <div className="fixed w-full z-[10] px-5 xl:px-0">
      <div
        className="flex-between max-w-wrapper p-3 py-4 px-5 mt-5 rounded-2xl transition-all"
        ref={navbarRef}
      >
        <h1 className="font-bold">Nextra.</h1>
        { !user && ( <ul className="hidden lg:flex items-center gap-3">
            {nLinks.map((link, id) => (
              <li key={id}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>) }
       
        <div className="flex-3">
          <SignedOut>
              <Button className="hidden lg:flex">
                <SignInButton>
                  {t('register')} 
                </SignInButton>
              </Button>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
          <div className="flex lg:hidden cursor-pointer">
            <Button onClick={toggleSidebar} variant='outline' className="bg-transparent border-none w-13">
              <Menu/>
            </Button>
          </div>
          <div className="hidden lg:flex">
            <ThemeButton />
          </div>
        </div>
      </div>
      <div className="flex lg:hidden side" ref={sidebarRef}/>
    </div>
  );
};

export default Navbar;
