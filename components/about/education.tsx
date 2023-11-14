import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";
interface Educationtype {
  image: string;
  name: string;
  reason: string;
  time: string;
  marks: string;
}
const Education: FunctionComponent<Educationtype> = ({
  image,
  name,
  reason,
  time,
  marks,
}: Educationtype) => {
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
        <div className="flex lg:flex-row flex-col items-center py-10 lg:space-x-14 border-b-2">
          <div>
            <picture>
              <img src={image} width={200} alt="education-image" />
            </picture>
          </div>
          <div className=" text-center lg:text-left">
            <div className=" md:text-3xl text-xl font-semibold pb-2">
              {name}
            </div>
            <div className=" md:text-2xl text-lg font-semibold">{reason}</div>
            <div className=" md:text-2xl text-lg">{time}</div>
            <div className=" md:text-2xl text-lg">{marks}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
