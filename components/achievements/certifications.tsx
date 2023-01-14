import React, { FunctionComponent } from "react";
import Certificatecard from "./certificatecard";

const Certifications: FunctionComponent = () => {
  return (
    <>
      <div className=" lg:text-5xl font-semibold md:text-4xl text-2xl md:pt-20 pt-10">
        CERTIFICATES
      </div>
      <div className="md:pt-20 pt-10 flex justify-evenly flex-wrap">
        <Certificatecard
          name="Google Cloud Platform"
          stack="Cloud Digital Leader Learning Path"
          image="/communities/gdsc.png"
          link="https://www.cloudskillsboost.google/public_profiles/82f76ec3-b122-4c62-8e3d-f7515b6a07f2"
        />
        <Certificatecard
          name="HackerRank"
          stack="React (Basic) Certificate"
          image="/communities/hr.png"
          link="https://www.hackerrank.com/certificates/9f4e0acf1e2d"
        />
      </div>
    </>
  );
};

export default Certifications;
