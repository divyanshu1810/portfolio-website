import Community from "@/components/experience/community";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { TITLE } from "@/utils/constants";
import Icon from "@/components/message/icon";
import Header from "@/components/layouts/header";
import Experience from "@/components/experience/experience";
const experience: NextPage = () => {
  return (
    <>
      <Header />
      <div className=" lg:px-24 md:px-14 px-8">
        <Head>
          <title>{TITLE.COMMUNITIES}</title>
        </Head>
        <Icon />
        <Experience />
        <Community />
      </div>
    </>
  );
};

export default experience;
