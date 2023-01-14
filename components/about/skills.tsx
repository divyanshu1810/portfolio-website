import React, { FunctionComponent } from "react";
import Skilltag from "./skilltag";

const Skills: FunctionComponent = () => {
  return (
    <div className=" text-right">
      <div className=" lg:text-5xl font-semibold md:text-4xl text-2xl md:pb-14 pb-8">
        WHAT I&apos;M GOOD AT
      </div>
      <div className="lg:text-3xl font-semibold md:text-2xl text-xl md:pb-6 pb-4">
        A DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
      </div>
      <div className=" flex justify-end md:pb-6 pb-4">
        <Skilltag image="/skills/js.png" />
        <Skilltag image="/skills/node.png" />
        <Skilltag image="/skills/react.png" />
        <Skilltag image="/skills/tailwind.png" />
      </div>
      <div className=" flex justify-end md:pb-6 pb-4">
        <Skilltag image="/skills/ts.png" />
        <Skilltag image="/skills/next.svg" />
        <Skilltag image="/skills/java.png" />
        <Skilltag image="/skills/github.png" />
      </div>
      <div className=" flex justify-end ">
        <Skilltag image="/skills/gc.png" />
        <Skilltag image="/skills/aws.png" />
      </div>
      <div className=" text-right text-xl md:pb-14 pb-8 md:pt-6 pt-4">
        <div>
          Develop highly interactive Front end / User Interfaces for your web
          applications
        </div>
        <div>
          Integration of third party services such as Firebase/ AWS / Google
          Cloud
        </div>
      </div>
    </div>
  );
};

export default Skills;
