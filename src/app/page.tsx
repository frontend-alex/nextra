"use client";

import { useUser } from "@clerk/nextjs";
import { Button } from "@components/ui/button";
import Circle from "@components/ui/circle";
import { ContainerScroll } from "@components/ui/container-scroll-animation";
import { InfiniteMovingCards } from "@components/ui/infinite-moving-cards";
import { Spotlight } from "@components/ui/sportlight";
import { testimonials } from "@constants/StaticData";

import useTranslation from "@hooks/useTranslation";
import Image from "next/image";
import React from "react";

const Page = () => {
  const { t } = useTranslation();
  const { user } = useUser();

  return (
    <div className="flex-col-20">
      <header className="min-h-[100vh] lg:min-h-[120vh] flex-center flex-col">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="relative max-w-wrapper flex-col-3 items-center text-center">
          <Circle
            show={true}
            className="h-[100px] w-[100px] left-32 top-10 z-[-1]"
          />
          <h1 className="text-3xl lg:text-6xl font-bold">
            {t("headerHeading")}
          </h1>
          <p className="max-w-[700px]">{t("headerDescription")}</p>
          <div className="flex-3">
            <Button>{user ? t('account') : t("register")}</Button>
            <Button variant="outline">{t("learnMore")}</Button>
          </div>
        </div>
        <div className="relative flex flex-col mt-10 overflow-hidden 2xl:pb-32 2xl:px-32">
          <Circle
            show={false}
            className="h-[100px] w-[100px] right-32 top-10"
          />
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

      <section className="flex-col-3 max-w-7xl px-5 2xl:px-0 2xl:mx-auto relative">
        <Circle show={true} className="h-[100px] w-[100px] left-5 top-0 z-[-1]" />
          <h1 className="text-3xl lg:text-6xl font-bold">
            {t("sectionOneHeading")}
          </h1>
          <p>{t("sectionOneParaGraph")}</p>
          <div className="h-[20rem] w-full rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="normal"
            />
          </div>
      </section>
    </div>
  );
};

export default Page;
