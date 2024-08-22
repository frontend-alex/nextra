"use client";

import Link from "next/link";
import Circle from "@components/ui/circle";
import useTranslation from "@hooks/useTranslation";

import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { MotionConfig } from "framer-motion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@components/ui/breadcrumb";

import { SignedIn, UserButton } from "@clerk/nextjs";
import Sidebar from "@components/Sidebar/Sidebar";

const DashboardLayout = ({ children }: any) => {
  const pathname = usePathname();

  const { t } = useTranslation();

  return (
    <MotionConfig transition={{ type: "spring", bounce: 0, duration: 0.4 }}>
      <div className="flex gap-5">
        <Sidebar/>
        <div className="flex-col-3 p-5 w-full overflow-x-hidden">
          <div className="top-0 z-[-1] left-0 h-[30rem] absolute w-full opacity-40  dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex items-center justify-center linier-gradient-top-bottom" />
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
                      {pathname === "/" ? t("dashboard") : pathname.split("/")}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="relative flex-3 w-full lg:w-max">
              <Circle
                show={true}
                className="h-[50px] w-[50px] right-5 top-0 z-[-1]"
              />
              <Search className="text-stone-400 absolute top-[20%] left-2" />
              <span className="hidden lg:flex absolute right-14 top-[22%]">
                ⌘ {"  "}/ ⌘+T{" "}
              </span>
              <input
                placeholder={t("search") || ""}
                className="input w-full px-10 py-3"
              />
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </MotionConfig>
  );
};

export default DashboardLayout;
