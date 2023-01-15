import React, { FunctionComponent } from "react";

const Loader: FunctionComponent = () => {
  return (
    <div className=" flex justify-center">
      <div className="absolute top-[40%] p-6 rounded-xl bg-white bg-opacity-0 hover:bg-opacity-10 backdrop-blur-lg drop-shadow-lg">
        <picture>
          <img
            className=" md:hidden animate-bounce"
            width={200}
            src="/logo.png"
            alt=""
          />
          <img
            className=" hidden md:block animate-bounce"
            width={300}
            src="/logo.png"
            alt=""
          />
        </picture>
      </div>
    </div>
  );
};

export default Loader;
