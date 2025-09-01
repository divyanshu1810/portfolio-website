import Header from "@/components/layouts/header";
import Icon from "@/components/message/icon";
import Projects from "@/components/projects/projects";
import Roadmaps from "@/components/projects/roadmaps";
import { NextPage } from "next";
import Head from "next/head";
const project: NextPage = () => {
  return (
    <>
      <Header />
      <div className=" lg:px-24 md:px-14 px-8">
        <Head>
          <title>Divyanshu Yadav | Projects</title>
        </Head>
        <Icon />
        <div className=" lg:text-5xl font-semibold md:text-4xl text-2xl py-10">
          PROJECTS
        </div>
        <Projects />
        <div className=" lg:text-5xl font-semibold md:text-4xl text-2xl py-20">
          ROADMAPS
        </div>
        <Roadmaps />
      </div>
    </>
  );
};

export default project;
