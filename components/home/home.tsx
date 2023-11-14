import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";
interface Maintype {
  image: string;
  lineonewhiteleft: string;
  lineonewhiteright: string;
  lineonered: string;
  name: string;
  linetwowhite: string;
  linetworedleft: string;
  linetworedright: string;
  linetwodot: string;
}
const Main: FunctionComponent<Maintype> = ({
  name,
  image,
  lineonered,
  lineonewhiteleft,
  lineonewhiteright,
  linetworedleft,
  linetworedright,
  linetwodot,
  linetwowhite,
}: Maintype) => {
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
      <div className="lg:mx-32 md:mx-8 mx-4 -z-10 rounded-xl my-6  bg-white bg-opacity-0 hover:bg-opacity-10 backdrop-blur-lg drop-shadow-lg duration-200">
        <div className="flex flex-col lg:flex-row py-20 px-4 items-center justify-center lg:space-x-20">
          <div className="lg:w-[20%] md:w-[40%] w-[50%]">
            <picture>
              <img
                className="rounded-full md:mb-20 mb-10 lg:mb-0"
                src={image}
                alt="main-image"
              ></img>
            </picture>
          </div>
          <div>
            <div className=" md:text-3xl text-base text-center lg:text-right pb-2">
              {lineonewhiteleft}
              <span className=" text-red-600">{lineonered}</span>
              {lineonewhiteright}
            </div>
            <div className=" md:text-7xl text-4xl text-center lg:text-right font-semibold pb-2">
              {name}
            </div>
            <div className=" md:text-3xl text-base text-center lg:text-right text-red-600">
              {linetworedleft}
              <span className=" text-white">{linetwowhite}</span>
              {linetworedright}
              <span className=" text-white">{linetwodot}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
