import React, { FunctionComponent } from "react";
import Speakercard from "./speakercard";

const Eventspeaker: FunctionComponent = () => {
  return (
    <>
      <div className=" lg:text-5xl font-semibold md:text-4xl text-2xl">
        SPEAKER
      </div>
      <div className="flex justify-evenly space-y-10 flex-wrap md:pt-20 pt-10 lg:space-y-0 ">
        <Speakercard
          name="GraphQ - Alexa Developers SRM"
          link="https://www.linkedin.com/in/divyanshu-yadav-b32a76220/overlay/1635504070544/single-media-viewer/?profileId=ACoAADev3dYBF_E6Bs7VZpBNQmNEyadfyL8fqjE"
        />
      </div>
    </>
  );
};

export default Eventspeaker;
