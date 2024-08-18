"use client";

import Circle from "@components/ui/circle";

import { useUser } from "@clerk/nextjs";
import { AuroraBackground } from "@components/ui/aurora-background";
import { Button } from "@components/ui/button";
import { ContainerScroll } from "@components/ui/container-scroll-animation";
import { FeaturesSectionDemo } from "@components/ui/globe-section-component";
import { InfiniteMovingCards } from "@components/ui/infinite-moving-cards";
import { Spotlight } from "@components/ui/sportlight";
import { testimonials } from "@constants/StaticData";

import { motion } from "framer-motion";

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
            <Button>{user ? t("account") : t("register")}</Button>
            <Button variant="outline">
              <a href="#learnMore">{t("learnMore")}</a>
            </Button>
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

      <section
        id="learnMore"
        className="flex-col-3 max-w-7xl px-5 2xl:px-0 2xl:mx-auto relative"
      >
        <Circle
          show={true}
          className="h-[100px] w-[100px] left-5 top-0 z-[-1]"
        />
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

      <section>
        <FeaturesSectionDemo />
      </section>

      <section>
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="text-3xl lg:text-6xl font-bold dark:text-white text-center">
              <h1>{t('contactHeading')}</h1>
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              <p className="max-w-[500px] text-center">{t('contactParaghraph')}</p>
            </div>
            <Button variant="outline" className="bg-black dark:bg-white w-fit text-white dark:text-black">
              {t('submit')}
            </Button>
          </motion.div>
        </AuroraBackground>
      </section>
    </div>
  );
};

export default Page;
