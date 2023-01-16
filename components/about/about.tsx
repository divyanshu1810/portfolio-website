import React, { FunctionComponent } from "react";
import Button from "./button";
import { BUTTONONE, BUTTONTWO } from "@/utils/constants";
interface Abouttype {
  head: string;
  about: string;
}
const About: FunctionComponent<Abouttype> = ({ head, about }: Abouttype) => {
  return (
    <div>
      <div className=" lg:text-5xl font-semibold md:text-4xl text-2xl">
        {head}
      </div>
      <div className=" lg:text-3xl md:text-2xl text-xl max-w-3xl md:py-14 py-8">
        {about}
      </div>
      <div className=" flex space-x-6 md:pb-14 pb-8">
        <Button type={BUTTONONE.TYPE} link={BUTTONONE.LINK} />
        <Button type={BUTTONTWO.TYPE} link={BUTTONTWO.LINK} />
      </div>
    </div>
  );
};

export default About;
