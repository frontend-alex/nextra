"use client";

import { Button } from "@components/ui/button";
import Circle from "@components/ui/circle";
import { ContainerScroll } from "@components/ui/container-scroll-animation";
import { Spotlight } from "@components/ui/sportlight";

import useTranslation from "@hooks/useTranslation";
import Image from "next/image";
import React from "react";

const Page = () => {

  const { t } = useTranslation();

  return (
    <div className="min-h-[150vh] lg:min-h-[180vh] flex-center">
      <header className="">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className="relative max-w-wrapper flex-col-3 items-center text-center">
          <Circle show={true} className="h-[100px] w-[100px] left-32 top-10 z-[-1]"/>
          <h1 className="text-3xl lg:text-6xl font-bold">
            {t("headerHeading")}
          </h1>
          <p className="max-w-[700px]">{t("headerDescription")}</p>
          <div className="flex-3">
            <Button>{t('register')}</Button>
            <Button variant="outline">{t('learnMore')}</Button>
          </div>
        </div>
        <div className="relative flex flex-col overflow-hidden bg">
          <Circle show={false} className="h-[100px] w-[100px] right-32 top-10"/>
          <ContainerScroll titleComponent={""}>
            <Image
              src={`https://colorlib.com/wp/wp-content/uploads/sites/2/free-dashboard-templates-1.jpg`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </header>
    </div>
  );
};

export default Page;
