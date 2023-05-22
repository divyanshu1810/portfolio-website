import React, { FunctionComponent } from "react";
import Certificatecard from "./certificatecard";
import { CERTIFICATES, KEYWORDS } from "@/utils/constants";
const Certifications: FunctionComponent = () => {
  return (
    <>
      <div className=" lg:text-5xl font-semibold md:text-4xl text-2xl md:pt-20 pt-10">
        {KEYWORDS.CERTIFICATES}
      </div>
      <div className="md:pt-20 pt-10 flex justify-evenly flex-wrap">
        {CERTIFICATES.map((card, idx: number) => (
          <Certificatecard
            key={idx}
            name={card.NAME}
            stack={card.STACK}
            image={card.IMAGE}
            link={card.LINK}
          />
        ))}
      </div>
    </>
  );
};

export default Certifications;
