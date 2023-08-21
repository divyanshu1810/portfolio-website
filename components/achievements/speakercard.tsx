import Link from "next/link";
import React, { FunctionComponent } from "react";
import { BUTTON } from "@/utils/constants";
interface Cardtype {
  name: string;
  link: string;
}
const Speakercard: FunctionComponent<Cardtype> = ({ name, link }: Cardtype) => {
  return (
    <div className="lg:mx-6 hover:shadow-2xl md:w-80 rounded-xl md:mx-10 md:h-52 bg-white bg-opacity-0 hover:bg-opacity-10 backdrop-blur-lg drop-shadow-lg p-6 duration-200">
      <div className="event-card-master lg:block md:flex md:flex-col md:justify-evenly  ">
        <h3 className=" text-center md:text-lg sm:tracking-widest py-4 md:tracking-tight font-semibold">
          {name}
        </h3>

        <div className="flex justify-center">
          <Link href={link} target="_blank">
            <button className="font-WorkSans bg-red-800 font-bold text-white hover:text-red-800 hover:bg-white p-2 rounded-xl text-sm duration-200">
              {BUTTON.CERTIFICATE}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Speakercard;
