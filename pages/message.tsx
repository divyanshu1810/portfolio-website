import Header from "@/components/layouts/header";
import Message from "@/components/message/message";
import Head from "next/head";
import React, { FunctionComponent } from "react";

const message: FunctionComponent = () => {
  return (
    <div>
      <Header />
      <Head>
        <title>DIVYANSHU YADAV - MESSAGE</title>
      </Head>
      <div className="flex justify-center md:my-28 my-10 lg:my-20">
        <Message />
      </div>
    </div>
  );
};

export default message;
