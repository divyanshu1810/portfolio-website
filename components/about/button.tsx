import Link from "next/link";
import React, { FunctionComponent } from "react";
interface Buttontype {
  type: string;
  link: string;
}
const Button: FunctionComponent<Buttontype> = ({ type, link }: Buttontype) => {
  return (
    <Link href={link} target="_blank">
      <div className=" font-semibold hover:bg-white duration-200 bg-red-800 py-2 px-4 hover:text-red-800  lg:text-lg rounded-md">
        {type}
      </div>
    </Link>
  );
};

export default Button;
