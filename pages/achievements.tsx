import Certifications from "@/components/achievements/certifications";
import Eventspeaker from "@/components/achievements/eventspeaker";
import Hacktoberfest from "@/components/achievements/hacktoberfest";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { TITLE, HACKTOBERFEST } from "@/utils/constants";
const achievements: NextPage = () => {
  return (
    <div className=" lg:px-24 md:px-14 px-8">
      <Head>
        <title>{TITLE.ACHIEVEMENTS}</title>
      </Head>
      <Hacktoberfest head={HACKTOBERFEST.HEAD} image={HACKTOBERFEST.IMAGE} />
      <Certifications />
      <Eventspeaker />
    </div>
  );
};

export default achievements;
