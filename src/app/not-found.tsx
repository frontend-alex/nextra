
import React from "react";
import Circle from "@components/ui/circle";

import { Spotlight } from "@components/ui/sportlight";
import { Button } from "@components/ui/button";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="min-h-screen overflow-hidden flex-center gap-3">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="z-[-1] absolute top-0 linier-gradient-top-bottom min-h-screen overflow-hidden w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex items-center justify-center" />
      <div className="flex-col-3 text-center">
        <div className="relative">
          <h1 className="text-9xl font-bold lg:text-[15rem]">404</h1>
          <Circle show={true} className="w-[150px] h-[150px] bottom-0 right-0 z-[-1]" />
        </div>
        <h1 className="font-bold text-2xl">Oops! Something Went Wrong</h1>
        <p className="max-w-[500px]">
          We encountered an unexpected error while processing your request.
          Please try again later or contact support if the problem persists. We
          apologize for the inconvenience and appreciate your patience as we
          work to resolve this issue.
        </p>
        <Button variant='outline'><Link href='/'>Go back</Link></Button>
      </div>
    </div>
  );
};

export default ErrorPage;
