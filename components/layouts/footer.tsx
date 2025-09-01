import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { animateScroll as scroll } from "react-scroll";
const Footer: FunctionComponent = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div
      id="contact"
      className="h-64 mt-10 flex items-center justify-around flex-col lg:flex-row md:flex-row mb-10"
    >
      <div className="lg:hidden md:hidden mb-6 text-center">
        <p className="font-semibold text-3xl lg:text-5xl font-OpenSans tracking-wider">
          DIVYANSHU
        </p>
        <p className="font-extrabold text-3xl lg:text-5xl font-OpenSans tracking-wide text-red-700">
          YADAV.
        </p>
      </div>
      <div
        onClick={scrollToTop}
        className="hidden lg:flex cursor-pointer md:flex flex-col"
      >
        <p className="font-semibold text-3xl lg:text-5xl font-OpenSans tracking-wider">
          DIVYANSHU
        </p>
        <p className="font-extrabold text-3xl lg:text-5xl font-OpenSans  text-red-700">
          YADAV.
        </p>
      </div>
      <div>
        <div className="flex items-center justify-center lg:justify-start md:justify-start mb-2">
          <div className="hidden lg:block">
            <Image
              src="/Instagram.svg"
              alt="insta"
              width="36"
              height="36"
            ></Image>
          </div>
          <div className="lg:hidden">
            <Image
              src="/Instagram.svg"
              alt="insta"
              width="26"
              height="26"
            ></Image>
          </div>
          <Link href="https://www.instagram.com/devyansh18._/?hl=en">
            <p className="hover:text-slate-400 cursor-pointer ml-3 lg:text-lg tracking-wider duration-200">
              devyansh18._
            </p>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="hidden lg:block">
            <Image src="/Mail.svg" alt="insta" width="36" height="36"></Image>
          </div>
          <div className="lg:hidden">
            <Image src="/Mail.svg" alt="mail" width="26" height="26"></Image>
          </div>
          <Link href="mailto:divyanshu.1810@gmail.com">
            <p className="hover:text-slate-400 cursor-pointer ml-3 lg:text-lg tracking-wider duration-200">
              divyanshu.1810@gmail.com
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
