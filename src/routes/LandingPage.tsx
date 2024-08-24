"use client";

import React from "react";
import Image from "next/image";
import Footer from "@components/Footer";
import Circle from "@components/ui/circle";
import Navbar from "@components/Navbar";
import useTranslation from "@hooks/useTranslation";
import InvisibleBox from "@components/ui/invisible-box";
import LandingPageController from "@controllers/LandingPageController";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Button } from "@components/ui/button";
import { Spotlight } from "@components/ui/sportlight";
import { CheckCheck, User, Users } from "lucide-react";
import { SignedOut, SignInButton, useUser } from "@clerk/nextjs";
import { AuroraBackground } from "@components/ui/aurora-background";
import { contactFormData, testimonials } from "@constants/StaticData";
import { ContainerScroll } from "@components/ui/container-scroll-animation";
import { FeaturesSectionDemo } from "@components/ui/globe-section-component";
import { InfiniteMovingCards } from "@components/ui/infinite-moving-cards";

const LandingPage = () => {
  const { user } = useUser();
  const { theme } = useTheme();
  const { t } = useTranslation();
  const { data, handleChange, contactId, setContactId } =
    LandingPageController();

  const contactFormD = contactFormData(t);

  return (
    <div>
      <Navbar />
      <InvisibleBox className="h-[150px] w-full" />

      <div className="flex-col-20">
        <div className="top-0 h-[30rem] absolute w-full opacity-40  dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex items-center justify-center linier-gradient-top-bottom" />
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
              <Button>
                {user ? (
                  t("account")
                ) : (
                  <SignedOut>
                    <SignInButton>{t("register")}</SignInButton>
                  </SignedOut>
                )}
              </Button>
              <Button variant="outline">
                <a href="#learnMore">{t("learnMore")}</a>
              </Button>
            </div>
          </div>
          <div className="relative flex flex-col mt-10 overflow-hidden 2xl:pb-20 2xl:px-20">
            <Circle
              show={false}
              className="h-[100px] w-[100px] right-32 top-10"
            />
            <ContainerScroll titleComponent={""}>
              <Image
                src={`${
                  theme === "light"
                    ? "/images/white-mode.png"
                    : "/images/dark-mode.png"
                }`}
                alt="hero"
                height={720}
                width={1200}
                className="mx-auto w-[800px] rounded-2xl object-contain h-full object-left-top"
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
                className="h-[100px] w-[100px] right-5 top-0 z-[-1]"
              />
              <h1 className="text-2xl lg:text-5xl font-bold">
                {t("contactHeading")}
              </h1>
              <p className="max-w-[500px]">{t("contactParaghraph")}</p>
            </div>
            <div className="flex-col-3">
              <div className="grid-2 gap-3">
                <input
                  required
                  placeholder={t("firstName") || ""}
                  className="input"
                  onChange={handleChange}
                  name={data.firstName}
                />
                <input
                  placeholder={t("lastName") || ""}
                  className="input"
                  required
                  onChange={handleChange}
                  name={data.lastName}
                />
              </div>
              <input
                placeholder={t("jobTitle") || ""}
                className="input"
                required
                onChange={handleChange}
                name={data.jobTitle}
              />
              <input
                placeholder={t("email") || ""}
                className="input"
                required
                onChange={handleChange}
                name={data.email}
              />
              <input
                placeholder={t("phone") || ""}
                className="input"
                required
                onChange={handleChange}
                name={data.phone}
              />
            </div>
            <div className="flex-col-3">
              <h1 className="text-lg font-bold">{t("numberOfEmployees")}</h1>
              {contactFormD.map((data, index) => (
                <div
                  onClick={() => setContactId(index)}
                  key={index}
                  className={`flex-3 ${
                    contactId !== index
                      ? "border"
                      : "border-2 border-neutral-800 dark:border-neutral-300"
                  } bg-white dark:bg-[#0A0A0A] border-neutral-300 dark:border-neutral-800 p-3 rounded-lg relative`}
                >
                  <div className="p-3 border border-neutral-300 dark:border-neutral-800 rounded-lg">
                    {index === 0 ? <User /> : <Users />}
                  </div>
                  <div className="flex flex-col">
                    <h1>{data.heading}</h1>
                    <p>{data.paragraph}</p>
                  </div>
                  {contactId === index && (
                    <CheckCheck className="hidden sm:flex absolute right-5 transition-all" />
                  )}
                </div>
              ))}
            </div>

            <Button className="h-[60px]">{t("getInTouch")}</Button>
          </form>
          <AuroraBackground className="py-10">
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

        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
