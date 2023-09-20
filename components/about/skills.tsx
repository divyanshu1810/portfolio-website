import React, { FunctionComponent } from "react";
import Skilltag from "./skilltag";
import { SKILLSIMAGE } from "@/utils/constants";
interface Skilltype {
  head: string;
  about: string;
  bulletone: string;
  bullettwo: string;
}
const Skills: FunctionComponent<Skilltype> = ({
  head,
  about,
  bulletone,
  bullettwo,
}: Skilltype) => {
  return (
    <div className=" text-right">
      <div className=" lg:text-5xl font-semibold md:text-4xl text-2xl md:pb-14 pb-8">
        {head}
      </div>
      <div className="lg:text-3xl font-semibold md:text-2xl text-xl md:pb-6 pb-4">
        {about}
      </div>
      <div className=" flex justify-end md:pb-6 pb-4">
        <Skilltag image={SKILLSIMAGE.JS} />
        <Skilltag image={SKILLSIMAGE.NODE} />
        <Skilltag image={SKILLSIMAGE.REACT} />
        <Skilltag image={SKILLSIMAGE.GITHUB} />
      </div>
      <div className=" flex justify-end md:pb-6 pb-4">
        <Skilltag image={SKILLSIMAGE.TS} />
        <Skilltag image={SKILLSIMAGE.NEXT} />
        <Skilltag image={SKILLSIMAGE.JAVA} />
        <Skilltag image={SKILLSIMAGE.TAILWIND} />
      </div>
      <div className=" flex justify-end md:pb-6 pb-4">
        <Skilltag image={SKILLSIMAGE.EXPRESS} />
        <Skilltag image={SKILLSIMAGE.HTML} />
        <Skilltag image={SKILLSIMAGE.CSS} />
        <Skilltag image={SKILLSIMAGE.MONGO} />
      </div>
      <div className=" flex justify-end">
        <Skilltag image={SKILLSIMAGE.GC} />
        <Skilltag image={SKILLSIMAGE.AWS} />
        <Skilltag image={SKILLSIMAGE.GO} />
        <Skilltag image={SKILLSIMAGE.FIREBASE} />
      </div>
      <div className=" text-right text-xl md:pb-14 pb-8 md:pt-6 pt-4">
        <div>{bulletone}</div>
        <div>{bullettwo}</div>
      </div>
    </div>
  );
};

export default Skills;
