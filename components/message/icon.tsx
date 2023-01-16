import React from "react";
import Link from "next/link";
import Draggable, { DraggableCore } from "react-draggable";
function Icon() {
  return (
    <Link href="/message">
      <Draggable>
        <div className="fixed animate-pulse z-50 cursor-pointer right-6 bottom-6 lg:right-8 lg:bottom-8 hover:bg-red-500 duration-150 bg-red-800 rounded-full p-3">
          <picture>
            <img
              width={35}
              className=" -rotate-12 "
              src="/messages/message.png"
              alt="message-icon"
            />
          </picture>
        </div>
      </Draggable>
    </Link>
  );
}

export default Icon;
