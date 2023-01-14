import About from "@/components/about/about";
import Education from "@/components/about/education";
import { NextPage } from "next";
import React from "react";

const about: NextPage = () => {
  return (
    <div className=" lg:px-24 md:px-14 px-8">
      <About />
      <div className=" lg:text-5xl font-semibold md:text-4xl text-2xl">
        EDUCATION
      </div>
      <Education
        name="Boys' High School & College"
        reason="High School and Intermediate"
        image="/school.png"
        time="April 2009 - March 2021"
        marks="Class X : 91.2% | Class XII : 92.4%"
      />
      <Education
        image="/college.png"
        name="SRM Institute of Science & Technology"
        reason="Bachelor of Technology in Computer Science"
        time="September 2021 - June 2025"
        marks="CGPA : 9.85"
      />
      {/* <About /> */}
    </div>
  );
};

export default about;
