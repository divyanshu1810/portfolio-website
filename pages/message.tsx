import Message from "@/components/message/message";
import React, { FunctionComponent } from "react";

const message: FunctionComponent = () => {
  return (
    <div className="flex justify-center md:my-28 my-10 lg:my-20">
      <Message />
    </div>
  );
};

export default message;
