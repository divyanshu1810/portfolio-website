import Community from "@/components/community/community";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
const experience: NextPage = () => {
  return (
    <div className=" lg:px-24 md:px-14 px-8">
      <Head>
        <title>DIVYANSHU YADAV - COMMUNITIES</title>
      </Head>
      <Community />
    </div>
  );
};

export default experience;
