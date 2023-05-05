import React, { FunctionComponent } from "react";
import CommunityCard from "./communitycard";
import { MUG, KEYWORDS } from "@/utils/constants";
const Experience: FunctionComponent = () => {
  return (
    <div>
      <div className=" lg:text-5xl font-semibold md:text-4xl text-2xl">
        {KEYWORDS.EXPERIENCE}
      </div>
      <div className=" lg:flex lg:flex-wrap lg:justify-evenly">
        <CommunityCard
          name={MUG.NAME}
          reason={MUG.REASON}
          image={MUG.IMAGE}
          time={MUG.TIME}
          marks={MUG.MARKS}
        />
      </div>
    </div>
  );
};

export default Experience;
