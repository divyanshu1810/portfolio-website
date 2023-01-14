import Projects from "@/components/projects/projects";
import Roadmaps from "@/components/projects/roadmaps";
import { NextPage } from "next";
import React from "react";

const project: NextPage = () => {
  return (
    <div className=" lg:px-24 md:px-14 px-8">
      <div className=" lg:text-5xl font-semibold md:text-4xl text-2xl py-10">
        PROJECTS
      </div>
      <Projects />
      <div className=" lg:text-5xl font-semibold md:text-4xl text-2xl py-20">
        ROADMAPS
      </div>
      <Roadmaps />
    </div>
  );
};

export default project;
