import React, { FunctionComponent } from "react";
import CommunityCard from "./communitycard";
import { KEYWORDS, COMMUNITIES } from "@/utils/constants";

const Community: FunctionComponent = () => {
  return (
    <div>
      <div className=" lg:text-5xl font-semibold md:text-4xl text-2xl">
        {KEYWORDS.COMMUNITIES}
      </div>
      <div className=" lg:flex lg:flex-wrap lg:justify-evenly">
        {COMMUNITIES.map((card, idx: number) => (
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

export default Community;
