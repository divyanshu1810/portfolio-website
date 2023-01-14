import React, { FunctionComponent } from "react";
import CommunityCard from "./communitycard";

const Community: FunctionComponent = () => {
  return (
    <div>
      <div className=" lg:text-5xl font-semibold md:text-4xl text-2xl">
        COLLEGE COMMUNITIES
      </div>
      <div>
        <CommunityCard
          name="Alexa Developers SRM"
          reason="Technical Executive"
          image="/communities/alexa.svg"
          time="Spetember 2021 - Present"
          marks=""
        />
        <CommunityCard
          name="The Next Tech Lab"
          reason="Member - Tesla Lab"
          image="/communities/ntl.png"
          time="October 2021 - Present"
          marks=""
        />
        <CommunityCard
          name="Google Developers Student Clubs SRM"
          reason="Technical Member"
          image="/communities/gdsc.png"
          time="October 2022 - Present"
          marks=""
        />
        <CommunityCard
          name="TEDxSRMIST"
          reason="Technical Associate Lead"
          image="/communities/ted.svg"
          time="September 2022 - Present"
          marks=""
        />
        <CommunityCard
          name="SRMKZILLA"
          reason="Technical Member"
          image="/communities/kzilla.png"
          time="October 2022 - Present"
          marks=""
        />
      </div>
    </div>
  );
};

export default Community;
