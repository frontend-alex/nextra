"use client";

import Link from "next/link";
import clsx from "clsx";
import Circle from "@components/ui/circle";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { additionalSidebarLinks, sidebarLinks } from "@constants/StaticData";
import { MotionConfig, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@components/ui/breadcrumb";
import useTranslation from "@hooks/useTranslation";
import { SignedIn, SignInButton, UserButton } from "@clerk/nextjs";

interface sidebarItemProps {
  item: {
    id: string;
    title: string;
    icon: any;
  };
  path: string;
  activeTab: boolean | string;
  setActiveTab: (id: string) => void;
  isSidebarCollapsed: boolean;
}

function SidebarItem({
  item,
  activeTab,
  setActiveTab,
  isSidebarCollapsed,
  path,
}: sidebarItemProps) {
  const IconComponent = item.icon;

  const pathname = usePathname();

  return (
    <Link href={path}>
      <motion.div
        layout
        className={clsx(
          "relative flex-3 h-10 px-2 py-3 cursor-pointer transition-all",
          {
            "scale-100": activeTab === item.id,
          }
        )}
        onFocus={() => setActiveTab(item.id)}
        onMouseOver={() => setActiveTab(item.id)}
        onMouseLeave={() => setActiveTab(item.id)}
      >
        {activeTab === item.id ? (
          <motion.div
            layoutId="sidebar-item-indicator"
            className="absolute text-white inset-0 rounded-sm bg-neutral-200 dark:bg-neutral-800"
          />
        ) : null}
        <span
          className={`relative flex ${
            path === pathname ? "text-black dark:text-white" : "text-stone-400"
          }`}
        >
          <IconComponent />
        </span>
        <motion.span
          className={`relative ${
            path === pathname ? "text-black dark:text-white" : "text-stone-400"
          }`}
          animate={{
            clipPath: isSidebarCollapsed
              ? "inset(0% 100% 0% 0%)"
              : "inset(0% 0% 0% 0%)",
            opacity: isSidebarCollapsed ? 0 : 1,
          }}
        >
          {item.title}
        </motion.span>
      </motion.div>
    </Link>
  );
}

const DashboardLayout = ({ children }: any) => {
  const { t } = useTranslation();
  const pathname = usePathname();

  const sidebarLink = sidebarLinks(t);
  const additionalSidebarLink = additionalSidebarLinks(t);

  let activeElement = sidebarLink.map((item) => item.path === pathname);
  let activeSecondActiveEl = additionalSidebarLink.map(
    (item) => item.path === pathname
  );
  let index = activeElement.indexOf(true);
  let secondIndex = activeSecondActiveEl.indexOf(true);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState(
    sidebarLink[index]?.id === undefined
      ? additionalSidebarLink[secondIndex].id
      : sidebarLink[index].id
  );
  return (
    <MotionConfig transition={{ type: "spring", bounce: 0, duration: 0.4 }}>
      <div className="flex gap-5">
        <motion.div
          className="hidden lg:flex min-h-screen relative flex-col-5 px-5 py-10 bg-neutral-100 dark:bg-neutral-900"
          animate={{ width: isCollapsed ? 80 : 280 }}
          layout
        >
          <SignedIn>
            <UserButton/>
          </SignedIn>
          <div className="relative flex">
            <h3 className="font-bold text-center flex-center px-1">
              {isCollapsed ? "N." : "Nextra."}
            </h3>
            <Circle
              show={true}
              className="w-[40px] h-[40px] blur-[25px] -top-5"
            />
          </div>
          <button
            className="cursor-pointer absolute flex-center w-6 h-6 rounded-2xl bg-neutral-200 border border-neutral-300 dark:border-neutral-800 right-[-10px] top-[16px] z-[10] dark:bg-neutral-900"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? (
              <ChevronRight size={15} />
            ) : (
              <ChevronLeft size={15} />
            )}
          </button>
          <div className="flex-col-3">
            {!isCollapsed && <p className="px-2">{t("mainRoutes")}</p>}
            {sidebarLink.map((item) => (
              <SidebarItem
                path={item.path}
                isSidebarCollapsed={isCollapsed}
                key={item.id}
                item={item}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            ))}
          </div>
          <div className="flex-col-3 mt-5">
            {!isCollapsed && <p className="px-2">{t("additionalLinks")}</p>}
            {additionalSidebarLink.map((item) => (
              <SidebarItem
                path={item.path}
                isSidebarCollapsed={isCollapsed}
                key={item.id}
                item={item}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            ))}
          </div>
        </motion.div>
        <div className="flex-col-3 p-5 w-full overflow-x-hidden">
        <div className="top-0 z-[-1] left-0 h-[30rem] absolute w-full opacity-40  dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex items-center justify-center linier-gradient-top-bottom"/>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <Breadcrumb className="hidden lg:flex">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink>
                    <Link href="/">{t("home")}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink>
                    <Link
                      className="capitalize text-black dark:text-white"
                      href="/components"
                    >
                      {pathname === "/" ? "Dashboard" : pathname.split("/")}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="relative w-full lg:w-max">
              <Circle
                show={true}
                className="h-[50px] w-[50px] right-5 top-0 z-[-1]"
              />
              <Search className="text-stone-400 absolute top-[20%] left-2" />
              <span className="hidden lg:flex absolute right-5 top-[22%]">⌘ {"  "}/ ⌘+T </span>
              <input
                placeholder={t("search") || ""}
                className="input w-full px-10 py-3"
              />
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </MotionConfig>
  );
};

export default DashboardLayout;
