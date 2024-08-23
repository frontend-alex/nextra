"use client";

import React from "react";
import LandingPage from "@routes/LandingPage";
import Dashboard from "./dashboard/page";

import { useUser } from "@clerk/nextjs";

const Page = () => {
  const { user } = useUser();

  return (
    <>
      {user ? <Dashboard /> : <LandingPage />}
    </>
  );
};

export default Page;
