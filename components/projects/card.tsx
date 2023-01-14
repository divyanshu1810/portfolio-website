import Link from "next/link";
import React, { FunctionComponent } from "react";
interface Cardtype {
  name: string;
  link: string;
  image: string;
  stack: string;
}
const Card: FunctionComponent<Cardtype> = ({
  stack,
  name,
  link,
  image,
}: Cardtype) => {
  return (
    <div className="lg:mx-6 hover:shadow-2xl md:w-80 md:h-auto flex flex-col rounded-xl border-2 lg:mb-24 mb-10 border-red-600 p-14 mx-10 px-6 bg-white bg-opacity-5 hover:bg-opacity-30 backdrop-blur-lg drop-shadow-lg">
      <div className="event-card-master lg:block md:flex md:flex-col md:justify-evenly lg:mt-6 ">
        <div className="-mt-10 image-block justify-center flex mb-6">
          <picture>
            <img
              className="border-2 border-red-600 rounded-md"
              src={image}
              alt="event-image"
            />
          </picture>
        </div>
        <h3 className=" text-center md:text-lg sm:tracking-widest md:tracking-tight font-semibold mb-3">
          {name}
        </h3>
        <h3 className=" text-center md:text-md sm:tracking-widest md:tracking-tight font-semibold pb-6">
          {stack}
        </h3>

        <div className="flex justify-center">
          <Link href={link} target="_blank">
            <button className="-mb-20 font-WorkSans bg-red-800 font-bold text-white hover:bg-red-600 hover:text-white hover:border-white p-2 rounded-xl text-sm">
              VIEW GITHUB
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
