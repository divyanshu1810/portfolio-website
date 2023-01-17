import React, { FunctionComponent } from "react";
import Mapcard from "./mapcard";

const Roadmaps: FunctionComponent = () => {
  return (
    <div className="flex justify-evenly space-y-10 flex-wrap lg:space-y-0 ">
      <Mapcard
        name="Norman Resources - The Next Tech Lab"
        link="https://github.com/NextTechLab/Norman-Resources"
      />
      <Mapcard
        name="Data Structures and Algotithms in JAVA"
        link="https://github.com/divyanshu1810/Data-Structures-Algorithms"
      />
    </div>
  );
};

export default Roadmaps;
