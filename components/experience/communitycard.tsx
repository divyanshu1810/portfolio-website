import React, { FunctionComponent } from "react";
interface Educationtype {
  image: string;
  name: string;
  reason: string;
  time: string;
  marks: string;
}

const CommunityCard: FunctionComponent<Educationtype> = ({
  image,
  name,
  reason,
  time,
  marks,
}: Educationtype) => {
  return (
    <div>
      <div className="bg-white bg-opacity-0 hover:bg-opacity-10 backdrop-blur-lg drop-shadow-lg flex lg:flex-row  flex-col lg:max-w-xl items-center py-10 lg:space-x-14 my-10 lg:px-16 px-2 rounded-lg duration-200">
        <div className=" pb-4 lg:pb-0">
          <picture>
            <img width={100} src={image} alt="education-image" />
          </picture>
        </div>
        <div className=" text-center lg:text-left">
          <div className="md:text-3xl text-xl font-semibold pb-2">{name}</div>
          <div className=" md:text-2xl text-lg font-semibold">{reason}</div>
          <div className="md:text-2xl text-lg">{time}</div>
          <div className="md:text-2xl text-lg">{marks}</div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
