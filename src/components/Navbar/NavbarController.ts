"use client";

import { useRef, useEffect, MutableRefObject } from "react";

interface NavbarControllerInterface {
  navbarRef: MutableRefObject<HTMLDivElement | null>;
  sidebarRef: MutableRefObject<HTMLDivElement | null>;
  toggleSidebar: () => void;
}

export const NavbarController = (): NavbarControllerInterface => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const myScrolliingFunction = () => {
    if (navbarRef.current) {
      let { style } = navbarRef.current;
      if (
        document.body.scrollTop > 60 ||
        document.documentElement.scrollTop > 60
      ) {
        style.backgroundColor = "rgba( 145, 145, 145, 0.25 )";
        style.backdropFilter= "blur(20px)"
      } else {
        style.backgroundColor = "transparent";
        style.backdropFilter= "blur(0px)"

      }
    }
  };

  const toggleSidebar = () => {
    sidebarRef.current?.classList.toggle("active");
  };

  useEffect(() => {
    window.addEventListener("scroll", myScrolliingFunction);

    return () => {
      window.removeEventListener("scroll", myScrolliingFunction);
    };
  }, []);

  return { toggleSidebar, navbarRef, sidebarRef };
};
