import React, { FunctionComponent } from "react";
const Main: FunctionComponent = () => {
  return (
    <div className="lg:mx-32 rounded-xl lg:bg-white lg:bg-opacity-0 lg:hover:bg-opacity-10 lg:backdrop-blur-lg lg:drop-shadow-lg">
      <div className="flex flex-col lg:flex-row py-20 items-center justify-center lg:space-x-20">
        <div className="lg:w-[20%] md:w-[40%] w-[60%]">
          <picture>
            <img
              className="rounded-full border-4 md:mb-20 mb-10 lg:mb-0 border-red-600"
              src="/me.jfif"
              alt=""
            ></img>
          </picture>
        </div>
        <div>
          <div className=" md:text-4xl text-xl text-right pb-2">
            System.out.println(&quot;
            <span className=" text-red-600">Hello Developers</span>&quot;);
          </div>
          <div className=" md:text-7xl text-5xl text-right font-semibold pb-2">
            DIVYANSHU
          </div>
          <div className=" md:text-4xl text-xl text-right text-red-600">
            Developer, <span className=" text-white">Programmer and </span>much
            more... <span className=" text-white">.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
