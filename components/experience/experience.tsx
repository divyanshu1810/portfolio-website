import React, { FunctionComponent } from "react";
import CommunityCard from "./communitycard";
import { KEYWORDS, EXPERIENCE } from "@/utils/constants";
const Experience: FunctionComponent = () => {
  return (
    <div>
      <div className=" lg:text-5xl font-semibold md:text-4xl text-2xl">
        {KEYWORDS.EXPERIENCE}
      </div>
      <div className=" lg:flex lg:flex-wrap lg:justify-evenly">
        {EXPERIENCE.map((card, idx: number) => (
          <CommunityCard
            key={idx}
            name={card.NAME}
            reason={card.REASON}
            image={card.IMAGE}
            time={card.TIME}
            marks={card.MARKS}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
