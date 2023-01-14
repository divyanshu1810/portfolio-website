import React, { FunctionComponent } from "react";
import Button from "./button";

const About: FunctionComponent = () => {
  return (
    <div>
      <div className=" lg:text-5xl font-semibold md:text-4xl text-2xl">
        HEY ALL, I&apos;M DIVYANSHU YADAV
      </div>
      <div className=" lg:text-3xl md:text-2xl text-xl max-w-3xl md:py-14 py-8">
        A Tech Geek Software Developer 🚀 having an experience of building Web
        Applications with JavaScript / TypeScipt / Reactjs / Nodejs and some
        other cool libraries and frameworks.
      </div>
      <div className=" flex space-x-6 md:pb-14 pb-8">
        <Button type="LINKTREE" link="https://linktr.ee/devyansh18._" />
        <Button type="SEE MY RESUME" link="" />
      </div>
    </div>
  );
};

export default About;
