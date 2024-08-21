"use client";

import React from "react";
import LandingPage from "@routes/LandingPage";
import Dashboard from "./dashboard/page";

import { useUser } from "@clerk/nextjs";

const Page = () => {
  const { user } = useUser();

  return (
    <React.Fragment>
      { user ? <Dashboard/> : <LandingPage/>}
    </React.Fragment>
  );
};

export default Page;
