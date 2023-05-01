import React from "react";
import Link from "next/link";
function Icon() {
  return (
    <Link href="/message">
      <div className="fixed z-50 cursor-pointer left-6 bottom-6 lg:left-8 lg:bottom-8 hover:bg-red-500 duration-150 bg-red-800 rounded-full p-3">
        <picture>
          <img
            width={35}
            className=" -rotate-12 "
            src="/messages/message.png"
            alt="message-icon"
          />
        </picture>
      </div>
    </Link>
  );
}

export default Icon;
