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
    <div className="lg:mx-6 md:w-80 md:h-auto flex flex-col rounded-xl border-2 lg:mb-24 mb-10 border-red-600 p-14 bg-black">
      <div className="event-card-master lg:block md:flex md:flex-col md:justify-evenly lg:mt-6 ">
        <div className="-mt-10 image-block justify-center flex mb-3">
          <picture>
            <img src={image} alt="event-image" />
          </picture>
        </div>
        <h3 className=" text-center md:text-lg sm:tracking-widest md:tracking-tight font-semibold mb-3">
          {name}
        </h3>
        <h3 className=" text-center md:text-md sm:tracking-widest md:tracking-tight font-semibold mb-3">
          {stack}
        </h3>

        <div className="flex justify-center">
          <Link href={link}>
            <button className="m-0 border-2 font-WorkSans bg-red-900 border-blue-200 hover:bg-red-600 p-2 rounded-xl text-sm">
              View Github
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
