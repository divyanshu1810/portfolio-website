import Twitter from "@/components/socials/twitter";
import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Linkedin from "@/components/socials/linkedin";
import Icon from "@/components/message/icon";
import Header from "@/components/layouts/header";
const feeds: NextPage = () => {
  return (
    <div>
      <Header />
      <Head>
        <title>DIVYANSHU YADAV - FEEDS</title>
      </Head>
      <Icon />
      <div className=" lg:px-24 md:px-14 px-8">
        <div className=" lg:text-5xl font-semibold md:text-4xl text-2xl py-10">
          TWITTER
        </div>
        <Twitter />
        <div className=" lg:text-5xl font-semibold md:text-4xl text-2xl pt-10 py-16">
          LINKEDIN RECENT POSTS
        </div>
        <div className=" flex justify-evenly flex-wrap">
          <Linkedin url="https://www.linkedin.com/embed/feed/update/urn:li:share:7043268977652875264" />
          <Linkedin url="https://www.linkedin.com/embed/feed/update/urn:li:share:7009388290667679744" />
          <Linkedin url="https://www.linkedin.com/embed/feed/update/urn:li:share:7055189646820978688" />
        </div>
      </div>
    </div>
  );
};

export default feeds;
