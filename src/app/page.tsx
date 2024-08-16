"use client";

import { Button } from "@components/ui/button";
import { ContainerScroll } from "@components/ui/container-scroll-animation";
import { Spotlight } from "@components/ui/sportlight";

import useTranslation from "@hooks/useTranslation";
import Image from "next/image";
import React from "react";

const page = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-[120vh] lg:min-h-[180vh] flex-center">
      <header className="">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className="max-w-wrapper flex-col-3 items-center text-center">
          <h1 className="text-3xl lg:text-6xl font-bold">
            {t("headerHeading")}
          </h1>
          <p className="max-w-[700px]">{t("headerDescription")}</p>
          <div className="flex-3">
            <Button>{t('register')}</Button>
            <Button variant="outline">{t('learnMore')}</Button>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden">
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

export default page;
