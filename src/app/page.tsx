"use client";

import React from "react";
import Image from "next/image";
import Circle from "@components/ui/circle";
import useTranslation from "@hooks/useTranslation";
import PageController from "./PageController";

import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { Button } from "@components/ui/button";
import { Spotlight } from "@components/ui/sportlight";
import { testimonials } from "@constants/StaticData";
import { AuroraBackground } from "@components/ui/aurora-background";
import { ContainerScroll } from "@components/ui/container-scroll-animation";
import { FeaturesSectionDemo } from "@components/ui/globe-section-component";
import { InfiniteMovingCards } from "@components/ui/infinite-moving-cards";
import { User, Users } from "lucide-react";

const Page = () => {
  const { user } = useUser();
  const { t } = useTranslation();
  const { data, handleChange } = PageController();

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

      <section className="grid-2 border-y dark:border-neutral-800">
        <form className="p-5 lg:p-20 flex-col-10">
          <div className="flex-col-1 relative">
            <Circle
              show={true}
              className="h-[100px] w-[100px] right-56 top-0 z-[-1]"
            />
            <h1 className="text-2xl lg:text-5xl font-bold">
              Chat with your team.
            </h1>
            <p className="max-w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              architecto vitae aliquid porro magni impedit adipisci dicta odit.
              Odio, illum.
            </p>
          </div>
          <div className="flex-col-3">
            <div className="grid-2 gap-5">
              <div className="input-container">
                <input required onChange={handleChange} name={data.firstName} />
                <label>First Name</label>
              </div>
              <div className="input-container">
                <input required onChange={handleChange} name={data.firstName} />
                <label>Second Name</label>
              </div>
            </div>
            <div className="input-container">
              <input required onChange={handleChange} name={data.firstName} />
              <label>Job Title</label>
            </div>
            <div className="input-container">
              <input required onChange={handleChange} name={data.firstName} />
              <label>Work Email</label>
            </div>
            <div className="input-container">
              <input required onChange={handleChange} name={data.firstName} />
              <label>Phone</label>
            </div>
          </div>
          <div className="flex-col-3">
            <h1 className="text-lg font-bold">Number of employees</h1>
            <div className="relative flex-3 border bg-white dark:bg-[#0A0A0A] border-neutral-300 dark:border-neutral-800 p-3 rounded-lg">
              <Circle
                show={true}
                className="h-[100px] w-[100px] left-5 top-0 z-[-1]"
              />
              <div className="p-3 border border-neutral-300 dark:border-neutral-800 rounded-lg">
                <User />
              </div>
              <div className="flex flex-col">
                <h1>I'm a solo creator</h1>
                <p>I need to set up an account for myself</p>
              </div>
            </div>
            <div className="flex-3 border bg-white dark:bg-[#0A0A0A] border-neutral-300 dark:border-neutral-800 p-3 rounded-lg">
              <div className="p-3 border border-neutral-300 dark:border-neutral-800 rounded-lg">
                <Users />
              </div>
              <div className="flex flex-col">
                <h1>I'm part of a team</h1>
                <p>I need to set up an account for a team</p>
              </div>
            </div>
          </div>

          <Button className="h-[60px]">Get in touch</Button>
        </form>
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
              <h1>{t("contactHeading")}</h1>
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              <p className="max-w-[500px] text-center">
                {t("contactParaghraph")}
              </p>
            </div>
            <Button
              variant="outline"
              className="bg-black dark:bg-white w-fit text-white dark:text-black"
            >
              {t("submit")}
            </Button>
          </motion.div>
        </AuroraBackground>
      </section>
    </div>
  );
};

export default Page;
