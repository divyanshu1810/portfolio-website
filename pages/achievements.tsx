import Certifications from "@/components/achievements/certifications";
import Eventspeaker from "@/components/achievements/eventspeaker";
import Hacktoberfest from "@/components/achievements/hacktoberfest";
import { NextPage } from "next";
import React from "react";

const achievements: NextPage = () => {
  return (
    <div className=" lg:px-24 md:px-14 px-8">
      <Hacktoberfest />
      <Certifications />
      <Eventspeaker />
    </div>
  );
};

export default achievements;
