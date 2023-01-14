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
            <img src={image} alt="education-image" />
          </picture>
        </div>
        <div className=" text-center lg:text-left">
          <div className=" text-3xl font-semibold pb-2">{name}</div>
          <div className=" text-2xl font-semibold">{reason}</div>
          <div className=" text-2xl">{time}</div>
          <div className=" text-2xl">{marks}</div>
        </div>
      </div>
    </div>
  );
};

export default Education;
