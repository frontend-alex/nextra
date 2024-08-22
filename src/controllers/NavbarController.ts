"use client";

import { useRef, useEffect, useCallback, MutableRefObject } from "react";

interface NavbarControllerInterface {
  navbarRef: MutableRefObject<HTMLDivElement | null>;
  sidebarRef: MutableRefObject<HTMLDivElement | null>;
  toggleSidebar: () => void;
}

export const NavbarController = (): NavbarControllerInterface => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const myScrollingFunction = useCallback(() => {
    if (!navbarRef.current) return;

    const { style } = navbarRef.current;
    const scrollPosition =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (scrollPosition > 60) {
      if (style.backgroundColor !== "rgba(255, 255, 255, 0.25)") {
        style.backgroundColor = "rgba(255, 255, 255, 0.25)";
        style.backdropFilter = "blur(20px)";
      }
    } else {
      if (style.backgroundColor !== "transparent") {
        style.backgroundColor = "transparent";
        style.backdropFilter = "blur(0px)";
      }
    }
  }, []);

  const toggleSidebar = useCallback(() => {
    sidebarRef.current?.classList.toggle("active");
  }, []);

  useEffect(() => {
    const debouncedScrollHandler = () => {
      requestAnimationFrame(myScrollingFunction);
    };

    window.addEventListener("scroll", debouncedScrollHandler);

    return () => {
      window.removeEventListener("scroll", debouncedScrollHandler);
    };
  }, [myScrollingFunction]);

  return { toggleSidebar, navbarRef, sidebarRef };
};
