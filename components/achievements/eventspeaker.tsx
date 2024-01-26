import React, { FunctionComponent } from "react";
import Speakercard from "./speakercard";
import { GIT101, GRAPHQ, KEYWORDS } from "@/utils/constants";
const Eventspeaker: FunctionComponent = () => {
    return (
        <>
            <div className=" lg:text-5xl font-semibold md:text-4xl text-2xl">
                {KEYWORDS.SPEAKER}
            </div>
            <div className="flex justify-evenly space-y-10 flex-wrap md:pt-20 pt-10 lg:space-y-0 ">
                <Speakercard name={GRAPHQ.NAME} link={GRAPHQ.LINK} />
                <Speakercard name={GIT101.NAME} link={GIT101.LINK} />
            </div>
        </>
    );
};

export default Eventspeaker;
