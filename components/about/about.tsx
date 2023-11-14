import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";
import Button from "./button";
import { BUTTONONE, BUTTONTWO } from "@/utils/constants";
interface Abouttype {
  head: string;
  about: string;
}
const About: FunctionComponent<Abouttype> = ({ head, about }: Abouttype) => {
  return (
    <motion.div
      initial={{ x: -2500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 1.0, // Reduced the duration
        delay: 0.5,
        ease: "easeInOut",
      }}
    >
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
    </motion.div>
  );
};

export default About;
