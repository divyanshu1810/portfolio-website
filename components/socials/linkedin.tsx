import React, { FunctionComponent } from "react";
interface Linkedintype {
  url: string;
}
const Linkedin: FunctionComponent<Linkedintype> = ({ url }: Linkedintype) => {
  return (
    <div className="pb-10 md:mx-10">
      <iframe
        className="rounded-lg"
        src={url}
        height={450}
        width={320}
        // frameborder="0"
        // allowfullscreen=""
        title="Embedded post"
      ></iframe>
    </div>
  );
};

export default Linkedin;
