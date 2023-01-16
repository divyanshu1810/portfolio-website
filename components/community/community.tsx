import React, { FunctionComponent } from "react";
import CommunityCard from "./communitycard";
import { ADS, TED, KZILLA, GDSC, NTL, KEYWORDS } from "@/utils/constants";
const Community: FunctionComponent = () => {
  return (
    <div>
      <div className=" lg:text-5xl font-semibold md:text-4xl text-2xl">
        {KEYWORDS.COMMUNITIES}
      </div>
      <div>
        <CommunityCard
          name={ADS.NAME}
          reason={ADS.REASON}
          image={ADS.IMAGE}
          time={ADS.TIME}
          marks={ADS.MARKS}
        />
        <CommunityCard
          name={NTL.NAME}
          reason={NTL.REASON}
          image={NTL.IMAGE}
          time={NTL.TIME}
          marks={NTL.MARKS}
        />
        <CommunityCard
          name={GDSC.NAME}
          reason={GDSC.REASON}
          image={GDSC.IMAGE}
          time={GDSC.TIME}
          marks={GDSC.MARKS}
        />
        <CommunityCard
          name={TED.NAME}
          reason={TED.REASON}
          image={TED.IMAGE}
          time={TED.TIME}
          marks={TED.MARKS}
        />
        <CommunityCard
          name={KZILLA.NAME}
          reason={KZILLA.REASON}
          image={KZILLA.IMAGE}
          time={KZILLA.TIME}
          marks={KZILLA.MARKS}
        />
      </div>
    </div>
  );
};

export default Community;
