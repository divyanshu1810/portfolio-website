import React, { FunctionComponent } from "react";
interface Hacktoberfesttype {
  head: string;
  image: string;
}
const Hacktoberfest: FunctionComponent<Hacktoberfesttype> = ({
  head,
  image,
}: Hacktoberfesttype) => {
  return (
    <div>
      <div className=" lg:text-5xl font-semibold md:text-4xl text-2xl">
        {head}
        <div className=" md:pt-20 pt-10">
          <picture>
            <img
              className=" rounded-lg"
              src={image}
              alt="hacktoberfest-image"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Hacktoberfest;
