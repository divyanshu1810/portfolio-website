import React, { FunctionComponent } from "react";
interface Educationtype {
  image: string;
  name: string;
  reason: string;
  time: string;
  marks: string;
}
const Education: FunctionComponent<Educationtype> = ({
  image,
  name,
  reason,
  time,
  marks,
}: Educationtype) => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col items-center py-10 lg:space-x-14 border-b-2">
        <div>
          <picture>
            <img src={image} width={200} alt="education-image" />
          </picture>
        </div>
        <div className=" text-center lg:text-left">
          <div className=" md:text-3xl text-xl font-semibold pb-2">{name}</div>
          <div className=" md:text-2xl text-lg font-semibold">{reason}</div>
          <div className=" md:text-2xl text-lg">{time}</div>
          <div className=" md:text-2xl text-lg">{marks}</div>
        </div>
      </div>
    </div>
  );
};

export default Education;
