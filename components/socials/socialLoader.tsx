import React, { FunctionComponent } from "react";

const SocialLoader: FunctionComponent = () => {
  return (
    <div className=" flex justify-center">
      <div className="pt-16 pb-8 px-4 rounded-xl bg-white bg-opacity-0 hover:bg-opacity-10 backdrop-blur-lg drop-shadow-lg">
        <picture>
          <img
            className=" md:hidden animate-bounce"
            width={200}
            src="/twitter.png"
            alt=""
          />
          <img
            className=" hidden md:block animate-bounce"
            width={200}
            src="/twitter.png"
            alt=""
          />
        </picture>
      </div>
    </div>
  );
};

export default SocialLoader;
