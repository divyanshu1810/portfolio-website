import { motion } from "framer-motion";
import { FunctionComponent } from "react";
interface Maintype {
  image: string;
  name: string;
  lineonered: string;
}
const Main: FunctionComponent<Maintype> = ({
  name,
  image,
  lineonered,
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
              {lineonered}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
