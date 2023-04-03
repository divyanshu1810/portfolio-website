import React, { FunctionComponent } from "react";
import Certificatecard from "./certificatecard";
import { GOOGLE, HACKERRANK, KEYWORDS, UDEMY } from "@/utils/constants";
const Certifications: FunctionComponent = () => {
  return (
    <>
      <div className=" lg:text-5xl font-semibold md:text-4xl text-2xl md:pt-20 pt-10">
        {KEYWORDS.CERTIFICATES}
      </div>
      <div className="md:pt-20 pt-10 flex justify-evenly flex-wrap">
        <Certificatecard
          name={GOOGLE.NAME}
          stack={GOOGLE.STACK}
          image={GOOGLE.IMAGE}
          link={GOOGLE.LINK}
        />
        <Certificatecard
          name={UDEMY.NAME}
          stack={UDEMY.STACK}
          image={UDEMY.IMAGE}
          link={UDEMY.LINK}
        />
        <Certificatecard
          name={HACKERRANK.NAME}
          stack={HACKERRANK.STACK}
          image={HACKERRANK.IMAGE}
          link={HACKERRANK.LINK}
        />
      </div>
    </>
  );
};

export default Certifications;
