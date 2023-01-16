import React, { FunctionComponent } from "react";
interface Skilltype {
  image: string;
}
const Skilltag: FunctionComponent<Skilltype> = ({ image }: Skilltype) => {
  return (
    <div>
      <div className="ml-4 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-30 backdrop-blur-lg drop-shadow-lg p-2">
        <picture>
          <img src={image} className="" width="50" alt="skill-image" />
        </picture>
      </div>
    </div>
  );
};

export default Skilltag;
