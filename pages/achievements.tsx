import Eventspeaker from "@/components/achievements/eventspeaker";
import Header from "@/components/layouts/header";
import Icon from "@/components/message/icon";
import { TITLE } from "@/utils/constants";
import { NextPage } from "next";
import Head from "next/head";
const achievements: NextPage = () => {
  return (
    <>
      <Header />
      <div className=" lg:px-24 md:px-14 px-8">
        <Head>
          <title>{TITLE.ACHIEVEMENTS}</title>
        </Head>
        <Icon />
        <Eventspeaker />
      </div>
    </>
  );
};

export default achievements;
