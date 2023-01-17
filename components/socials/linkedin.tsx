import React, { FunctionComponent } from "react";
interface Linkedintype {
  url: string;
}
const Linkedin: FunctionComponent<Linkedintype> = ({ url }: Linkedintype) => {
  return (
    <div className="pb-10">
      <iframe
        className=" rounded-lg"
        src={url}
        height={500}
        width={320}
        // frameborder="0"
        // allowfullscreen=""
        title="Embedded post"
      ></iframe>
    </div>
  );
};

export default Linkedin;
